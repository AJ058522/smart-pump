const jwt = require("jsonwebtoken");

const isAuthorized = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader ? authHeader.split(" ")[1] : null;

  if (token == null) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ msg: "forbidden" });
    }
    req.user = user;
    next();
  });
};

module.exports = { isAuthorized };
