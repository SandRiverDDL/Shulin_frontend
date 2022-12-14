<template>
  <div class="register">
    <div id="right-container">
      <div class="sign-list" style="display: block">
        <h1>注册</h1>
        <div class="input-list">
          <div class="input-list-con" style="display: block">
            <div class="list error">
              <input type="text" class="input-text error" placeholder="电子邮箱" data-type="account"
                v-model="regForm.email" />
            </div>
            <div class="list error">
              <input type="text" class="input-text error" placeholder="验证码" data-type="account" v-model="regForm.code"
                style="width: 50%;display: inline;" />
              <el-button plain @click="send_code">发送验证码</el-button>
            </div>
            <div class="list error">
              <input type="text" class="input-text error" placeholder="用户名" v-model="regForm.user_name" />
            </div>
            <div class="list error">
              <input type="password" class="input-text error" placeholder="密码，长度大于等于6位" data-type="password"
                v-model="regForm.pwd1" />
            </div>
            <div class="list error">
              <input type="password" class="input-text error" data-type="password" placeholder="确认密码"
                v-model="regForm.pwd2" />
            </div>
            <div class="button">
              <button type="primary" roundsize="large" @click="register">
                <p>注册</p>
              </button>
            </div>
            <div class="other-text">
              已有账号？
              <a href="/login" class="red"> 直接登录 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register {
  /*background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);*/
  height: 100%;
  width: 100%;
  position: absolute;
}

#right-container {
  background: white;
  border-radius: 32px;
  border: 2px lightgray solid;
  box-shadow: lightgray 1px 1px 2px 2px;
  padding: 20px;
  width: 500px;
  margin: 5% auto 0;
  text-align: center;
}

.register .sign-list h1 {
  font-size: 50px;
  line-height: 48px;
  letter-spacing: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #297caf;
}

.sign-list .input-list .list {
  border-radius: 8px;
  transition: 0.3s;
  border: 1px solid #e9e9e9;
  width: 80%;
  margin: 0 auto;
}

.sign-list .input-list .list.error {
  margin-top: 15px;
  border-color: #DCDFE6;
  background: white;
}

.sign-list .input-list .list.error .input-text {
  background: #ffffff;
  color: #353030;
  height: 48px;
  padding: 0 16px;
  display: block;
  width: 80%;
  margin: 0 auto;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: 0.3s;
  font-size: 16px;
  font-weight: bold;
}

input {
  box-shadow: none !important;
  outline: 0 !important;
  -webkit-appearance: none;
}

.button button {
  margin: 30px auto;
  width: 380px;
  height: 50px;
  background-image: linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%);
  border-radius: 8px;
  border: 1px solid transparent;
}

.button button:hover {
  cursor: pointer;
}

.other-text {
  color: #8c8889;
  font-size: 14px;
  line-height: 22px;
  user-select: none;
}

.red {
  color: #297caf;
  display: inline-block;
}

a {
  text-decoration: none;
}

.red:hover {
  font-weight: bold;
}

p {
  font-size: 20px;
  letter-spacing: 10px;
  color: aliceblue;
  font-weight: bold;
}
</style>


<script>
// import LoginRegister from "@/components/LoginRegister.vue";

export default {
  name: "RegisterView",
  // components: {
  //   LoginRegister,
  // },
  data() {
    return {
      regForm: {
        email: "",
        code: "",
        user_name: "",
        pwd1: "",
        pwd2: "",
      },
    };
  },
  methods: {
    send_code() {
      let formData = new FormData();
      this.$store.state.code = Math.ceil(Math.random() * 9000 + 1000).toString()
      console.log("验证码是" + this.$store.state.code);
      formData.append("email", this.regForm.email);
      formData.append("rand_code", this.$store.state.code)
      this.$axios({
        method: "post" /* 指明请求方式，可以是 get 或 post */,
        url: "/email_send" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
        data: formData,
      })
        .then((res) => {
          /* res 是 response 的缩写 */
          switch (res.data.errno) {
            case 0:
              this.$message.success("发送验证码成功！");
              break;
            default:
              this.$message.error("发送验证码失败！");
              break;
          }
        })
        .catch((err) => {
          console.log(err); /* 若出现异常则在终端输出相关信息 */
        });
    },
    register: function () {
      console.log("现在的验证码是：", this.$store.state.code);
      console.log("填写的验证码是：", this.regForm.code);
      if (
        this.regForm.email === "" ||
        this.regForm.user_name === "" ||
        this.regForm.pwd1 === "" ||
        this.regForm.pwd2 === "") {
        this.$message.error("信息尚未填写完整！");
        return;
      }
      if (this.regForm.code !== this.$store.state.code) {
        this.$message.error("验证码错误！");
        return;
      }
      if (this.regForm.pwd1.length < 6) {
        this.$message.error("密码长度太短！");
        return;
      }
      if (this.regForm.pwd1 !== this.regForm.pwd2) {
        this.$message.error("两次密码不一致！");
        return;
      }
      let formData = new FormData();
      formData.append("username", this.regForm.user_name);
      formData.append("email", this.regForm.email);
      formData.append("password", this.regForm.pwd1);

      this.$axios({
        method: "post" /* 指明请求方式，可以是 get 或 post */,
        url: "/register" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
        data: formData,
      })
        .then((res) => {
          /* res 是 response 的缩写 */
          switch (res.data.errno) {
            case 0:
              this.$message.success("注册成功！");
              break;
            default:
              this.$message.error("注册失败！");
          }
        })
        .catch((err) => {
          console.log(err); /* 若出现异常则在终端输出相关信息 */
        });
      this.$router.push('/login');
    },
    // show_code:function (){
    //   console.log("vuex中的验证码",this.$store.state.code);
    // }
  },
};
</script>


