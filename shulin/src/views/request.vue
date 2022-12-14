<template>
  <div>
    <navi></navi>
    <div id="container">
      <el-steps :active="active" simple>
        <el-step title="填写信息" icon="el-icon-edit"></el-step>
        <el-step title="审核" icon="el-icon-upload"></el-step>
        <el-step title="结果" icon="el-icon-picture"></el-step>
      </el-steps>
      <div v-if="active===1" id="form">
        <div class="input-container">
          邮箱&nbsp;:&nbsp;
          <el-input v-model="reqForm.email" placeholder="请输入内容"
                    clearable
                    style="width: 40%;"
          ></el-input>
        </div>
        <div class="text">
          理由&nbsp;:&nbsp;
        </div>
        <el-input
            type="textarea"
            :rows="20"
            placeholder="请输入内容"
            v-model="reqForm.reason" style="margin-top: 15px">
        </el-input>
        <div style="margin-top: 15px;">
          <el-radio v-model="radio" label="check" @click.prevent.native="changeRadio('check')">
            <span style="font-size: 18px">我已知悉</span>
          </el-radio>
          <span class="agreement"><a href='/agreement' target='_blank'>《免责及隐私声明》</a></span>
        </div>
        <div style="text-align: right">
          <el-button style="margin-top: 10px;" @click="next">下一步</el-button>
        </div>
      </div>
      <div v-if="active===2">
        <div id="info">
          审核中
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#info{
  margin-top: 50px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
#container{
  width: 50%;
  margin: 5% auto;
}
#form{
  margin: 30px auto;
  background-color: white;
  border-radius: 5%;
  border: 2px lightgray solid;
  box-shadow: lightgray 1px 1px 2px 2px;
  padding: 30px;
  width: 70%;
}
.input-container{
  margin-top: 25px;
  font-size: 22px;
  font-weight: bold;
}
.text{
  margin-top: 15px;
  font-size: 22px;
  font-weight: bold;
}
.agreement{
  font-size: 18px;
  color: #48A1FFFF;
}
.agreement:hover{
  cursor: pointer;
  color: #4281ff;
}
</style>

<script>
// @ is an alias to /src
import Navi from "@/components/navi";
export default {
  name: 'requestView',
  components: {Navi},
  data() {
    return {
      active: 1,
      status: 0,
      radio: "",
      reqForm:{
        email:"",
        reason:"",
      }
    };
  },

  methods: {
    next() {
      if(this.reqForm.email===""||this.reqForm.reason===""){
        this.$message.error("信息填写不完整！");
        return;
      }
      if(this.radio === ''){
        this.$message.error("请先同意协议！");
        return;
      }
      let formData=new FormData();
      formData.append('token',this.$store.state.token);
      formData.append('content',this.reqForm.reason);
      formData.append('scholar_id',this.$store.state.request_id);
      formData.append('email',this.reqForm.email);
      this.$axios({
        method: "post" /* 指明请求方式，可以是 get 或 post */,
        url: "/apply_scholar" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
        data: formData,
      })
          .then((res) => {
            /* res 是 response 的缩写 */
            // console.log("errno",res.data.errno);
            switch (res.data.errno) {
              case 0:
                this.$message.success("申请提交成功！");
                if (this.active++ > 2) this.active = 1;
                this.get_user_info();
                break;
              default:
                this.$message.error("申请提交失败！");
                break;
            }
          })
          .catch((err) => {
            console.log(err); /* 若出现异常则在终端输出相关信息 */
          });
    },
    changeRadio(label){
      if (this.radio === label) {
        this.radio = ''
        return
      }
      // 不是选中，选中当前点击 Radio
      this.radio = label
      // 选中操作
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
                console.log(res.data.msg);
                this.$store.state.state = res.data.data.state;
                this.$store.state.is_superuser = res.data.data.is_superuser;
                this.$store.state.email = res.data.data.email;
                this.$store.state.username = res.data.data.user_name;
                break;
              default:
                this.$message.error("获取用户信息失败！")
                break
            }
          }).catch(err => {
        console.log(err);
      })
    },

  },
  created(){
    if(this.$store.state.state===1)
      this.active=2;
  },
}
</script>