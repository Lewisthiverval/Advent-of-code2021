const { timeStamp } = require("console");
const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "inputDay3.txt"), "utf-8");
const inputArray = input.trim().split("\n");

// let num0 = 0;
// let num1 = 1;
const gammaRay = [];
const epsilon = [];

for (i = 0; i < inputArray[0].length; i++) {
  let num0 = 0;
  let num1 = 0;

  for (j = 0; j < inputArray.length; j++) {
    if (inputArray[j][i] === "0") {
      num0 += 1;
    } else if (inputArray[j][i] === "1") {
      num1 += 1;
    }
  }
  if (num0 > num1) {
    gammaRay.push(0);
    epsilon.push(1);
  } else if (num1 > num0) {
    gammaRay.push(1);
    epsilon.push(0);
  }
}

decimalGammaRay = 0b000011011001;
decimalEpsilon = 0b111100100110;

console.log(decimalGammaRay * decimalEpsilon);

// i = 12 times
// j = 1000 times

// for the first one it goes input array[0][0]
// until input array[1000][0]
// and then input array [0][1]
// until input array [1000][1]
