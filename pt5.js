const { dataArray } = require("./pt4.js");
console.log("___________________________________");
console.log("                                ");
console.log(`Above is the data array from pt4.js`);
console.log("                                ");
console.log("___________________________________");
console.log("................................");
console.log("................................");

const header = Object.keys(dataArray[0]);
let newCsvData = header.join(",") + "\n";

for (let i = 0; i < dataArray.length; i++) {
  newCsvData += header.map((key) => dataArray[i][key]).join(",") + "\n";
}
let csvDataString = newCsvData.toString();

return console.log(`${csvDataString}`);
