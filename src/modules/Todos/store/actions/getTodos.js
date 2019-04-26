import { TODOS_SET } from '../mutations/mutationTypes';
import { get } from '../../services/todosService';
import { actionTypes as isLoadingActions } from '@/shared/vuex/modules/loading';

const getTodos = ({ commit, dispatch }) => {
  dispatch(isLoadingActions.SET_ISLOADING, true);
  get()
    .then(todos => commit(TODOS_SET, { todos }))
    .then(() => {
      dispatch(isLoadingActions.SET_ISLOADING, false);
    });
};

export default getTodos;
