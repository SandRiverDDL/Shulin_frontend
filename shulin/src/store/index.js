import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    token: "",
    user_name: "",
    code: "",
    is_superuser: 1,
    status: 0,
    url: "https://img0.baidu.com/it/u=3121313817,182561676&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
  },
  getters: {
  },
  mutations: {
    login(){
      this.state.login = true;
    },
    logout(){
      this.state.login = false;
    },
  },
  actions: {
  },
  modules: {
  }
})
