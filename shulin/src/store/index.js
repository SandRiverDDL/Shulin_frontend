import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    token: "",
    user_name: "",
    code: "",
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
