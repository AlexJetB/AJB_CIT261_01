import sudoPuzzleModel from './sudokuPuzzleModel.js';
import sudoPuzzleView from './sudokuPuzzleView.js';

export default class sudoPuzzleController {
  constructor() {
    this.sudoPuzzleModel = new sudoPuzzleModel();
    this.sudoPuzzleView = new sudoPuzzleView();
  }

  getTable() {
    return this.sudoPuzzleModel.sudoPuzzle;
  }

  sendTable() {
    this.sudoPuzzleView.createTable(this.getTable());
  }

  debugSolve() {
    this.sudoPuzzleModel.solver();
    return this.sudoPuzzleModel.solvedPuzzle
  }

  checkValidCur(val, row, col) {
    if (this.sudoPuzzleModel.checkValue(row, col, val) == true) {
      return true;
    } else {
      return false;
    }
  }

  checkValidSol(val, row, col) {
    if (this.sudoPuzzleModel.solvedPuzzle[row][col] == val) {
      return true;
    } else {
      return false;
    }
  }

  changeValue(row, col) {
    var element = document.getElementById(row + col);
    // var element = document.getElementById(id);
    //console.log("Create Value " + element.value + " " + row + " " + col + " ");
    if (element.value !== "") {
      if (this.checkValidSol(element.value, row, col)) {
        this.sudoPuzzleModel.changeValue(row, col, element.value);
        element.style.backgroundColor = "green";
      } else {
        element.style.backgroundColor = "red";
      }
    }
  }

  update() {

  }
}

var controller = new sudoPuzzleController();
controller.getTable();
console.log(controller.debugSolve());
controller.sendTable();

function ping() {
  console.log("ping!");
}

window.ping = ping;
// var inputs = document.getElementsByClassName('square');
// var i;
//
// for (i = 0; i<inputs.length; i++){
//   var r = inputs[i].id.charAt(0);
//   var c = inputs[i].id.charAt(1);
//   controller.changeValue(r, c);
// }

// Various stylist functions
