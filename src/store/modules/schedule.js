import axios from 'axios';

// const sableAPI = 'https://sable-radio.herokuapp.com/api';
// const mixcloudAPI = 'https://api.mixcloud.com/sableradio/cloudcasts/';
const testAPI = 'https://api.mixcloud.com/spartacus/party-time/';

export default ({
  state: {
    currentShow: 'hello this is the current show',
    allShows: [],
  },
  actions: {
    async setCurrentShow(state) {
      const show = await axios.get(testAPI);
      console.log(show);
      state.commit('commitCurrentShow', show);
    },
  },
  modules: {
  },
  getters: {
    getCurrentShow: (state) => state.currentShow,
  },
  mutations: {
    commitCurrentShow(state, payload) {
      state.currentShow = payload;
      state.allShows.push(payload);
    },
  },
});
