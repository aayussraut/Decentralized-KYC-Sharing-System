const mongoose = require("mongoose");
const config = require("config");
mongoose.set("strictQuery", false);

module.exports = function () {
  const db = config.get("db");
  mongoose.connect(db).then(console.log(`Connected to MongoDB...`));
};
