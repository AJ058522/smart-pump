const fs = require("fs");
const { dirname } = require("path");
let appDir = dirname(require.main.path);
appDir = appDir.split("api");
const filePath = appDir[0] + "data/users.json";

const loadData = () => {
  const data = fs.readFileSync(filePath, "utf8", (error, jsonString) => {
    if (error) {
      throw error;
    }
  });
  return JSON.parse(data);
};

const updateData = (data) => {
  const resp = fs.writeFileSync(filePath, JSON.stringify(data), (error) => {
    if (error) {
      throw error;
    }
  });
  return resp;
};

module.exports = { loadData, updateData };
