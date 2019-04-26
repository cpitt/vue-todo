<template id="">
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox
        data-test="todos-list-item-checkbox"
        :checked="todo.complete"
        @change="toggleTodo"
      />
    </v-list-tile-action>
    <v-list-tile-content>
      <v-text-field
        v-if="isEditing"
        :value="todo.title"
        autofocus
        placeholder="Enter Todo text"
        class="todo-input"
        @keyup.enter="updateTodo"
        @blur="updateTodo"
        @keyup.esc="toggleIsEditing"
      ></v-text-field>
      <v-list-tile-title v-else @click="toggleIsEditing">
        {{ todo.title }}
      </v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data: function() {
    return {
      isEditing: false,
    };
  },
  methods: {
    toggleIsEditing() {
      this.isEditing = !this.isEditing;
    },
    toggleTodo() {
      this.$emit('todo-toggle', this.todo);
    },
    updateTodo(event) {
      this.isEditing = false;
      this.$emit('todo-edit', this.todo, { title: event.target.value });
    },
  },
};
</script>

<style>
.todo-input {
  width: 100%;
}
</style>
