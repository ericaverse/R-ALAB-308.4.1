/* Part 3 of ALAB 308.4.1 */
// Part 3
let csvData = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

const dataArray = [];
const comma = ",";
const newLine = "\n";

//Find rows and columns
const rows = csvData.split(newLine).slice(1);
rows.forEach((row) => {
  const columns = row.split(comma);
  dataArray.push({
    index: columns[0],
    mass: columns[1],
    spring1: columns[2],
    spring2: columns[3],
  });
});

// Print the results
console.log(dataArray);

let csvData2 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let dataArray2 = [];
console.log(`......................`);
console.log(`......................`);
console.log(`|||new data array|||`);
console.log(`......................`);
console.log(`......................`);
// const dataArray = [];
// const comma = ",";
// const newLine = "\n";

//Find rows and columns
const rows2 = csvData2.split(newLine).slice(1);
rows2.forEach((row) => {
  const columns2 = row.split(comma);
  dataArray2.push({
    id: columns2[0],
    name: columns2[1],
    occupation: columns2[2],
    age: columns2[3],
  });
});

// Print the results
console.log(dataArray2);
