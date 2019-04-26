import * as mutationTypes from './mutationTypes';
import todosSet from './todosSet';
import todosPush from './todosPush';
import todoUpdate from './todoUpdate';

export { mutationTypes };
export default {
  [mutationTypes.TODOS_SET]: todosSet,
  [mutationTypes.TODOS_PUSH]: todosPush,
  [mutationTypes.TODOS_TODO_UPDATE]: todoUpdate,
};
