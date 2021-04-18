import axios from 'axios';

const sableAPI = 'https://sable-radio.herokuapp.com/api/schedule/currentshow';

export default {
  namespaced: true,
  state: {
    currentShow: []
  },
  actions: {
    async fetchCurrentShow({ commit }) {
      try {
        const show = await axios.get(sableAPI);
        console.log(show);
        commit('setCurrentShow', show);
      } catch (e) {
        console.log(`${e}, no shows to display`);
        commit('setCurrentShow', []);
      }
    }
  },
  getters: {
    thisShow: state => state.currentShow,
    isLive: state => state.currentShow.length !== 0
  },
  mutations: {
    setCurrentShow(state, show) {
      state.currentShow = show;
    }
  }
};
