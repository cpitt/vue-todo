<template>
  <v-btn
    color="pink"
    dark
    small
    fixed
    bottom
    right
    fab
    @click="$emit('todos-add')"
  >
    <v-icon>add</v-icon>
  </v-btn>
</template>
