// acts a model, view, and controller for comments

export default class Comments {
  constructor(type) {
    this.type = type;
  }

  showCommentsList() {
    console.log("This is a comment example. " + this.type);
  }
}
