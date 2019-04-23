import Vue from 'vue';
import Vuex from 'vuex';
import { store as todos } from './modules/Todos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
  },
  strict: process.env.NODE_ENV !== 'production',
});
