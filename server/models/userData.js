const mongoose = require("mongoose");

const userDataSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    account_no: {
      type: String,
      required: true,
    },
    user_address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;
