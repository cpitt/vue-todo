<template id="TodoList">
  <v-list>
    <todos-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @todo-toggle="toggleTodo"
      @todo-edit="editTodo"
    />
  </v-list>
</template>

<script charset="utf-8">
import TodosListItem from './TodosListItem.vue';
export default {
  components: { TodosListItem },
  props: {
    todos: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    editTodo(todo, changes) {
      this.$emit('todo-edit', { todo, changes });
    },
    toggleTodo(todo) {
      this.$emit('todo-toggle', { todo });
    },
  },
};
</script>
