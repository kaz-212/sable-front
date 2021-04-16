import axios from 'axios';

const sableAPI = 'https://sable-radio.herokuapp.com/api/schedule';
// const mixcloudAPI = 'https://api.mixcloud.com/sableradio/cloudcasts/';

export default ({
  state: {
    currentShow: 'hello this is the current show',
    allShows: [],
  },
  actions: {
    async setCurrentShow(state) {
      const show = await axios.get(sableAPI);
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
