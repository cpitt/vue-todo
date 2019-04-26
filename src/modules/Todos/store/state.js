// State is a function to allow module reuse since vuex is mutation based,
// exporting an object would lead to the same instance being mutated
export default () => ({
  todos: [],
});
