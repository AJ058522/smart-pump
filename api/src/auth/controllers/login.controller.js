const loginService = require("../services/login.service");
const { validationResult } = require("express-validator");
const jwtTokenGenerator = require("../../shared/utils/jwtTokenGenerator");

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const data = await loginService.userLogin(
      req.body.email,
      req.body.password
    );
    const jwtToken = jwtTokenGenerator(data);
    return await res
      .status(200)
      .json({
        msg: "logged in successfully.",
        token: jwtToken,
        userdata: data,
      });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { loginUser };
