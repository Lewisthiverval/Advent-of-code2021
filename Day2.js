const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.join(__dirname, "inputDay2.txt"), "utf-8");
const inputArray = input.trim().split("\n");

// part 1

let horizontalPosition = 0;
let depth = 0;

for (i = 0; i < inputArray.length; i++) {
  const length = inputArray[i].length;
  const number = parseInt(inputArray[i][length - 1]);

  if (inputArray[i][0] === "f") {
    horizontalPosition += number;
  } else if (inputArray[i][0] === "d") {
    depth += number;
  } else if (inputArray[i][0] === "u" && depth > 0) {
    depth -= number;
  }
}

console.log(depth * horizontalPosition);

// part 2

let depth2 = 0;
let aim = 0;
let horizontalPosition2 = 0;

for (i = 0; i < inputArray.length; i++) {
  const length2 = inputArray[i].length;
  const number2 = parseInt(inputArray[i][length2 - 1]);

  if (inputArray[i][0] === "f") {
    horizontalPosition2 += number2;
    depth2 += aim * number2;
  } else if (inputArray[i][0] === "d") {
    aim += number2;
  } else if (inputArray[i][0] === "u" && depth > 0) {
    aim -= number2;
  }
}

console.log(depth2 * horizontalPosition2);
