export default (
  state,
  { todo, completed = todo.completed, title = todo.title }
) => {
  state.todos = state.todos.map(oldTodo => {
    if (oldTodo.id !== todo.id) return oldTodo;
    return { ...todo, completed, title };
  });
};
