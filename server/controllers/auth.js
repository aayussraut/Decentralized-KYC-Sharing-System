const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

exports.signup = async (req, res) => {
  const { full_name, email, username, phonenumber, password } = req.body;
  // console.log(req.body);
  try {
    const user_email = await User.findOne({ email }); //finds if email already exists
    const user_phnumber = await User.findOne({ phonenumber });
    const user_username = await User.findOne({ phonenumber }); //finds if phonenumber already exists
    if (user_email) {
      return res.status(400).json({
        errorMessage: "Email Already Exists",
      });
    } else if (user_phnumber) {
      return res.status(400).json({
        errorMessage: "Phone Number has already been registered",
      });
    } else if (user_username) {
      // console.log(username);
      return res.status(400).json({
        errorMessage: "Username has already been used.Pick another one",
      });
    } else {
      const newUser = new User();
      newUser.full_name = full_name;
      newUser.email = email;
      newUser.phonenumber = phonenumber;
      newUser.username = username;
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(password, salt);
      await newUser.save();
      return res.status(201).json({
        //201 =created successfully
        successMessage: "Registration Successful, Please Login to Continue.",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errorMessage: "Server Error",
    });
  }
};

exports.signin = async (req, res) => {
  const { email_username, password } = req.body;
  // console.log(req.body);
  try {
    const user = await User.findOne({
      $or: [{ email: email_username }, { username: email_username }],
    }); //uta frontend ma email or username rakheko bhayera user le email or username kunai pani user garna sakxa so email ra username ma user le proivide gareko credentials match gareko
    if (!user) {
      return res.status(400).json({
        errorMessage: "Invalid Credentials",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        errorMessage: "Invalid Credentials",
      });
    }
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };
    jwt.sign(
      payload,
      config.get("ACCESS_TOKEN_SECRET"),
      {
        expiresIn: 36000,
      },
      (err, token) => {
        if (err) throw err;
        const { role, username } = user;

        res
          .cookie("token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({
            token,
            user: {
              role,
              username,
            }, //frontend ma cookies set garna ko lagi token ani user details chai authentication ko lagi
          });
      }
    );
    // console.log(user);
  } catch (err) {
    res.status(500).json({
      errorMessage: "Server Error",
    });
  }
};
