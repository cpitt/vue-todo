import { createNamespacedHelpers } from 'vuex';
import state from './state';
import mutations, { mutationTypes } from './mutations';
import actions, { actionTypes } from './actions';
import getters, { gettersTypes } from './getters';
import loading from '@/shared/vuex/modules/loading';

const namespace = 'TODOS';

// create namepaced helpers to be exported from store for convenience
const { mapActions, mapState, mapGetters } = createNamespacedHelpers(namespace);

const module = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules: { loading },
};

const createStore = moduleNamespace => {
  if (moduleNamespace) {
    return { [moduleNamespace]: { ...module } };
  }
  return module;
};

export {
  namespace,
  createStore,
  mapActions,
  mapState,
  mapGetters,
  actionTypes,
  mutationTypes,
  gettersTypes,
};
// Export the namespaced module as default
export default createStore(namespace);
