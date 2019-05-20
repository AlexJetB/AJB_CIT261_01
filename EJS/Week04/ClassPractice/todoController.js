import todoModel from './todoModel.js';
export default class todoController {
  constructor(elementID) {
    this.model = new todoModel('todo');
    this.element = document.getElementById(elementID);
  }
  addTodo() {
    this.model.add('Finish class');
  }
}
