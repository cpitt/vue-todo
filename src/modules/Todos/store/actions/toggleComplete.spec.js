import Todo from '../models/Todo';
import toggleComplete from './toggleComplete';
import { TODOS_TODO_UPDATE } from '../mutations/mutationTypes';

describe('toggleComplete', () => {
  const commit = jest.fn();
  const todo = new Todo();
  it('should commit correct mutation', () => {
    toggleComplete({ commit }, { todo });
    expect(commit).toHaveBeenCalledWith(TODOS_TODO_UPDATE, {
      todo,
      complete: !todo.complete,
    });
  });
});
