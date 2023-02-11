const { checkSchema } = require("express-validator");

const passwordLength = { min: 4, max: 128 };

const loginValidator = checkSchema({
  email: {
    errorMessage: `must be a valid email`,
    isEmail: true,
    trim: true,
  },
  password: {
    isLength: {
      errorMessage: `min length shoud be ${passwordLength.min}, max length shoud be ${passwordLength.max}`,
      options: { min: passwordLength.min, max: passwordLength.max },
    },
    trim: true,
  },
});

module.exports = loginValidator;
