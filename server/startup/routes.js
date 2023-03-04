const express = require("express");
const authRoutes = require("../routes/auth");
const addUserData = require("../routes/addUserData");

module.exports = function (app) {
  app.use("/api/auth", authRoutes);
  app.use("/api", addUserData);
};
