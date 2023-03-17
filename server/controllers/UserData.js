const UserData = require("../models/userData");

exports.addData = async (req, res) => {
  const { name, account_no, user_address } = req.body;

  try {
    const account_number = await UserData.findOne({ account_no });
    if (account_number)
      return res
        .status(400)
        .send({ errorMessage: "Account number already exists." });
    else {
      const newUserData = new UserData();
      newUserData.name = name;
      newUserData.account_no = account_no;
      newUserData.user_address = user_address;
      await newUserData.save();
      return res.status(201).json({
        successMessage: "Data added successfully",
      });
    }
  } catch (err) {
    return res.status(400).send({ errorMessage: "Something wrong happened." });
  }
};

exports.getData = async (req, res) => {
  try {
    const data = await UserData.find();
    console.log("data", data);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).send({ errorMessage: "Something wrong happened." });
  }
};
exports.getRecentData = async (req, res) => {
  try {
    const data = await UserData.find().sort({ createdAt: -1 }).limit(7);
    console.log("data", data);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).send({ errorMessage: "Something wrong happened." });
  }
};
exports.getDataByAccountNo = async (req, res) => {
  const accountNo = req.params.account_no;
  // console.log("account no", accountNo);
  // console.log("account no", req.params.account_no);
  try {
    // console.log("here?");
    const users = await UserData.find({
      account_no: { $regex: "^" + accountNo },
      // },
      // function (err, users) {
      //   if (err) {
      //     console.log(err);
      //     return res
      //       .status(400)
      //       .send({ errorMessage: "Something wrong happened." });
      //   } else {
      //     if (!users)
      //       return res.status(400).send({ errorMessage: "User not found." });
      //     console.log(users);
      //     return res.status(200).json(users);
      //   }
      // }
    });
    // console.log("user", users);
    if (!users)
      return res.status(400).send({ errorMessage: "User not found." });
    // console.log(users);
    return res.status(200).json(users);
    // return res.status(200).json(data);
  } catch (err) {
    return res.status(400).send({ errorMessage: "Something wrong happened." });
  }
};
