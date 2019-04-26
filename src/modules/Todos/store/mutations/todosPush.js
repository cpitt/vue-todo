export default (state, payload) => {
  const { todo } = payload;
  state.todos = [...state.todos, todo];
};
