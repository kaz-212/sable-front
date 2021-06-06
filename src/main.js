import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// uncomment below for every redeploy
// if (window.location.protocol !== 'https:') window.location.href = `https://www.sableradio.live${window.location.pathname}`;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
