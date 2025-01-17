const fs = require("fs");
const path = require("path");

// Function to read data from file
const readData = () => {
  const filePath = path.resolve(__dirname, "../db/prototype.json");
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data) || [];
};

// Function to write Data back to the file
const writeData = (Data) => {
  const updatedData = JSON.stringify(Data, null, 2);
  const filePath = path.resolve(__dirname, "../db/prototype.json");
  fs.writeFileSync(filePath, updatedData);
};

module.exports = {
  readData,
  writeData,
};
