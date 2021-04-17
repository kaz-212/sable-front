import axios from 'axios';

const sableAPI = 'https://sable-radio.herokuapp.com/api/schedule/currentshow';

export default ({
  state: {
    currentShow: ''
  },
  actions: {
    async fetchCurrentShow(state) {
      const show = await axios.get(sableAPI);
      state.commit('setCurrentShow', show);
    }
  },
  modules: {
  },
  getters: {
    thisShow: (state) => state.currentShow
  },
  mutations: {
    setCurrentShow(state, show) {
      state.currentShow = show;
    }
  }
});
