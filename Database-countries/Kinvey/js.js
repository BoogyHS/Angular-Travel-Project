const fs = require('fs');
const arr=require('./countriesArr.js');

let myArr = [];
for (const i of arr) {
  if(!myArr.includes(i)){
    myArr.push(i);
  }
}
let output = [];

myArr.forEach(el=>{
  output.push({"country":el})

})
// console.log(output);

fs.writeFile('myFile.json', JSON.stringify(output), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
