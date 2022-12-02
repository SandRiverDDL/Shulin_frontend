<template>
  <div>
    <el-row>
      <el-col :span=6>
        <div style="border: 1px solid transparent"></div>
      </el-col>
      <el-col :span="9">
        <div class="search" :style="colorVar" @mouseout="changeColor" @mouseleave="changeColor2">
          <el-row>
            <el-col :span=20>
              <div class="input_part">
                <input type="text" class="input" v-model="searchInput" name="searchInput" />
              </div>
            </el-col>
            <el-col :span=1>
              <div class="clear_part">
                <img src="@/assets/icon/clear.svg" class="clear_icon" v-if="(clearVisable === true)" @click="clear" />
              </div>
            </el-col>
            <el-col :span=3>
              <div class="icon_part">
                <img src="@/assets/icon/search.svg" class="search_icon" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>

    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: 'rgb(192, 192, 192)',
      clearVisable: false,
      searchInput: ""
    }
  },
  computed: {
    colorVar() {
      return {
        '--color': this.color
      }
    }
  },
  methods: {
    changeColor() {
      this.color = 'rgb(100, 100, 100)'
    },
    changeColor2() {
      this.color = 'rgb(192, 192, 192)'
    },
    clear() {
      this.searchInput = ""
    }
  },
  watch: {
    "searchInput": {
      handler: function () {
        if (this.searchInput != "") {
          this.clearVisable = true
        }
        else {
          this.clearVisable = false
        }
      }
    }
  }
}
</script>
<style scoped>
.search {
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(214, 214, 214);
  box-shadow: 0px 3px 6px var(--color);
  transition: 0.3s;
}

.input_part {
  padding: 15px;
  border-radius: 20px;
  border-color: black;
  border-style: solid;
  border-width: 0px;
  border-right-width: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.icon_part {
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-color: black;
  border-style: solid;
  border-width: 0px;
}

.clear_part {
  border-radius: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-color: black;
  border-style: solid;
  border-width: 0px;
}

.clear_icon {
  height: 18px;
  cursor: pointer;
}

.search_icon {
  height: 28px;
  cursor: pointer;
}

.input {
  height: 20px;
  border: transparent;
  outline: none;
  width: 90%;
  font-size: 17px;
}
</style>