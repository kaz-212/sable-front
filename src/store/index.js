import Vue from 'vue';
import Vuex from 'vuex';
import schedule from './modules/schedule';
import pastShows from './modules/pastShows';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    schedule,
    pastShows,
  },
});
