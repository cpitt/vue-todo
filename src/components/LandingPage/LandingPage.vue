<template>
  <div>
    <h1>Home</h1>
    <v-btn to="/todos">
      {{ message }}
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: 'Go To Todos',
  }),
};
</script>
