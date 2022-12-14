<template>
    <div>
        <div class="search" id="searchBox" :style="colorVar" @mouseout="changeColor" @mouseleave="changeColor2">
            <el-select v-model="value" placeholder="请选择" class="sel">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-divider direction="vertical" style="margin-left: 100px"></el-divider>
            <input value="请输入姓名" onFocus="if(value==defaultValue){value='';this.style.color='#000'}"
                onBlur="if(!value){value=defaultValue; this.style.color='#999'}" style="color:#999" class="input"
                v-model="searchInput" name="searchInput" />
            <img src="@/assets/icon/clear.svg" class="clear_icon" @click="clear" id="clear" />
            <img src="@/assets/icon/search.svg" class="search_icon" @click="search"/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            color: '',
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
            color1: '',
            color2: '',
            deepColor: '',
            options: [{
              value: 0,
              label: '篇名'
            }, {
              value: 1,
              label: '关键词'
            }, {
              value: 2,
              label: '摘要'
            }, {
              value: 3,
              label: '作者'
            },{
              value: 4,
              label: '来源'
            } ],
          value: 0,
          input: [],
          tmp: null,
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
          if(this.searchInput===""){
            this.$message.info("输入不能为空！");
            return;
          }
          if(this.$route.path==='/'){
            let tmp = {
              relation: 'or',
              type: this.value,
              text: this.searchInput,
            };
            this.$store.state.input.push(tmp);
            this.$router.push("/normal");
            return;
          }//下面是 /normal的情况
          let tmp = {
            relation: 'or',
            type: this.value,
            text: this.searchInput,
          };
          this.input=[];
          this.input.push(tmp);
          let formData = new FormData();
          // formData.append("input", this.input);
          formData.append("input",JSON.stringify(this.input));
          // console.log('input是', JSON.stringify(this.input));
          // console.log('string是', '[{"relation":"or","type":0,"text":"人工"}]');
          // formData={"input":[{"relation": "or","type": 0,"text": "人工"}]};
          console.log()
          this.$axios({
            method: 'post',
            url: '/paper_search',
            data: formData,
          })
              .then(res => {
                console.log(res.data.errno);
                switch (res.data.errno) {
                  case 0:
                    console.log("data",res.data);
                    this.$store.state.searched_paper=res.data.msg;
                    // console.log(this.$store.state.searched_paper)
                    break;
                  default:
                    this.$message.error("搜索失败！")
                    break
                }
              }).catch(err => {
            console.log(err);
          })
        }
    },

  created() {
      if(this.$store.state.after_home===true&&this.$route.path==='/normal'){
        console.log("执行了");
        this.value=this.$store.state.input[0].type;
        this.searchInput=this.$store.state.input[0].text;
        this.$store.state.input=[];
        this.$store.state.after_home=false;
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

                    }
                    else {
                        this.empty = false

                    }
                }
                else {
                    this.empty = true
                    clear.style.cursor = "auto"
                    clear.style.opacity = 0

                }
            }
        }
    }
}
</script>
<style scoped>
.search>>>.el-input__inner {
  border: 0;
}
.sel{
  /*position:absolute;*/
  /*clip:rect(2px 90px 30px 2px);*/
  /*width:90px;*/
  height:28px;
  line-height:28px;
  font-size:15px;
  font-weight:bold;
  width: 90px;
}
.search {
    border-radius: 8px;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);

    border-width: 1px;
    border-style: solid;
    border-color: rgb(214, 214, 214);
    box-shadow: 1px -1px 0px var(--color);
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
    width: 435px;
    font-size: 17px;
    display: inline-block;
    vertical-align: middle;
    padding: 10px 10px 10px 0px;
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
    box-shadow: 0px 3px 0px var(--color);
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