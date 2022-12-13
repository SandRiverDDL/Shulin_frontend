<template>
  <div class="home">
    <navi></navi>
    <div id="web_title">
      书林学术
    </div>
    <div id="search">
      <searchForPaper></searchForPaper>
    </div>
  </div>
</template>
<style scoped>
#search{
  text-align: center;
  margin: 50px auto;
}
#web_title{
  margin-top: 150px;
  font-size: 40px;
}
</style>

<script>
// @ is an alias to /src
import Navi from "@/components/navi";
import searchForPaper from "@/components/searchForPaper";
function output(e) { console.log(Object.entries(e)) }
export default {
  name: 'HomeView',
  components: {
    searchForPaper,
    Navi,
  }
}
</script>
