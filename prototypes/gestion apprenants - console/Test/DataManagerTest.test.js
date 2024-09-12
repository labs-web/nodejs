const DataManager = require("../DataManagers/ApprenantData");
const readData = DataManager.readData;
const writeData = DataManager.writeData;

const array = [
  {
    first_name: "ESSARRAJ",
    last_name: "Fouad",
  },
];

writeData(array);
console.log(readData());
