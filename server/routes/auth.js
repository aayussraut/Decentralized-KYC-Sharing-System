const express = require("express");
const router = express.Router();

const { signup, signin } = require("../controllers/auth");
const {
  userSignupValidator,
  validatorResult,
} = require("../middleware/validator");

router.post("/signup", userSignupValidator, validatorResult, signup); //userSignupValidator and validatorResult are middleware functions
router.post("/signin", signin);
module.exports = router;
