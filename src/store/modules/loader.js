export default {
  namespaced: true,
  state: {
    loading: false
  },
  getters: {
    getLoaderState: state => state.loading
  },

  actions: {
    loaderAction: ({ commit }) => {
      commit('setLoaderState');
    }
  },
  mutations: {
    setLoaderState: state => {
      state.loading = !state.loading;
    }
  }

};
