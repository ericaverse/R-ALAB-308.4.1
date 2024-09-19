//Part 1. Refactoring Old Code
console.log("---------PART 1---------");
/*modifying loops.js
--
//Part Three: Feeling Loopy

let csvData = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
let comma = ",";
let newLine = `\n`;

let start = 0;

for (let i = 0; i < 11; i++) {
  let end = csvData.indexOf(newLine, start);
  if (end === -1) end = csvData.length;

  //Extract the row data
  let row = csvData.substring(start, end);

  //Find column positions
  let column1 = row.indexOf(comma);
  let column2 = row.indexOf(comma, column1 + 1);
  let column3 = row.indexOf(comma, column2 + 1);

  //Extract column values
  let index = row.substring(0, column1).trim();
  let mass = row.substring(column1 + 1, column2).trim();
  let spring1 = row.substring(column2 + 1, column3).trim();
  let spring2 = row.substring(column3 + 1).trim();

  //Results
  console.log(`${index} ${mass} ${spring1} ${spring2}`);

  //Move to the next row
  start = end + newLine.length;
}
*/

//Initialize Array
const dataArray = [];
let csvData = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
const comma = ",";
const newLine = `\n`;
let start = 0;

for (let i = 0; i < 11; i++) {
  let end = csvData.indexOf(newLine, start);
  if (end === -1) {
    end = csvData.length;

    //Extract the row data
    let row = csvData.substring(start, end);

    //Find column positions
    let column1 = row.indexOf(comma);
    let column2 = row.indexOf(comma, column1 + 1);
    let column3 = row.indexOf(comma, column2 + 1);

    //Extract column values
    dataArray[0] = row.substring(0, column1).trim();
    dataArray[1] = row.substring(column1 + 1, column2).trim();
    dataArray[2] = row.substring(column2 + 1, column3).trim();
    dataArray[3] = row.substring(column3 + 1).trim();

    //Results
    console.log(dataArray[0], dataArray[1], dataArray[2], dataArray[3]);

    //Move to the next row
    start = end + newLine.length;
  }
}
console.log("------------------------");
console.log("------------------------");
console.log("---------PART 2---------");
// Part 2. Expanding Functionality
// let // csvData = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
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

console.log("------------------------");
console.log("------------------------");
console.log("---------PART 3---------");
//Part 3. Transforming Data

console.log("------------------------");
console.log("------------------------");
console.log("---------PART 4---------");
//Part 4. Sorting and Manipulating Data

console.log("------------------------");
console.log("------------------------");
console.log("---------PART 5---------");
// //Part 5. Full Circle
