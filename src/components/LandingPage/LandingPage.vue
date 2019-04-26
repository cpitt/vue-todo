<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>
        <span class="headline">Welcome</span>
      </v-card-title>
      <v-card-text>
        This application was written in an effort to learn Vue and attempt to
        apply a micro-frontend approach to Vue
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat to="/todos">
          Go To Todos
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
