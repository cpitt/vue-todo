import { TODOS_SET } from '../mutations/mutationTypes';
import { get } from '../../todosService';

const getTodos = ({ commit }) => {
  get().then(todos => commit(TODOS_SET, { todos }));
};

export default getTodos;
