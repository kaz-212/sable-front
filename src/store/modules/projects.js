import axios from 'axios';
import router from '../../router/index';

const allProjectsURL = 'https://sable-radio.herokuapp.com/api/projs';

export default {
  namespaced: true,
  state: {
    projects: []
  },
  actions: {
    async fetchProjects(state) {
      try {
        const { data } = await axios.get(allProjectsURL);
        state.commit('setProjects', data);
      } catch (e) {
        console.log(e);
      }
    },
    async fetchIndividualProject(state, id) {
      try {
        const { data } = await axios.get(`${allProjectsURL}/${id}`);
        return data;
      } catch (e) {
        console.log(e);
        return router.push({ name: '404' });
      }
    }
  },
  getters: {
    getProjects: state => state.projects
  },
  mutations: {
    setProjects(state, projectsData) {
      state.projects = projectsData;
    }
  }
};
