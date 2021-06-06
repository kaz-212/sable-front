import axios from 'axios';
import router from '../../router/index';

const residentsQueryURL = 'https://sable-radio.herokuapp.com/api/residents/search/';
const blogsQueryURL = 'https://sable-radio.herokuapp.com/api/blogs/search/';
const mixcloudQueryURL = 'https://api.mixcloud.com/sableradio/cloudcasts/';

export default {
  namespaced: true,
  state: {
    searchResidentsState: [],
    searchShowsState: [],
    searchBlogsState: [],
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
    async searchBlogs(state, queryString) {
      try {
        const { data } = await axios.get(`${blogsQueryURL}${queryString}`);
        state.commit('setBlogs', data);
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
          dispatch('searchBlogs', queryString),
          dispatch('searchShows', queryString)
        ]);
        router.push({ name: 'Search' });
      } catch (e) {
        console.log(e);
      }
    },
    clearAll(state) {
      state.commit('setShows', '');
      state.commit('setBlogs', '');
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
    getBlogs: state => state.searchBlogsState,
    getShows: state => state.searchShowsState,
    isSearching: state => state.isSearching
  },
  mutations: {
    setResidents(state, residentsData) {
      state.searchResidentsState = residentsData;
    },
    setBlogs(state, blogsData) {
      state.searchBlogsState = blogsData;
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
