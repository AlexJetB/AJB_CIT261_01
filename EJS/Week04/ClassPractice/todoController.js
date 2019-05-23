import todoModel from './todoModel.js';
import todoView from './todoView.js';

export default class todoController {
  constructor(elementID) {
    this.model = new todoModel('todo');
    this.view = new todoView();
    this.element = document.getElementById(elementID);
  }
  addTodo() {
    this.model.add('Finish class');
  }
}
