export default (
  state,
  { todo, complete = todo.complete, title = todo.title }
) => {
  state.todos = state.todos.map(oldTodo => {
    if (oldTodo.id !== todo.id) return oldTodo;
    return { ...todo, complete, title };
  });
};
