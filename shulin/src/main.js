import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import VueAxios from "vue-axios";
import VueSession from 'vue-session'

Vue.use(VueAxios, axios)

Vue.use(VueSession)

Vue.config.productionTip = true
Vue.prototype.$axios = axios;
// axios.defaults.baseURL = "http://43.138.76.79";
axios.defaults.withCredentials =true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
