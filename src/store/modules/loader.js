export default {
  namespaced: true,
  state: {
    loading: false
  },
  getters: {
    getLoaderState: state => state.loading
  },

  actions: {
    loaderAction: ({ commit }, data) => {
      commit('setLoading', data);
    }
  },
  mutations: {
    setLoading: (state, data) => {
      state.loading = data;
    }
  }

};
