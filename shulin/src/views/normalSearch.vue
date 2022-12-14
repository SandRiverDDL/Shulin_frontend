<template>
  <div class="home">
    <navi></navi>
    <div id="search">
      <searchForPaper></searchForPaper>
    </div>
    <div id="container">
      <papers></papers>
    </div>
  </div>
</template>
<style scoped>
#search{
  text-align: center;
  margin: 30px auto;
}
#container{
  width: 650px;
  margin: 30px auto;
  border: 1px lightgray solid;
  box-shadow: lightgray 1px 1px 1px 1px;
  border-radius: 1%;
  padding: 10px;
}
</style>

<script>
// @ is an alias to /src
import Navi from "@/components/navi";
import searchForPaper from "@/components/searchForPaper";
import Papers from "@/components/paperCard";
export default {
  name: 'HomeView',
  components: {
    Papers,
    searchForPaper,
    Navi,
  }
}
</script>
