<template>
  <div>
    <div class="search" id="searchBox" :style="colorVar" @mouseout="changeColor" @mouseleave="changeColor2">

      <input type="text" class="input" v-model="searchInput" name="searchInput" />


      <img src="@/assets/icon/clear.svg" class="clear_icon" @click="clear" id="clear" />


      <img src="@/assets/icon/search.svg" class="search_icon" />

      <div class="resUl" :style="colorVar">
        <div class="resUl_2">
          <ul v-show="!empty">
            <li v-for="(item, index) in results">
              <img src="../assets/icon/search.svg" class="search_in_li" />
              <span>{{ item.name }}</span>
              <div style="clear: both;"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: 'rgb(222, 222, 222)',
      searchInput: "",
      results: [
        {
          name: "nihao"
        },
        {
          name: "hello"
        }
      ],
      empty: true,
      radius: 8,
      color1: 'rgb(180, 180, 180)',
      color2: 'rgb(222, 222, 222)',
      deepColor: 'rgb(180, 180, 180)',
    }
  },
  computed: {
    colorVar() {
      return {
        '--color': this.color,
        '--radius': this.radius + 'px',
      }
    }
  },
  methods: {
    changeColor() {
      this.color = this.color1
    },
    changeColor2() {
      this.color = this.color2
    },
    clear() {
      this.searchInput = ""
    },
    search() {

    }
  },
  mounted() {
    // 模拟外部点击
    document.addEventListener('click', (e) => {
      if (e.target.className !== 'search') {
        this.empty = true
        this.radius = 8
      }
    })
  },
  // 在组件生命周期结束时销毁
  beforeDestroy() {
    window.removeEventListener('click', () => { }, true)
  },

  watch: {
    "searchInput": {
      handler: function () {
        var clear = document.getElementById('clear');
        if (this.searchInput != "") {
          clear.style.cursor = "pointer"
          clear.style.opacity = 1
          if (this.results.length == 0) {
            this.empty = true
            this.radius = 8
            this.color1 = this.deepColor
          }
          else {
            this.empty = false
            this.radius = 0
            this.color1 = this.color2
          }
        }
        else {
          this.empty = true
          clear.style.cursor = "auto"
          clear.style.opacity = 0
          this.radius = 8
          this.color1 = this.deepColor
        }
      }
    }
  }
}
</script>
<style scoped>
.search {
  border-radius: 8px;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);

  border-width: 1px;
  border-style: solid;
  border-color: rgb(214, 214, 214);
  box-shadow: 1px -1px 5px var(--color);
  transition: 0.3s;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
}

.clear_icon {
  height: 18px;
  vertical-align: middle;
  display: inline-block;
  margin-left: 10px;
  opacity: 0;
}

.search_icon {
  height: 28px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
  margin-right: 20px;
}

.input {
  height: 20px;
  border: transparent;
  outline: none;
  width: 535px;
  font-size: 17px;
  display: inline-block;
  vertical-align: middle;
  padding: 10px;
  margin-left: 10px;
}

.resUl {
  display: block;
  width: auto;
  position: relative;
  z-index: 6;
}

.resUl_2 {
  margin-top: 10px;
  display: block;
  position: absolute;
  width: 100%;
}

ul {
  display: block;
  list-style-type: none;
  margin-left: -1px;
  margin-right: -1px;
  margin-top: 0px;
  border-color: rgb(214, 214, 214);
  border-style: solid;
  border-width: 1px;
  padding-left: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 3px 5px var(--color);
}

li {
  margin-left: -1px;
  padding: 10px;
  cursor: pointer;
  background-color: white;
}

li span {
  float: left;
  margin-left: 15px;
}

li:hover {
  background-color: rgb(206, 206, 206);
}

li:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.search_in_li {
  float: left;
  height: 20px;
}
</style>