module.exports = function (req, res, next) {
  if (req.user.role !== 1)
    return res.status(403).send("Access denied. Admin privileges required.");

  next();
};
