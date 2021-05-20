import Vue from 'vue';
import Vuex from 'vuex';
import schedule from './modules/schedule';
import pastShows from './modules/pastShows';
import currentShow from './modules/currentShow';
import residents from './modules/residents';
import search from './modules/search';
import loader from './modules/loader';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    schedule,
    pastShows,
    currentShow,
    residents,
    search,
    loader
  }
});
