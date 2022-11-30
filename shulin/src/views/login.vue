<template>
  <div class="login">
    <div id="right-container">
      <div class="sign-list" style="display: block">
        <div class="text">
          <h1>登录</h1>
        </div>
        <div class="input-list">
          <div class="input-list-con" style="display: block">
            <div class="list error">
              <input
                  type="text"
                  class="input-text error"
                  placeholder="电子邮箱"
                  data-type="account"
                  v-model="loginForm.email"
              />
            </div>
            <div class="list error">
              <input
                  type="password"
                  class="input-text error"
                  placeholder="密码"
                  data-type="password"
                  v-model="loginForm.password"
              />
            </div>
            <div class="button">
              <button type="primary" roundsize="large" @click="login">
                <p>登录</p>
              </button>
            </div>
            <div class="other-text">
              没有账号？
              <a href="/register" class="red"> 立即注册 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "LoginView",
  components: {
    LoginRegister,
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  store,
  methods: {
    login: function () {
      if (this.loginForm.email === "" || this.loginForm.password === "") {
        this.$message.warning("邮箱和密码不能为空！");
        return;
      }
      let formData = new FormData();
      formData.append("email", this.loginForm.email);
      formData.append("password", this.loginForm.password);
      this.$axios({
        method: "post" /* 指明请求方式，可以是 get 或 post */,
        url: "/api/app1/login" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
        data: formData,
      })
          .then((res) => {
            /* res 是 response 的缩写 */
            switch (res.data.errno) {
              case 100000:
                localStorage.clear();
                console.log(res.data);
                this.$store.state.email = res.data.post.email;
                this.$store.state.user_name=res.data.post.name;
                this.$store.state.true_name=res.data.post.truename;
                this.$store.state.url="http://43.138.76.79"+res.data.post.url;
                this.$message.success("登录成功！");
                this.$store.commit('login');//这个函数会修改islogin全局变量的值，当然也可以直接修改
                /* 将后端返回的 user 信息使用 vuex 存储起来 */
                /* 从 localStorage 中读取 preRoute 键对应的值 */
                //const history_pth = localStorage.getItem('preRoute');
                localStorage.setItem('storeState',JSON.stringify(this.$store.state));
                this.$router.push("/home/projects");
                break;
              case 100002:
                this.$message.error("用户不存在或未注册!");
                break;
              case 100003:
                this.$message.error("邮箱或密码错误！");
                break;
              case 100004:
                this.$message.error("已经登录，请勿重复登录！");
                break;
              default:
                this.$message.error("其它错误！");
            }
          })
          .catch((err) => {
            console.log(err); /* 若出现异常则在终端输出相关信息 */
          });
    },
  },
  created(){
    let storeState = JSON.parse(localStorage.getItem('storeState'));
    if(storeState)
    {
      this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(localStorage.getItem('storeState'))))
      this.$router.push("/home/projects");
    }
  }
};
</script>

<style scoped>
.login {
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  height: 100vh;
  width: 100%;
}
#right-container {
  z-index: 99;
  position: absolute;
  background: #ffffff;
  border-radius: 32px;
  box-shadow: 0 16px 32px 0 rgb(0 0 0 / 8%);
  top: 50%;
  transform: translateY(-50%);
  padding: 64px;
  width: 600px;
  height: 600px;
  right:28%;
}
.login .sign-list .text {
  position: absolute;
  top: 0;
}
.login .sign-list .text h1 {
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 20px;
  margin-top:100px;
  margin-left:180px;
}
.sign-list .input-list .list.error {
  margin-top: 40px;
  border-color: #DCDFE6;
  background: #DCDFE6;
}
.sign-list .input-list .list {
  position: relative;
  top:100px;
  border-radius: 8px;
  transition: 0.3s;
  border: 1px solid #e9e9e9;
}
.sign-list .input-list .list .input-text {
  border-color: #fe4066;
}
.sign-list .input-list .list.error .input-text {
  background: #ffffff;
  color: #353030;
  height: 48px;
  padding: 0 16px;
  display: block;
  width: 100%;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: 0.3s;
  font-size: 16px;
}
input {
  box-shadow: none !important;
  outline: 0 !important;
  -webkit-appearance: none;
}
.button button {
  position: absolute;
  margin-top: 180px;
  margin-left: 8px;
  width: 450px;
  height: 10%;
  background-image: linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%);
  border-radius: 8px;
  border: 0px solid transparent;
}
.other-text {
  position: relative;
  top:130px;
  left:160px;
  color: #8c8889;
  font-size: 14px;
  line-height: 22px;
  user-select: none;
}
.red {
  color: #297caf;
  display: inline-block;
  position: relative;
}
a {
  text-decoration: none;
}
.red:hover {
  font-weight: bold;
}
p {
  font-size:20px;
  letter-spacing: 10px;
  color: aliceblue;
  font-weight: bold;
}
</style>