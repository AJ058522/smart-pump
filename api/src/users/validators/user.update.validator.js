const { checkSchema } = require("express-validator");
const validators = require("./validators");

let updateValidator = checkSchema(validators.updateValidator);

module.exports = updateValidator;
