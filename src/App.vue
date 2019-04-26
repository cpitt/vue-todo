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
      <v-toolbar-items>
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/todos">App</v-btn>
        <v-btn flat to="/store">Store</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <keep-alive>
        <router-view />
      </keep-alive>
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
