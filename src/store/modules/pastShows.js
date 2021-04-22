import axios from 'axios';

const mixcloudAPI = 'https://api.mixcloud.com/sableradio/cloudcasts/';

export default {
  namespaced: true,
  state: {
    pastShows: []
  },
  actions: {
    async fetchShows(state) {
      const { data } = await axios.get(mixcloudAPI);
      console.log(data);
      state.commit('setShows', data);
    }
  },
  modules: {},
  getters: {
    allShows: state => state.pastShows
  },
  mutations: {
    setShows(state, shows) {
      state.pastShows = shows;
    }
  }
};
