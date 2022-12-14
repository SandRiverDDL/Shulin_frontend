<template>
  <div class="home">
    <navi></navi>
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
  }
}
</script>
