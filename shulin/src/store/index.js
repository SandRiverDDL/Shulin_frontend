import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    token: "",
    username: "",
    code: "",
    is_superuser: false,
    state: 0,
    url: "https://img0.baidu.com/it/u=3121313817,182561676&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    email: "",
    input: [],
    after_home: false,
    searched_paper: [],
    will_see_paper_id: "",
  },
  getters: {
  },
  mutations: {
    login(){
      this.state.login = true;
    },
    logout(){
      this.state.login = false;
      this.state.token="";
      this.state.username="";
      this.state.code="";
      this.state.is_superuser=false
      this.state.state=0;
      this.state.url="https://img0.baidu.com/it/u=3121313817,182561676&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500";
      this.state.email="";
      this.state.input=[];
      this.state.after_home=false;
      this.state.searched_paper=[];
      this.state.will_see_paper_id="";
    },
  },
  actions: {
  },
  modules: {
  }
})
