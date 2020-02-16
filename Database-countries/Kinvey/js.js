const fs = require('fs');
const arr=require('./arr.js');


const mySet = new Set();
for (const i of arr) {
  const country = i.country

mySet.add(country);
}
const output = Array.from(mySet).sort()

fs.writeFile('myFile.json', JSON.stringify(output), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
