export default (state, payload) => {
  const { todo } = payload;
  return state.todos.push(todo);
};
