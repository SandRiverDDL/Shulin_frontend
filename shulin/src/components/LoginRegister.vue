<template>
  <div class="LoginRegisterContainer">
    <div id="logo">
<!--      <img class="logo-pic" alt="logo" src="../assets/images/墨方.png" />-->
    </div>
    <div id="left-pic">
<!--      <img class="pic" alt="leftPic" src="../assets/images/笔墨.png" />-->
    </div>
    <div id="backcolor"></div>
    <div id="transformColor"></div>
  </div>
</template>

<script>
export default {
  name: "LoginRegister",
};
</script>

<style scoped>
#logo {
  position: relative;
  z-index: 10;
  margin-left: 20px;
  margin-top: 20px;
}
.logo-pic {
  height: 100px;
}
#backcolor {
  position: absolute;
  background: rgb(228, 245, 250);
  height: 104%;
  width: 100%;
  top: -32px;
  right: 0px;
}
#transformColor {
  position: absolute;
  background: -webkit-linear-gradient(right, rgb(228, 245, 250), #ffffff);
  height: 104%;
  width: 80%;
  top: -32px;
}
#left-pic {
  position: relative;
  z-index: 98;
  margin-top: 40px;
  margin-left: 80px;
}
.pic {
  height: 470px;
}
</style>
