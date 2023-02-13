const getOneUserService = require("../services/user.getOne.service");

const getOneUser = async (req, res) => {
  try {
    const data = await getOneUserService.getOneUser(req.params.userId);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error.errors);
  }
};

module.exports = { getOneUser };
