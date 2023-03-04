const { check, validationResult } = require("express-validator");

exports.userSignupValidator = [
  check("full_name").not().isEmpty().withMessage("Name is required"),
  check("username").not().isEmpty().withMessage("Username is required"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("phonenumber")
    .not()
    .isEmpty()
    .trim()
    .isLength({
      min: 10,
    })
    .withMessage("Phone number is digit are incomplete"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

exports.userDataValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("account_no").not().isEmpty().withMessage("Account Number is required"),
  check("user_address").not().isEmpty().withMessage("Address is required"),
];

exports.validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if (hasErrors) {
    const errMsg = result.array()[0].msg;

    return res.status(400).json({
      errorMessage: errMsg,
    });
  }

  next();
};
