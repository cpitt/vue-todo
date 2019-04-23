export default (state, payload) => {
  const { todos } = payload;
  state.todos = todos;
};
