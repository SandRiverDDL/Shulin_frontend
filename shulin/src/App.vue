<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*nav {*/
/*  padding: 30px;*/
/*}*/

/*nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>

<script>
export default {
  name: "app",
  created() {
    //在页面加载时读取localStorage里的状态信息
    if (localStorage.getItem('storeState')) {
      //replaceState，替换store的根状态
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem('storeState'))))
    }
    //在页面刷新前将vuex里的信息保存到localStorage里（只有当登录时）
    window.addEventListener('beforeunload', () => {
      if (this.$store.state.login)
        localStorage.setItem('storeState', JSON.stringify(this.$store.state));
    })
    console.log('storeState', localStorage.getItem('storeState'));
  },
}
</script>
