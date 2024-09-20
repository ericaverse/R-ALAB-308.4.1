/* Part 3 of ALAB 308.4.1 */
// Part 3
let csvData = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
const dataArray = [];
const comma = ",";
const newLine = `\n`;
let start = 0;
let allColumns = 0;
let n = 0;
let space = " ";
// dataArray = []; // data array has already been declared --otherwise 'let dataArray'

for (let i = 0; i < csvData.length; i++) {
  //Find amount of columns from first row and push row to dataArray
  if (csvData.charAt(i) === comma) {
    allColumns += 1;
  } else if (csvData.charAt(i) === newLine) {
    console.log("Reached end of row");
    //replace commas with a space
    let rowX = csvData.replaceAll(comma, space).split(newLine);
    dataArray.push(rowX);
    console.log(dataArray);
    break;
  }
  //Update columns after loop is complete
  n = allColumns + 1;
  // dataArray.length = n;
}
// let rowData = rows.map(row => row.split(comma));
//Print Results
console.log(`Number of columns: ${n}`);

let dataArray2 = [
  {
    index: dataArray[0],
    mass: dataArray[1],
    spring1: dataArray[2],
    spring2: dataArray[3],
  },
];

console.log(dataArray2);
