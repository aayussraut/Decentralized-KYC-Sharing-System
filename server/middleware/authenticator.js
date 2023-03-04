const jwt = require("jsonwebtoken");
const config = require("config");

exports.authenticatateJWT = (req, res, next) => {
  // console.log(req.cookies);
  const token = req.cookies.token;
  // console.log("token: ", token);
  if (!token) {
    return res.status(401).json({
      errorMessage: "No token. Authorization denied",
    });
  }
  console.log("inside authenticator");
  try {
    const decoded = jwt.verify(token, config.get("ACCESS_TOKEN_SECRET"));
    req.user = decoded.user;
    console.log("here?????");
    next();
  } catch (err) {
    console.log("jwt error: ", err);
    res.status(401).json({
      errorMessage: "Invalid token",
    });
  }
};
