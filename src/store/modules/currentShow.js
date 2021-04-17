import axios from 'axios';

const sableAPI = 'https://sable-radio.herokuapp.com/api/schedule/currentshow';

export default ({
  state: {
    currentShow: ''
  },
  actions: {
    async fetchCurrentShow(state) {
      try {
        const show = await axios.get(sableAPI);
        state.commit('setCurrentShow', show);
      } catch (e) {
        console.log(`${e}, no shows to display`);
      }
    }
  },
  modules: {},
  getters: {
    thisShow: (state) => state.currentShow
  },
  mutations: {
    setCurrentShow(state, show) {
      state.currentShow = show;
    }
  }
});
