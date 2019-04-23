import { TODOS_TODO_UPDATE } from '../mutations/mutationTypes';

export default ({ commit }, { todo }) => {
  commit(TODOS_TODO_UPDATE, {
    todo,
    complete: !todo.complete,
  });
};
