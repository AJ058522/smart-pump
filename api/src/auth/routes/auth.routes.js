const express = require("express");
const router = express.Router();

const { loginController, signupController } = require("../controllers");
const { loginValidator } = require("../validators");

router.post("/login", loginValidator, loginController.loginUser);

module.exports = router;
