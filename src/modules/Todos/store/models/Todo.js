import uuid from 'uuid/v4';

export default class Todo {
  constructor() {
    this.id = uuid();
    this.completed = false;
    this.text = '';
  }
}
