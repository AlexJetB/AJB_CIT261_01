import todoController from './todoController.js';

window.addEventListener('load', ()=>{
  const myTodoController = new todoController('todoList');

  myTodoController.addTodo();
  console.log(myTodoController);
});
