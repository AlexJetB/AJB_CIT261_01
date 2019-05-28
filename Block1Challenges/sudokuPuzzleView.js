import sudoPuzzleController from './sudokuPuzzleController.js';

export default class sudoPuzzleView {
  constructor(){
      this.sudoPuzzleController = new sudoPuzzleController();
  }

  createTable(id) {
    sudoPuzzleController.getTable();
  }
}
