import axios from 'axios';

const allResidentsURL = 'https://sable-radio.herokuapp.com/api/residents';

export default {
  namespaced: true,
  state: {
    residents: [],
    selectedResident: {}
  },
  actions: {
    async fetchResidents(state) {
      try {
        const { data } = await axios.get(allResidentsURL);
        state.commit('setResidents', data);
      } catch (e) {
        console.log(e);
      }
    },
    async fetchIndividualResident(state, id) {
      try {
        console.log(id);
        const { data } = await axios.get(`${allResidentsURL}/${id}`);
        state.commit('setIndividualResident', data);
      } catch (e) {
        console.log(`${e} check checl`);
      }
    }
  },
  getters: {
    getResidents: state => state.residents,
    getResidentById: state => state.selectedResident
  },
  mutations: {
    setResidents(state, residentsData) {
      state.residents = residentsData;
    },
    setIndividualResident(state, residentData) {
      state.selectedResident = residentData;
    }
  }
};
