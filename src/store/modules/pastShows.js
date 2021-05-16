import axios from 'axios';
import router from '../../router/index';

const mixcloudAPI = 'https://api.mixcloud.com/sableradio/cloudcasts/';
const mixcloudAPIRoot = 'https://api.mixcloud.com';

export default {
  namespaced: true,
  state: {
    pastShows: [],
    selectedShow: {}
  },
  actions: {
    async fetchShows(state) {
      const { data } = await axios.get(mixcloudAPI);
      state.commit('setShows', data);
    },
    async fetchIndividualShow(state, id) {
      try {
        const { data } = await axios.get(`${mixcloudAPIRoot}${id}`);
        state.commit('setSingleShow', data);
        return data;
      } catch (e) {
        console.log(e);
        return router.push({ name: '404' });
      }
    }
  },
  modules: {},
  getters: {
    allShows: state => state.pastShows,
    getShowById: state => state.selectedShow
  },
  mutations: {
    setShows(state, shows) {
      state.pastShows = shows;
    },
    setSingleShow(state, show) {
      state.selectedShow = show;
    }
  }
};
