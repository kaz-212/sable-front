import axios from 'axios';

const sableAPI = 'https://sable-radio.herokuapp.com/api/schedule';

export default {
  namespaced: true,
  state: {
    weeklySchedule: []
  },
  actions: {
    async fetchSchedule(state) {
      try {
        const { data } = await axios.get(sableAPI);
        console.log(data);
        state.commit('setSchedule', data);
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    schedule: state => state.weeklySchedule
  },
  mutations: {
    setSchedule(state, schedule) {
      state.weeklySchedule = schedule;
    }
  }
};
