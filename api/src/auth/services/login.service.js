const db = require("../../../config/db/fake-db");
const invalidMessage = { msg: "invalid user or password." };

const userLogin = async (email, password) => {
  try {
    const resp = db.loadData();
    const isValidUser = resp.users.find((user) => user.email == email);
    if (!isValidUser) {
      throw invalidMessage;
    }

    if (password != isValidUser.password) {
      throw invalidMessage;
    }
    isValidUser.password = undefined;
    return isValidUser;
  } catch (error) {
    throw error;
  }
};

module.exports = { userLogin };
