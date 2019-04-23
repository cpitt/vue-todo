import { TODOS_TODO_UPDATE } from '../mutations/mutationTypes';

export default ({ commit }, { todo, changes }) => {
  commit(TODOS_TODO_UPDATE, {
    todo,
    ...changes,
  });
};
