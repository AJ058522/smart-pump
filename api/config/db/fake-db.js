const fs = require("fs");

const loadData = () => {
  const data = fs.readFileSync(
    "C:/Users/AJBUC/Desktop/dev-test/data/users.json",
    "utf8",
    (error, jsonString) => {
      if (error) {
        throw error;
      }
    }
  );
  return JSON.parse(data);
};

module.exports = { loadData };
