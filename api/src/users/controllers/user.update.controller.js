const userUpdateService = require("../services/user.update.service");
const { validationResult } = require("express-validator");

const updateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const data = await userUpdateService.updateUser(
      req.params.userId,
      req.body
    );
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { updateUser };
