import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/font.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
import axios from "axios"
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = true
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://114.116.219.180/test/";
axios.defaults.withCredentials = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
