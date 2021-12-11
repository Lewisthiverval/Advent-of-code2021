const dataArr = [
  "2199943210",
  "3987894921",
  "9856789892",
  "8767896789",
  "9899965678",
];

const sum = 0;
const filteredNumbers = [];

for (i = 0; i < dataArr.length; i++) {
  for (j = 0; j < dataArr[0].length; j++) {
    if (i != 0 && i != dataArr.length - 1) {
      if (
        dataArr[i][j] < dataArr[i][j - 1] &&
        dataArr[i][j] < dataArr[i][j + 1] &&
        dataArr[i][j] < dataArr[i - 1][j] &&
        dataArr[i][j] < dataArr[i + 1][j]
      ) {
        filteredNumbers.push(dataArr[i][j]);
      }
    } else if ((i = 0)) {
      if (
        dataArr[i][j] < dataArr[i + 1][j] &&
        dataArr[i][j] < dataArr[i][j - 1] &&
        dataArr[i][j] < dataArr[i][j + 1]
      ) {
        filteredNumbers.push(dataArr[i][j]);
      }
    } else if ((i = dataArr.length - 1)) {
      if (
        dataArr[i][j] < dataArr[i - 1][j] &&
        dataArr[i][j] < dataArr[i][j - 1] &&
        dataArr[i][j] < dataArr[i][j + 1]
      ) {
        filteredNumbers.push(dataArr[i][j]);
      }
    }
  }
  console.log(filteredNumbers);
}
