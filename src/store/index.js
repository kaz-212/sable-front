import Vue from 'vue';
import Vuex from 'vuex';
import schedule from './modules/schedule';
import shows from './modules/shows';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    schedule,
    shows,
  },
});
