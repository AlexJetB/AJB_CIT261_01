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
}

var controller = new sudoPuzzleController();
console.log(controller.getTable());
controller.sendTable();
