require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwtTokenGenerator = (data) => {
  return jwt.sign(data, process.env.TOKEN_SECRET, {
    expiresIn: process.env.expiresIn,
  });
};

module.exports = jwtTokenGenerator;
