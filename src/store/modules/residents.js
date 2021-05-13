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
    getResidents: state => state.residents,
    getResidentById: state => id => {
      // TODO add error handling
      const resident = state.residents.find(item => item.id === id);
      console.log('res', resident);
      return resident;
    }
  },
  mutations: {
    setResidents(state, residentsData) {
      state.residents = residentsData;
    }
  }
};
