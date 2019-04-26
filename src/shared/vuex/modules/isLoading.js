export const actionTypes = {
  TOGGLE_ISLOADING: 'TOGGLE_ISLOADING',
  SET_ISLOADING: 'SET_ISLOADING',
};

export const mutationTypes = {
  SET_ISLOADING: 'SET_ISLOADING',
};

export default {
  state: () => ({ isLoading: false }),
  actions: {
    [actionTypes.TOGGLE_ISLOADING]: ({ commit, state }) => {
      commit(mutationTypes.SET_ISLOADING, { isLoading: !state.isLoading });
    },
    [actionTypes.SET_ISLOADING]: ({ commit, state }, payload) => {
      commit(mutationTypes.SET_ISLOADING, { isLoading: payload });
    },
  },
  mutations: {
    [mutationTypes.SET_ISLOADING]: (state, payload) => {
      state.isLoading = payload.isLoading;
    },
  },
};
