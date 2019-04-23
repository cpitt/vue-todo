<template>
  <div>
    <todos-list
      :todos="todos"
      @todo-toggle="toggleComplete"
      @todo-edit="editTodo"
    />
    <todos-add-button @todos-add="addTodo()" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TodosList from '../components/TodosList.vue';
import TodosAddButton from '../components/TodosAddButton.vue';
import { actionTypes } from '../store';

export default {
  components: { TodosList, TodosAddButton },
  computed: {
    ...mapState({ todos: state => state.todos.todos }),
  },
  created() {
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
