import axios from 'axios';

const sableAPI = 'https://sable-radio.herokuapp.com/api/schedule';

export default ({
  namespaced: true,
  state: {
    weeklySchedule: []
  },
  actions: {
    async fetchSchedule(state) {
      const schedule = await axios.get(sableAPI);
      JSON.stringify(schedule);
      console.log(schedule);
      state.commit('setSchedule', schedule);
    }
  },
  modules: {},
  getters: {
    schedule: state => state.weeklySchedule
  },
  mutations: {
    setSchedule(state, schedule) {
      state.weeklySchedule = schedule;
    }
  }
});
