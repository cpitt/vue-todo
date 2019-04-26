import todosPush from '@/modules/Todos/store/mutations/todosPush';

describe('todosPush', () => {
  it('', () => {
    const state = { todos: [] };
    const payload = { todo: {} };
    todosPush(state, payload);

    expect(state.todos.length).toBe(1);
  });
});
