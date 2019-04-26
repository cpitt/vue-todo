import * as gettersTypes from './gettersTypes';
import todosCount from '@/modules/Todos/store/getters/todosCount';
import todosById from '@/modules/Todos/store/getters/todosById';

export { gettersTypes };

export default {
  [gettersTypes.TODOS_COUNT]: todosCount,
  [gettersTypes.TODOS_BY_ID]: todosById,
};
