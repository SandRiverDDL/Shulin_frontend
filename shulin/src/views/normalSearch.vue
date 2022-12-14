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
  },
  data() {
    return {
      activeIndex: '1',
      wait: 0,
      tablePage: {
        pageNum: 1, // 第几页
        pageSize: 5, // 每页多少条
        total: 0 // 总记录数
      },
      pageSizes: [5, 10, 20],
    }
  },
  methods:{
    handlePageChange(currentPage) {
      this.tablePage.pageNum = currentPage;
    },
    handleSizeChange(pageSize) {
      this.tablePage.pageSize = pageSize;
      // console.log(pageSize);
    },
    getList(data,num,size) {
      let list, start, end;
      start = (num - 1) * size;
      end = start + size;
      list = data.filter((item, index) => {
        return index >= start && index < end;
      })
      list.forEach((item, index) => {
        item.seq = index + start;
      })
      return list;
    },
  }
}
</script>
