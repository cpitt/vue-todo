import { Todo } from '../models';
import { TODOS_PUSH } from '../mutations/mutationTypes';

export default function addTodo({ commit }) {
  commit(TODOS_PUSH, { todo: new Todo() });
}
