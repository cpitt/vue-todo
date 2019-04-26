export default state =>
  state.todos.reduce((todos, todo) => ({ ...todos, [todo.id]: todo }), {});
