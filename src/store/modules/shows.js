import axios from 'axios';

const mixcloudAPI = 'https://api.mixcloud.com/sableradio/cloudcasts/';

export default ({
  state: {
    shows: [],
  },
  actions: {
    async fetchShows(state) {
      const show = await axios.get(mixcloudAPI);
      JSON.stringify(show);
      console.log(show);
      state.commit('setShows', show);
    },
  },
  modules: {
  },
  getters: {
    allShows: (state) => state.shows,
  },
  mutations: {
    setShows(state, shows) {
      state.shows = shows;
    },
  },
});
