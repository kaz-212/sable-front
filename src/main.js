import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// uncomment below for every redeploy
if (process.env.NODE_ENV === 'production') {
  if (window.location.protocol !== 'https:') {
    window.location.href = `https://www.sablestudio.co${window.location.pathname}`;
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
