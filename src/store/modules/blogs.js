import axios from 'axios';
import router from '../../router/index';

const allBlogsURL = 'https://sable-radio.herokuapp.com/api/blogs';

export default {
  namespaced: true,
  state: {
    blogs: []
  },
  actions: {
    async fetchBlogs(state) {
      try {
        const { data } = await axios.get(allBlogsURL);
        state.commit('setBlogs', data);
      } catch (e) {
        console.log(e);
      }
    },
    async fetchIndividualBlog(state, id) {
      try {
        const { data } = await axios.get(`${allBlogsURL}/${id}`);
        return data;
      } catch (e) {
        return router.push({ name: '404' });
      }
    }
  },
  getters: {
    getBlogs: state => state.blogs
  },
  mutations: {
    setBlogs(state, blogsData) {
      state.blogs = blogsData;
    }
  }
};
