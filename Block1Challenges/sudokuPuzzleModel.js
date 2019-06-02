import sudoPuzzleController from './sudokuPuzzleController.js';

export default class sudoPuzzleModel {
  constructor() {
    // For now we're hardcoding the puzzles
    // this.sudoPuzzle = [ // Easy random puzzle
    //   [2, 0, 4, 1, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 5, 0, 3, 6, 0, 7],
    //   [0, 0, 0, 9, 0, 0, 4, 0, 0],
    //   [9, 0, 0, 4, 0, 0, 0, 1, 0],
    //   [6, 5, 0, 0, 1, 0, 0, 7, 4],
    //   [0, 2, 0, 0, 0, 8, 0, 0, 9],
    //   [0, 0, 9, 0, 0, 5, 0, 0, 0],
    //   [5, 0, 2, 3, 0, 1, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 4, 1, 0, 2]
    // ];
    this.sudoPuzzle = [ // Hard random puzzle
      [0, 0, 0, 2, 0, 0, 3, 5, 6],
      [5, 0, 4, 0, 8, 0, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 3, 0, 0, 0, 6, 4, 7, 0],
      [2, 0, 0, 0, 0, 0, 0, 0, 3],
      [0, 4, 1, 7, 0, 0, 0, 2, 0],
      [0, 5, 0, 0, 0, 0, 0, 0, 9],
      [0, 0, 0, 0, 4, 0, 1, 0, 7],
      [1, 7, 2, 0, 0, 9, 0, 0, 0]
    ];
    /* Solved puzzle will always start as a copy of sudoPuzzle.
       The Model class will solve it onLoad.*/
    // this.solvedPuzzle = [ easy random solution
    //   [2, 0, 4, 1, 0, 0, 0, 0, 0],
    //   [0, 0, 0, 5, 0, 3, 6, 0, 7],
    //   [0, 0, 0, 9, 0, 0, 4, 0, 0],
    //   [9, 0, 0, 4, 0, 0, 0, 1, 0],
    //   [6, 5, 0, 0, 1, 0, 0, 7, 4],
    //   [0, 2, 0, 0, 0, 8, 0, 0, 9],
    //   [0, 0, 9, 0, 0, 5, 0, 0, 0],
    //   [5, 0, 2, 3, 0, 1, 0, 0, 0],
    //   [0, 0, 0, 0, 0, 4, 1, 0, 2]
    // ];
    this.solvedPuzzle = [ // hard random solution
      [0, 0, 0, 2, 0, 0, 3, 5, 6],
      [5, 0, 4, 0, 8, 0, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 3, 0, 0, 0, 6, 4, 7, 0],
      [2, 0, 0, 0, 0, 0, 0, 0, 3],
      [0, 4, 1, 7, 0, 0, 0, 2, 0],
      [0, 5, 0, 0, 0, 0, 0, 0, 9],
      [0, 0, 0, 0, 4, 0, 1, 0, 7],
      [1, 7, 2, 0, 0, 9, 0, 0, 0]
    ];
    this.rowS;
    this.colS;
  }
  //change Value in the accessed column
  changeValue(row, col, newNum) {
    if (newNum <=9 && newNum >= 0) {
      this.sudoPuzzle[row][col] = newNum;
      return true;
    } else {
      return false;
    }
  }
  // make sure entered value != same value in its row, col, or box
  checkValue(curNum, row, col) {
    var r = row; // Row
    var c = col; // Column
    var i; // Iterator
    var j; //iterator for box
    // Check row
    for (i = 0; i < 9; i++) {
      if (i === col) {
        continue;
      } else if (this.sudoPuzzle[r][i] === curNum) {
        return false;
      } else {
        continue;
      }
    }
    // Check column
    for (i = 0; i < 9; i++) {
      if (i === row) {
        continue;
      } else if (this.sudoPuzzle[i][c] === curNum) {
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
          } else if (this.sudoPuzzle[startR + i][startC + j]) {
            return false;
          } else {
            continue
          }
        }
      }
    }
    return true;
  }

  solver() {
    if(!this.findEmpty()) {
      return true;
    }

    let num;
    for(num = 1; num <= 9; num++) {
      var possibleArray = new Array(9);

      this.computeValidity(possibleArray, this.rowS, this.colS);

      if(possibleArray[num]) {
        this.solvedPuzzle[this.rowS][this.colS] = num;

        if (this.solver()) {
          return true;
        }
        do {
          this.colS--;
          if (this.colS < 0) {
            this.rowS--;
            this.colS = 8;
          }
        }
        while(this.solvedPuzzle[this.rowS][this.colS] ===
        this.sudoPuzzle[this.rowS][this.colS]);
        this.solvedPuzzle[this.rowS][this.colS] = 0;
      }
    }
    return false;
  }

  findEmpty() {
    for (this.rowS = 0; this.rowS < 9; this.rowS++) {
      for (this.colS = 0; this.colS < 9; this.colS++) {
        if(this.solvedPuzzle[this.rowS][this.colS] == 0) {
          return true;
        }
      }
    }
    return false;
  }

  computeValidity(possibleArray, r, c) {
    //Compile array with true only...
    let i;
    for (i = 1; i <= 9; i++) {
      possibleArray[i] = true;
    }

    let iRow;
    let iCol;
    for (iRow = 0; iRow < 9; iRow++) {

      if(this.solvedPuzzle[iRow][c] != 0) {
        possibleArray[this.solvedPuzzle[iRow][c]] = false;
      }
    }

    for (iCol = 0; iCol < 9; iCol++) {
      if(this.solvedPuzzle[r][iCol] != 0) {
        possibleArray[this.solvedPuzzle[r][iCol]] = false;
      }
    }

    for (iRow = 0; iRow < 3; iRow++) {
      for (iCol = 0; iCol < 3; iCol++) {
        let startR = r - r % 3;
        let startC = c - c % 3;
        if (this.solvedPuzzle[startR + iRow][startC + iCol] != 0) {
          possibleArray[this.solvedPuzzle[startR + iRow][startC + iCol]]
          = false;
        }
      }
    }
  }
}


/*console.log(sudoPuzzle[1][3]);
// Debugging
const sudoPuzzleTest = new sudoPuzzleModel;
console.log(sudoPuzzleTest.checkValue(1, 1, 1, sudoPuzzle)); // Unkown value 1
console.log(sudoPuzzleTest.checkValue(1, 1, 4, sudoPuzzle)); // Unkown value 4
console.log(sudoPuzzleTest.checkValue(1, 1, 8, sudoPuzzle)); // Unkown value 8
console.log(sudoPuzzleTest.checkValue(1, 1, 9, sudoPuzzle)); // Unkown value 9
console.log(sudoPuzzleTest.checkValue(1, 1, 2, sudoPuzzle)); // Known values...
console.log(sudoPuzzleTest.checkValue(1, 1, 3, sudoPuzzle));
console.log(sudoPuzzleTest.checkValue(1, 1, 5, sudoPuzzle));
console.log(sudoPuzzleTest.checkValue(1, 1, 6, sudoPuzzle));
console.log(sudoPuzzleTest.checkValue(1, 1, 7, sudoPuzzle));

function readPuzzle(fileName) {
  var rawFile = new XMLHttpRequest();
    rawFile.open("GET", fileName, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                return allText;
            }
        }
    }
    rawFile.send(null);
}
// Probably not needed
function saveFile(fileName, ) {
  window.localStorage.setItem(key, JSON.stringify(hikes));
}
*/
