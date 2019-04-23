import { Todo } from '../models';
import { TODOS_PUSH } from '../mutations/mutationTypes';
import addTodo from './addTodo';

jest.mock('../models', () => ({ Todo: function() {} }));

describe('#addTodo', () => {
  it('should call commit with correct mutationType and arguments', () => {
    const commit = jest.fn();
    addTodo({ commit });
    expect(commit).toHaveBeenCalledWith(TODOS_PUSH, { todo: new Todo() });
  });
});
