import sudoPuzzleModel from './sudokuPuzzleModel.js';
import sudoPuzzleView from './sudokuPuzzleView.js';

export default class sudoPuzzleController {
  constructor() {
    this.sudoPuzzleModel = new sudoPuzzleModel();
    this.sudoPuzzleView = new sudoPuzzleView();
  }
}
