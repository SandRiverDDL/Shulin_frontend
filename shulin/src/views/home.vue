<template>
  <div class="home">
    <navi></navi>
    <div id="web_title">
      <span style="color: saddlebrown">书</span><span style="color: green">林</span>学术
    </div>
    <div id="search">
      <searchForPaper></searchForPaper>
    </div>
  </div>
</template>
<style scoped>
#search{
  text-align: center;
  margin: 30px auto;
}
#web_title{
  margin-top: 150px;
  font-size: 40px;
  font-family: 'mama';
}
</style>

<script>
// @ is an alias to /src
import Navi from "@/components/navi";
import searchForPaper from "@/components/searchForPaper";
export default {
  name: 'HomeView',
  components: {
    searchForPaper,
    Navi,
  },
  created() {
    this.$store.state.after_home=true;
  }
}
</script>
