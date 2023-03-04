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
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).send({ errorMessage: "Something wrong happened." });
  }
};

exports.getDataByAccountNo = async (req, res) => {
  try {
    const user = await UserData.findOne({ account_no: req.params.account_no });
    if (!user) return res.status(400).send({ errorMessage: "User not found." });
    return res.status(200).json(user);
    // return res.status(200).json(data);
  } catch (err) {
    return res.status(400).send({ errorMessage: "Something wrong happened." });
  }
};
