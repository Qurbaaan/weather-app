import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue'
import router from "./router"; // Router config
import store from "./store"; // Store config

Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
