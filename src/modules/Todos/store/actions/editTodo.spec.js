import { TODOS_TODO_UPDATE } from '../mutations/mutationTypes';
import editTodo from './editTodo';
import { Todo } from '../models';

describe('editTodo', () => {
  const commit = jest.fn();
  const todo = new Todo();
  const changes = { text: 'hi' };
  it('should commit correct type and args', () => {
    editTodo({ commit }, { todo, changes });
    expect(commit).toHaveBeenCalledWith(TODOS_TODO_UPDATE, {
      todo,
      ...changes,
    });
  });
});
