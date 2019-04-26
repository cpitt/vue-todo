<template>
  <div>
    <div v-if="isLoading">
      <v-progress-circular
        indeterminate
        size="75"
        class="loading-indicator"
        color="primary"
      />
    </div>
    <div v-else>
      <todos-list
        :todos="todos"
        @todo-toggle="toggleComplete"
        @todo-edit="editTodo"
      />
      <todos-add-button @todos-add="addTodo()" />
    </div>
  </div>
</template>

<script>
import TodosList from '../components/TodosList.vue';
import TodosAddButton from '../components/TodosAddButton.vue';
import { mapActions, mapState, actionTypes } from '../store';

export default {
  components: { TodosList, TodosAddButton },
  computed: {
    ...mapState({
      todos: 'todos',
      isLoading: state => state.loading.isLoading,
    }),
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    ...mapActions({
      getTodos: actionTypes.TODOS_FETCH,
      addTodo: actionTypes.TODOS_ADD,
      toggleComplete: actionTypes.TODO_TOGGLE_COMPLETE,
      editTodo: actionTypes.TODO_EDIT,
    }),
  },
};
</script>

<style lang="css" scoped>
.loading-indicator {
  display: block;
  margin: 0 auto;
}
</style>
