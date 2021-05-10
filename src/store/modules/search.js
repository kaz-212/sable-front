import axios from 'axios';
import router from '../../router/index';

const residentsQueryURL = 'https://sable-radio.herokuapp.com/api/residents/search/';
const mixcloudQueryURL = 'https://api.mixcloud.com/sableradio/cloudcasts/';

export default {
  namespaced: true,
  state: {
    searchResidentsState: [],
    searchShowsState: [],
    isSearching: false
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
        const result = data.data.filter(show =>
          /*eslint-disable*/
          show.name.toLowerCase().includes(queryString.toLowerCase())
        );
        state.commit('setShows', result);
      } catch (e) {
        console.log(e);
      }
    },
    async searchAll({ dispatch, commit }, queryString) {
      try {
        await Promise.all([
          dispatch('searchResidents', queryString),
          dispatch('searchShows', queryString)
        ]);
        commit('setNotSearching');
        router.push({ name: 'Search' });
      } catch (e) {
        console.log(e);
      }
    },
    clearAll(state) {
      state.commit('setShows', '');
      state.commit('setResidents', '');
    },
    searching({ commit }) {
      commit('setSearching');
    },
    notSearching({ commit }) {
      commit('setNotSearching');
    }
  },
  getters: {
    getResidents: state => state.searchResidentsState,
    getShows: state => state.searchShowsState,
    isSearching: state => state.isSearching
  },
  mutations: {
    setResidents(state, residentsData) {
      state.searchResidentsState = residentsData;
    },
    setShows(state, showsData) {
      state.searchShowsState = showsData;
    },
    setSearching(state) {
      state.isSearching = true;
    },
    setNotSearching(state) {
      state.isSearching = false;
    }
  }
};
