import { TODOS_SET, TODOS_PUSH, TODOS_TODO_UPDATE } from './mutationTypes';

import todosSet from './todosSet';
import todosPush from './todosPush';
import todoUpdate from './todoUpdate';

export default {
  [TODOS_SET]: todosSet,
  [TODOS_PUSH]: todosPush,
  [TODOS_TODO_UPDATE]: todoUpdate,
};
