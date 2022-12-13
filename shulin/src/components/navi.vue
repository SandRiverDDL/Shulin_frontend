<template>
  <div>
    <div style="height: 60px;">
      <div id="title" @click="show">
        <span style="color: saddlebrown">书</span>&nbsp;<span style="color: green">林</span>
      </div>
      <el-menu id="menu" mode="horizontal"  @select="handleSelect" active-text-color="#4281ff" style="float: left;font-size: 50px">
        <el-menu-item  index="1" style="font-size: 30px">主页</el-menu-item>
        <el-menu-item  index="2" style="font-size: 30px">高级搜索</el-menu-item>
        <el-menu-item  index="3" style="font-size: 30px">学者搜索</el-menu-item>
        <el-menu-item  index="4" v-if="this.$store.state.is_superuser===1" style="font-size: 30px">审核</el-menu-item>
      </el-menu>
      <div id="right1">
        <span v-if="this.$store.state.login==true">
           <el-popover placement="right" width="150" trigger="hover">
            <el-menu
                class="pop-menu"
                active-text-color="#303133"
                @select="handlePopMenu"
            >
              <el-menu-item index="1" class="pop-menu-item">
                <span slot="title">
                  <a class="pop-menu-text">个人空间</a>
                </span>
              </el-menu-item>
              <el-menu-item index="2" class="pop-menu-item" v-if="this.$store.state.status!==0">
                <span slot="title">
                  <a class="pop-menu-text"
                      v-if="this.$store.state.status===1"
                  >我的申请</a>
                  <a class="pop-menu-text"
                     v-if="this.$store.state.status===2"
                  >我的门户</a>
                </span>
              </el-menu-item>
              <el-menu-item index="3" class="pop-menu-item">
                <span slot="title">
                  <a class="pop-menu-text">退出登录</a>
                </span>
              </el-menu-item>
            </el-menu>
            <el-avatar
                style="margin-top: 10px"
                :src="this.$store.state.url"
                slot="reference"
            ></el-avatar>
          </el-popover>
        </span>
        <span v-else>您还未登录，请先登录</span>
      </div>
      <div v-if="this.$store.state.login===true">
        已经登录
      </div>
    </div>
  </div>
</template>

<style scoped>
#title{
  float: left;
  font-size: 44px;
  margin-left: 40px;
  margin-right: 40px;
  font-weight: bold;
}
#right1{
  float: right;
  margin-right: 150px;
}
</style>

<script>
export default {
  name: "navi",
  methods: {
    show: function (){
      this.$store.state.is_superuser=1;
      this.$store.state.login=true;
      this.$store.state.status=0;
      console.log("状态",this.$store.state.is_superuser);
    },
    handlePopMenu(index) {
      console.log(index);
      switch (index) {
        case "1":
          console.log("个人信息");
          this.$router.push("/userspace");
          break;
        case "2":
          if(this.$store.state.status===1){
            this.$router.push("/request");
          }
          else {
            this.$router.push("/scholar");
          }
          break;
        case "3"://在这里执行退出登录的所有操作
          //向后端发送请求
          this.$message.success("退出登录！");
          this.$store.commit("logout");
          localStorage.clear();
          this.$router.push("/");
      }
    },
    //路由跳转页面
    handleSelect(index){
      console.log(index);
      switch (index) {
        case "1":
          if(this.$route.path==="/")
            return;
          this.$router.push("/");
          break;
        case "2":
          if(this.$route.path==="/advanced")
            return;
          this.$router.push("/advanced");
          break;
        case "3":
          if(this.$route.path==="/searchScholar")
            return;
          this.$router.push("/searchScholar");
          break;
        case "4":
          if(this.$route.path==="/judge")
            return;
          this.$router.push("/judge");
          break;
        default:
          console.log("nothing");
      }
    },
  },//method结束
};
</script>

