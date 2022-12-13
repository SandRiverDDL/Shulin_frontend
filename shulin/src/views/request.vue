<template>
  <div>
    <div id="container">
      <el-steps :active="active" simple>
        <el-step title="填写信息" icon="el-icon-edit"></el-step>
        <el-step title="审核" icon="el-icon-upload"></el-step>
        <el-step title="结果" icon="el-icon-picture"></el-step>
      </el-steps>
      <div v-if="active==1" id="form">
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
    </div>
  </div>
</template>

<style scoped>
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
export default {
  name: 'requestView',

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
      if (this.active++ > 2) this.active = 1;
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
  }

}
</script>