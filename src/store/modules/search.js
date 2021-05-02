import axios from 'axios';

const residentsQueryURL = 'https://sable-radio.herokuapp.com/api/residents/search/';
const mixcloudQueryURL = 'https://api.mixcloud.com/sableradio/cloudcasts/';

export default {
  namespaced: true,
  state: {
    searchResidentsState: [],
    searchShowsState: []
  },
  actions: {
    async searchResidents(state, queryString) {
      try {
        const { data } = await axios.get(`${residentsQueryURL}${queryString}`);
        state.commit('setResidents', data);
      } catch (e) {
        console.log(e);
      }
    },
    async searchShows(state, queryString) {
      try {
        const { data } = await axios.get(mixcloudQueryURL);
        const result = data.data.filter(show => (
          show.name.toLowerCase().includes(queryString.toLowerCase())
        ));
        state.commit('setShows', result);
      } catch (e) {
        console.log(e);
      }
    },
    async searchAll(context, queryString) {
      try {
        context.dispatch('searchResidents', queryString);
        context.dispatch('searchShows', queryString);
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    getResidents: state => state.searchResidentsState,
    getShows: state => state.searchShowsState
  },
  mutations: {
    setResidents(state, residentsData) {
      state.searchResidentsState = residentsData;
    },
    setShows(state, showsData) {
      state.searchShowsState = showsData;
    }
  }
};
