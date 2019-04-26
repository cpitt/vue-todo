import * as actionTypes from './actionTypes';
import getTodos from './getTodos';
import addTodo from './addTodo';
import toggleComplete from './toggleComplete';
import editTodo from './editTodo';

export { actionTypes };
export default {
  [actionTypes.TODOS_FETCH]: getTodos,
  [actionTypes.TODOS_ADD]: addTodo,
  [actionTypes.TODO_TOGGLE_COMPLETE]: toggleComplete,
  [actionTypes.TODO_EDIT]: editTodo,
};
