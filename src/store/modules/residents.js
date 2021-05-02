import axios from 'axios';

const allResidentsURL = 'https://sable-radio.herokuapp.com/api/residents';

export default {
  namespaced: true,
  state: {
    residents: []
  },
  actions: {
    async fetchResidents(state) {
      try {
        const { data } = await axios.get(allResidentsURL);
        state.commit('setResidents', data);
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    getResidents: state => state.residents
  },
  mutations: {
    setResidents(state, residentsData) {
      state.residents = residentsData;
    }
  }
};
