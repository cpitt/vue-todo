import Vue from 'vue';
import Vuex from 'vuex';
import { store as todos } from './modules/Todos';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...todos,
  },
  plugins: [createLogger()],
  strict: process.env.NODE_ENV !== 'production',
});
