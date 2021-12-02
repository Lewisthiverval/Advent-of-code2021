const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
const numInput = input.trim().split("\n");

//convert all strings to numbers and put into the new array (arrNumInput)
const arrNumInput = [];

for (i = 0; i < numInput.length; i++) {
  const stringNum = numInput[i];
  const newNum = parseInt(stringNum);
  arrNumInput.push(newNum);
}
//part 1
let count = 0;

for (i = 0; i < arrNumInput.length; i++) {
  if (arrNumInput[i] > arrNumInput[i - 1]) {
    count += 1;
  }
}
console.log(count); //answer to part 1

//part2
let newCount = 0;
const sumArr = [];

for (i = 0; i < arrNumInput.length; i++) {
  //let sumNum = arrNumInput[i] + arrNumInput[i + 1] + arrNumInput[i + 2];
  sumArr.push(arrNumInput[i] + arrNumInput[i + 1] + arrNumInput[i + 2]);
}

for (i = 0; i < sumArr.length; i++) {
  if (sumArr[i] > sumArr[i - 1]) {
    newCount += 1;
  }
}
console.log(newCount); //answer to part 2
