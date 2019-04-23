<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">
          <span>Vuetify</span>
          <span class="font-weight-light">&nbsp;Todo App</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
    <v-footer app />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      //
    };
  },
};
</script>
