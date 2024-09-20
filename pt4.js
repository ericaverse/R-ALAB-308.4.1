/* Part 4 of ALAB 308.4.1 */
// Part 4
let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

const dataArray = [];
const comma = ",";
const newLine = "\n";

//Find rows and columns
const rows = csvData.split(newLine).slice(1);
rows.forEach((row) => {
  const columns = row.split(comma);
  dataArray.push({
    id: columns[0],
    name: columns[1],
    occupation: columns[2],
    age: columns[3],
  });
});

// Print the results
console.log(dataArray);
console.log(`...........................`);
console.log(`...........................`);
console.log(`||| new array here|||`);
console.log(`...........................`);
console.log(`...........................`);
dataArray.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
dataArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
//Print the results after adding

console.log(dataArray);

// Find the average age of the group
let ages = [];
let sumOfAges = 0;
let n = dataArray.length;

//collect all ages in an array
for (let i = 0; i < dataArray.length; i++) {
  ages.push(parseInt(dataArray[i].age));
  //calculate average age
  sumOfAges += parseInt(dataArray[i].age);
}

let result = (sumOfAges / n).toFixed(2);
console.log(`The average age of the professionals is ${result}`);
