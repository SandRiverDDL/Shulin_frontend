<template>
  <div>
    <navi></navi>
    <h1 @click="get_user_info">用户空间</h1>
    <div>
      <div id="up">
        <div class="left-part">
          <input type="file" name="image" accept="image/*" @change='onchangeImgFun'
                 id="header-upload-btn" >
          <img alt="此处应为图片" :src='this.$store.state.url' class="user-header-com" @click="upload">
        </div>
<!--        <div class="mid-part">-->
<!--          <div class="title">用户名:</div>-->
<!--          <div class="title">邮箱地址:</div>-->
<!--          <div class="title">认证情况:</div>-->
<!--        </div>-->
        <div class="right-part" >
          <div class="text">
            {{this.$store.state.username}}
          </div>
          <div class="text">{{this.$store.state.email}}</div>
          <div class="text">
            <span v-if="this.$store.state.state===0">未认证</span>
            <span v-if="this.$store.state.state===1">认证中</span>
            <span v-if="this.$store.state.state===2">已认证</span>
          </div>
        </div>
      </div>
      <div id="down">
        <el-menu id="menu" mode="horizontal"  @select="handleSelect" active-text-color="#4281ff">
          <el-menu-item  index="1" style="font-size: 20px">收藏</el-menu-item>
          <el-menu-item  index="2" style="font-size: 20px">关注</el-menu-item>
        </el-menu>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
body{
  background-color: rgb(248,248,248);
  /*color: #fe4167;*/
}
#down{
  width: 700px;
  border: 1px lightgray solid;
  box-shadow: lightgray 1px 1px 2px 2px;
  border-radius: 3%;
  margin: 30px auto;
  padding-bottom: 50px;
}
#up{
  margin: 30px auto;
  padding: 10px;
  width: 700px;
  background-color: white;
  border-radius: 3%;
  border: 1px lightgray solid;
  box-shadow: lightgray 1px 1px 2px 2px;
  height: 170px;
}
.mid-part{
  float: left;
  width: 100px;
  text-align: right;
}
.right-part{
  background-color: white;
  float: left;
  margin-left: 50px;
  text-align: left;
}

.title{
  color:#909399;
  margin-top:20px;
  font-size:20px;
  font-weight: bold;
}
.text{
  font-size:20px;
  margin-top:23px;
  font-weight: bold;
}
.left-part{
  float: left;
}
.user-header-com{
  /*display: inline-block;*/
  border:solid 1px gray;
  width:150px;
  height:150px;
  border-radius:100%;
  overflow:hidden;
}
.user-header-com:hover{
  cursor: pointer;
}
#header-upload-btn{
  width:0;
  height:0;
  opacity: 0;
  /* 通过定位把input放在img标签上面，通过不透明度隐藏 */
}
</style>
<script>
import Navi from "@/components/navi";
export default {
  components: {Navi},
  methods:{
    handleSelect(index){
      console.log(index);
      switch (index) {
        case "1":
          if(this.$route.path==="/user/collections")
            return;
          this.$router.push("/user/collections");
          break;
        case "2":
          if(this.$route.path==="/user/following")
            return;
          this.$router.push("/user/following");
          break;
        default:
          console.log("nothing");
      }
    },
    upload(){
      document.getElementById('header-upload-btn').click();
    },
    get_user_info() {
      let formData = new FormData();
      formData.append("token", this.$store.state.token);
      console.log('token', this.$store.state.token)
      this.$axios({
        method: 'post',
        url: '/get_user_info',
        data: formData,
      })
          .then(res => {
            console.log(res.data.errno);
            switch (res.data.errno) {
              case 0:
                console.log(res);
                this.$store.state.state = res.data.data.state;
                this.$store.state.is_superuser = res.data.data.is_superuser;
                this.$store.state.email=res.data.data.email;
                this.$store.state.username=res.data.data.username;
                // this.$store.state.url="http://114.116.219.180"+res.data.data.head_url;
                break;
              default:
                this.$message.error("获取用户信息失败！")
                break
            }
          }).catch(err => {
        console.log(err);
      })
    },
    onchangeImgFun(e) {
    var file = e.target.files[0]
    console.log(file)
    // 获取图片的大小，做大小限制有用
    let imgSize = file.size
    console.log(imgSize)
    var _this = this // this指向问题，所以在外面先定义
    // 比如上传头像限制5M大小，这里获取的大小单位是b
    if (imgSize <= 5 * 1024 * 1024) {
      // 合格
      _this.errorStr = ''
      console.log('大小合适')
      var reader = new FileReader()
      reader.readAsDataURL(file) // 读出 base64
      reader.onloadend = function() {
        // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
        // 下面逻辑处理
      }
      // 上传
      let formData=new FormData();
      formData.append("headshot",file);
      formData.append("email",this.$store.state.email);
      this.$axios({
        method:'post',
        url:'api/app1/addHeadShot',
        data:formData,
      })
          .then(res=>{
            console.log(res.data.errno);
            switch (res.data.errno){
              case 900000:
                _this.$store.state.url="http://43.138.76.79/"+res.data.photo_url;
                console.log(_this.$store.state.url);
            }
          }).catch(err =>{
        console.log(err);
      })
    } else {
      console.log('大小不合适')
      this.$message.error('上传头像图片大小不能超过 5MB!');
    }
  },
  }
}
</script>