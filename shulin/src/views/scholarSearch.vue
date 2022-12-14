<template>
    <div>
        <div v-if="searched == false">
            <h1 style="margin-top: 200px;">学者检索</h1>
            <div>
                <div class="search" id="searchBox" :style="colorVar" @mouseout="changeColor" @mouseleave="changeColor2">
                    <div
                        style="display: inline-block; width: 100px; font-size: 18px; text-align: center; vertical-align: middle;">
                        <span>姓名</span>
                    </div>
                    <el-divider direction="vertical"></el-divider>
                    <input value="请输入学者姓名" onFocus="if(value==defaultValue){value='';this.style.color='#000'}"
                        onBlur="if(!value){value=defaultValue; this.style.color='#999'}" style="color:#999"
                        class="input" name="searchInput" v-model="searchInput" />
                    <img src="@/assets/icon/clear.svg" class="clear_icon" @click="clear" id="clear" />
                    <img src="@/assets/icon/search.svg" class="search_icon" @click="search" />
                    <!--
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
                            </div>-->
                </div>
            </div>
        </div>
        <div class="searchBox" v-else>
            <h1>学者检索</h1>
            <div>
                <div class="search" id="searchBox" :style="colorVar" @mouseout="changeColor" @mouseleave="changeColor2">
                    <div
                        style="display: inline-block; width: 100px; font-size: 18px; text-align: center; vertical-align: middle;">
                        <span>姓名</span>
                    </div>
                    <el-divider direction="vertical"></el-divider>
                    <input value="请输入学者姓名" onFocus="if(value==defaultValue){value='';this.style.color='#000'}"
                        onBlur="if(!value){value=defaultValue; this.style.color='#999'}" style="color:#999"
                        class="input" name="searchInput" v-model="searchInput" />
                    <img src="@/assets/icon/clear.svg" class="clear_icon" @click="clear" id="clear" />
                    <img src="@/assets/icon/search.svg" class="search_icon" @click="search" />
                    <!--
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
                </div>-->
                </div>
            </div>
            <el-divider></el-divider>
            <p style="float: left; margin-top: 0px;">为您检索到如下结果</p>
            <div style="clear: both;"></div>
            <div v-for="item in results" style="display: inline-block;">
                <scholar-card :id="item.id" :name="item.name" :orgs="item.orgs" :n_pubs="item.n_pubs"
                    :n_citation="item.n_citation"></scholar-card>
            </div>
            <div style="height: 50px;"></div>
            <div style="height: 50px;"></div>
        </div>
    </div>

</template>
<script>
import ScholarCard from "../components/scholarCard.vue";
import search from '@/components/searchForScholar.vue'
export default {
    components: {
        ScholarCard, search
    },
    data() {
        return {
            searched: false,
            result: [

            ],
            color: '',
            searchInput: "",
            results: [
            ],
            empty: true,
            radius: 8,
            color1: '',
            color2: '',
            deepColor: '',
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
            let formData = new FormData();
            formData.append('scholar_name', this.searchInput);

            this.$axios({
                method: "post" /* 指明请求方式，可以是 get 或 post */,
                url: "/author_name_search" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
                data: formData,
            })
                .then((res) => {

                    this.results = res.data.msg;
                    this.searched = true
                })
                .catch((err) => {
                    console.log(err); /* 若出现异常则在终端输出相关信息 */
                });
        },

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
h1 {
    font-family: 'mama';
    font-size: 30px;
    margin: 20px;
}

.searchBox {
    width: 72%;
    margin: auto;
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