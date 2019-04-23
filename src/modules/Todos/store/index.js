import state from './state';
import mutations from './mutations';
import actions from './actions';
import * as actionTypes from './actions/actionTypes';
import * as mutationTypes from './mutations/mutationTypes';

export { actionTypes, mutationTypes };
export default {
  namespaced: false,
  state,
  mutations,
  actions,
  // getters,
};
