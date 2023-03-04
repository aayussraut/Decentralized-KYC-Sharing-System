const express = require("express");
const admin = require("../middleware/isAdmin");
const router = express.Router();
const {
  addData,
  getData,
  getDataByAccountNo,
} = require("../controllers/UserData");
const { authenticatateJWT } = require("../middleware/authenticator");
const {
  userDataValidator,
  validatorResult,
} = require("../middleware/validator");

router.post(
  "/addData",
  authenticatateJWT,
  userDataValidator,
  validatorResult,
  addData
);

router.get("/getData", authenticatateJWT, getData);
router.get("/getData/:account_no", authenticatateJWT, getDataByAccountNo);

module.exports = router;
