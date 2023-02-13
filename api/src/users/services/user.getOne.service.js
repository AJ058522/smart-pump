const db = require("../../../config/db/fake-db");

const getOneUser = (userId) => {
  try {
    const resp = db.loadData();
    const user = resp.users.find((user) => user._id == userId);
    user.password = undefined;
    return user;
  } catch (error) {
    throw new Error(error.errors);
  }
};

module.exports = { getOneUser };
