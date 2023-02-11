require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwtTokenGenerator = (data) => {
  return process.env.TOKEN_SECRET;
  return jwt.sign(data.toJSON(), process.env.TOKEN_SECRET, {
    expiresIn: process.env.expiresIn,
  });
};

module.exports = jwtTokenGenerator;
