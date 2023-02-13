const db = require("../../../config/db/fake-db");

const updateUser = (userId, userData) => {
  try {
    const data = db.loadData();
    data.users.map((user) => {
      if (user._id == userId) {
        user.age = userData.age;
        user.name.first = userData.first_name;
        user.name.last = userData.last_name;
        user.company = userData.company;
        user.phone = userData.phone;
        user.address = userData.address;
      }
    });
    return db.updateData(data);
  } catch (error) {
    throw new Error(error.errors);
  }
};

module.exports = { updateUser };
