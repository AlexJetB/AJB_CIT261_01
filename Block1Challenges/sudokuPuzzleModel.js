class sudoPuzzleModel {
  //change Value in the accessed column
  changeValue(row, col, newNum) {
    sudoPuzzle[row][col] = newNum;
  }
  // make sure entered value != same value in its row, col, or box
  checkValue(row, col, curNum, puzzle) {
    var r = row; // Row
    var c = col; // Column
    var i; // Iterator
    var j; //iterator for box
    // Check row
    for (i = 0; i < 9; i++) {
      if (i === col) {
        continue;
      } else if (sudoPuzzle[r][i] === curNum) {
        return false;
      } else {
        continue;
      }
    }
    // Check column
    for (i = 0; i < 9; i++) {
      if (i === row) {
        continue;
      } else if (sudoPuzzle[i][c] === curNum) {
        return false;
      } else {
        continue;
      }
      // Check Box
      var startR = r - r % 3;
      var startC = c - c % 3;
      for (i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
          if ((startR + i) === row && (startC + j) === col) {
            continue;
          } else if (sudoPuzzle[startR + i][startC + j]) {
            return false;
          } else {
            continue
          }
        }
      }
    }

    return true;
  }
}

const sudoPuzzle = [
  [2, 0, 4, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 3, 6, 0, 7],
  [0, 0, 0, 9, 0, 0, 4, 0, 0],
  [9, 0, 0, 4, 0, 0, 0, 1, 0],
  [6, 5, 0, 0, 1, 0, 0, 7, 4],
  [0, 2, 0, 0, 0, 8, 0, 0, 9],
  [0, 0, 9, 0, 0, 5, 0, 0, 0],
  [5, 0, 2, 3, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 4, 1, 0, 2]
];

const sudoPuzzle2 = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8], // row0
  [0, 1, 2, 3, 4, 5, 6, 7, 8], // row1
  [0, 1, 2, 3, 4, 5, 6, 7, 8], // row2
  [0, 1, 2, 3, 4, 5, 6, 7, 8], // row3
  [0, 1, 2, 3, 4, 5, 6, 7, 8], // row4
  [0, 1, 2, 3, 4, 5, 6, 7, 8], // row5
  [0, 1, 2, 3, 4, 5, 6, 7, 8], // row6
  [0, 1, 2, 3, 4, 5, 6, 7, 8], // row7
  [0, 1, 2, 3, 4, 5, 6, 7, 8], // row8
];

console.log(sudoPuzzle[1][3]);

const sudoPuzzleTest = new sudoPuzzleModel;
console.log(sudoPuzzleTest.checkValue(1, 1, 8, sudoPuzzle)); // Unkown value
console.log(sudoPuzzleTest.checkValue(1, 1, 6, sudoPuzzle)); // Known values...
console.log(sudoPuzzleTest.checkValue(1, 1, 5, sudoPuzzle));
console.log(sudoPuzzleTest.checkValue(1, 1, 2, sudoPuzzle));

function readSP(key) {
  return JSON.parse(window.localStorage.getItem(key));
}
function writeSP(key, hikes) {
  window.localStorage.setItem(key, JSON.stringify(hikes));
}