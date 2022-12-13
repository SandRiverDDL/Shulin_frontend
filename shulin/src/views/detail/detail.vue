<template>
    <div>
        <div class="backBoxBox" v-if="showbt = true">
            <div class="backBox" id="backBox">
                <img src="../../assets/icon/up.svg" class="menu" @click="backTop" />
            </div>
        </div>
        <div class="collectBoxBox" v-if="showbt = true">
            <div class="collectBox" id="collectBox" @click="collectIt">
                <div class="data"><img :src="collectIcon" class="menu" />
                </div>
            </div>
        </div>
        <div class="menuBoxBox" v-if="showbt = true">
            <div class="menuBox" id="menuBox">
                <img src="../../assets/icon/menu_out.svg" v-if="showMenu === false" class="menu" />
                <img src="../../assets/icon/menu_in.svg" v-else class="menu" />
            </div>
        </div>
        <div class="moreBoxBox" :style="styleVar" @click="changeTime2">
            <div class="moreBox">
                <img src="../../assets/icon/more.svg" class="menu" />
            </div>
        </div>
        <div class="aside"></div>
        <div class="main">
            <div class="bg">
            </div>
            <div class="info">

                <div class="title">
                    <h1>国内外垃圾分类模式综述</h1>
                </div>
                <div class="author">
                    姚蔚，金鑫，吴蒨蒨
                </div>
                <el-divider></el-divider>
                <el-row>
                    <el-col :span="4">
                        <b style="float: left;">摘要</b>
                    </el-col>
                    <el-col :span="20">
                        <div class="keyword">本文较全面地介绍了知网,它是一个可用于自然语言处理的知识系统的知网,现已在因特网上公开
                            发布.它的知识词典现包含汉语词语5万条和对应的概念6万多条,以及与之对应的英语词语5
                            5万条和概念7万多条.本文涉及有关建立网状关系语义的一些重要问题.作者也就知网对汉语研究的影响和启迪进行了较多的讨论,关键是如何建立汉语的语义句 法.</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4"><b style="float: left;">关键词</b></el-col>
                    <el-col :span="20">
                        <div class="keyword">知网,概念,概念特征,语汇语用学,计算语义学</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4"><b style="float: left;">DOI</b></el-col>
                    <el-col :span="20">
                        <div class="keyword">10.3969/j.issn.1007-8274.2001.01.003</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4"><b style="float: left;">来源期刊</b></el-col>
                    <el-col :span="20">
                        <div class="keyword">中国市场. 2022,(27)</div>
                    </el-col>
                </el-row>
                <el-dialog title="引用" :visible.sync="citeDialogVisible" width="65%" center>
                    <el-row v-for="(item, index) in standards">
                        <el-col :span="3">
                            <div style="padding: 9px;"><b class="standard">{{ item.name }}</b></div>
                        </el-col>
                        <el-col :span="18">
                            <div class="reference">{{ item.content }}</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="copyBox"><img src="../../assets/icon/copy.svg" class="copy"
                                    @click="doCopy(index)" />
                            </div>
                        </el-col>
                    </el-row>
                </el-dialog>
                <el-row :gutter="40">
                    <el-col :span="2">
                        <div style="color: #fff;">1</div>
                    </el-col>
                    <el-col :span="5" v-for="(item, index) in icons">
                        <div class="action" @mouseover="changeToWhite(index)" @mouseleave="changeToBlack(index)"
                            v-if="(index === 1)" @click="citeDialogVisible = true">
                            <img :src=item.img />
                            <b>{{ item.name }}</b>
                        </div>
                        <div class="action" @mouseover="changeToWhite(index)" @mouseleave="changeToBlack(index)" v-else>
                            <img :src=item.img /><b>{{ item.name }}</b>
                        </div>
                    </el-col>
                </el-row>
                <el-card class="box-card" shadow="never">
                    <div slot="header" class="clearfix">
                        <b style="float: left;">全部资源</b>
                        <div style="clear: both;"></div>
                    </div>
                    <el-row :gutter="40">
                        <el-col :span="10" v-for="item in resource">
                            <img :src=item.img class="resource" />
                            <a class="resource">{{ item.name }}</a>
                        </el-col>
                    </el-row>
                </el-card>
            </div>
            <el-divider></el-divider>
            <router-link to="/detail"><b style="float: left; font-size: 20px;" class="table">数据分析</b></router-link>

            <b style="float: left; font-size: 20px; margin-left: 10px; margin-top: 3px;">/</b>
            <router-link to="/detail/comments"><b style="float: left; font-size: 20px; margin-left: 10px;"
                    class="table">评论</b></router-link>
            <span style="float: left; font-size: 15px; margin: 8px;">{{ commentNum }}</span>
            <div style="clear: both;"></div>
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
import unlike from '@/assets/icon/like.png'
import like from '@/assets/icon/liked.png'
import uncollect from '@/assets/icon/collect.svg'
import collect from '@/assets/icon/collected.svg'
import download_black from '@/assets/icon/download.svg'
import download_white from '@/assets/icon/下载.svg'
import read_black from '@/assets/icon/book.svg'
import read_white from '@/assets/icon/book_white.svg'
import import_black from '@/assets/icon/资料.svg'
import import_white from '@/assets/icon/import_white.svg'
import report_black from '@/assets/icon/report.svg'
import report_white from '@/assets/icon/report_white.svg'
import share_black from '@/assets/icon/share.svg'
import share_white from '@/assets/icon/share_white.svg'
import wanfang from '@/assets/icon/link.svg'
import { RouterView } from 'vue-router'
export default {
    data() {
        return {
            id: 1,
            activeName: "second",
            like: unlike,
            liked: like,
            unliked: unlike,
            collectIcon: uncollect,
            collected: collect,
            uncollected: uncollect,
            time: 0,
            time2: 0,
            deg: 450,
            deg0: 0,
            deg1: 450,
            citeDialogVisible: false,
            showMenu: false,
            showBt: true,
            commentNum: 2,
            icons: [
                {
                    img: download_black,
                    img1: download_black,
                    img2: download_white,
                    name: "下载资源"
                },
                {
                    img: import_black,
                    img1: import_black,
                    img2: import_white,
                    name: "引用"
                },
                {
                    img: report_black,
                    img1: report_black,
                    img2: report_white,
                    name: "报错"
                },
                {
                    img: share_black,
                    img1: share_black,
                    img2: share_white,
                    name: "分享"
                }
            ],
            resource: [
                {
                    img: wanfang,
                    name: "万方数据"
                },
                {
                    img: wanfang,
                    name: "万方数据"
                },
                {
                    img: wanfang,
                    name: "万方数据"
                }
            ],
            standards: [
                {
                    name: "GB/T 7714",
                    content: "[1]郭田勇, 孙光宇. 新冠疫情对我国经济的影响与应对之策[J]. 银行家, 2020(4):3."
                },
                {
                    name: "MLA",
                    content: "[1]郭田勇, and 孙光宇. \"新冠疫情对我国经济的影响与应对之策.\" 银行家 4(2020):3."
                },
                {
                    name: "APA",
                    content: "[1]郭田勇, & 孙光宇. (2020). 新冠疫情对我国经济的影响与应对之策. 银行家(4), 3."
                }
            ],

        };
    },
    computed: {
        styleVar() {
            return {
                "--time": this.time + "s",
                "--time2": this.time2 + "s",
                "--deg": this.deg + "deg",
                "--deg0": this.deg0 + "deg",
                "--deg1": this.deg1 + "deg",
            };
        }
    },
    mounted() {
        window.addEventListener("scroll", this.showbtn, true);
        this.getInfo()
    },
    methods: {
        likeIt: function () {
            if (this.like == this.unliked) {
                this.like = this.liked;
            }
            else {
                this.like = this.unliked;
            }
        },
        collectIt: function () {
            if (this.collectIcon == this.collected) {
                this.collectIcon = this.uncollected;
            }
            else {
                this.collectIcon = this.collected;
            }
        },
        changeTime() {
            this.time = 1;
        },
        backTop() {
            var timer = setInterval(function () {
                let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                let ispeed = Math.floor(-osTop / 5);
                document.documentElement.scrollTop = document.body.scrollTop =
                    osTop + ispeed;
                this.isTop = true;
                if (osTop === 0) {
                    clearInterval(timer);
                }
            }, 3);
        },
        changeTime2() {
            this.time2 = 1;
            if (this.deg == 0) {
                this.deg0 = 0;
                this.deg1 = 450;
                this.deg = 450;
            }
            else {
                this.deg0 = 450;
                this.deg1 = 0;
                this.deg = 0;
            }
            var box = document.getElementById("menuBox");
            var bt = document.getElementById("backBox");
            var collect = document.getElementById("collectBox");
            if (this.showBt == true) {
                this.showBt = false;
                box.style.right = "50px";
                box.style.opacity = "0";
                bt.style.bottom = "50px";
                bt.style.opacity = "0";
                collect.style.bottom = "50px";
                collect.style.opacity = "0";
            }
            else {
                box.style.right = "100px";
                box.style.opacity = "1";
                bt.style.bottom = "100px";
                bt.style.opacity = "1";
                collect.style.bottom = "150px";
                collect.style.opacity = "1";
                this.showBt = true;
            }
        },
        changeToWhite(index) {
            this.icons[index].img = this.icons[index].img2;
        },
        changeToBlack(index) {
            this.icons[index].img = this.icons[index].img1;
        },
        doCopy: function (index) {
            var success;
            this.$copyText(this.standards[index].content).then(function (e) {
                success = true;
                console.log(e);
            }, function (e) {
                success = false;
                console.log(e);
            });
            if (success = true) {
                this.$notify({
                    title: "复制成功",
                    message: "",
                    type: "success"
                });
            }
            else {
                this.$notify.error({
                    title: "错误",
                    message: "这是一条错误的提示消息"
                });
            }
        },
        getInfo() {
            this.$axios({
                method: "post",
                url: "/get_paper_info",
                data: {
                    paper_id: "1000"
                },
            })
                .then((res) => {
                    alert(res.data.msg)
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
    components: { RouterView }
};
</script>
<style scoped>
.title {
    margin-top: 10px;
}

.title h1 {
    font-family: "mama";
    font-size: 45px;
    color: #000000;
}

.data {
    cursor: pointer;
}

.abstract {
    float: left;
}

.keyword {
    float: left;
}

#building {
    background-image: url('@/assets/background/bg-5.svg');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0 100%;
}

.sideMenu {
    width: 10%;
    display: inline-block;

}

.bg {
    position: fixed;
    opacity: 0.7;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0;
    margin-bottom: -10px;
}

.el-row {
    margin-bottom: 20px;
}

.action {
    margin-top: 20px;
    margin-bottom: 10px;
    border-style: solid;
    border-width: 3px;
    border-color: #000000;
    border-radius: 6px;
    min-height: 36px;
    color: #000000;
    cursor: pointer;
    transform: scale(1);
}

.action::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0 0 0 10px royalblue;
    opacity: 0;
    transition: .3s;
}

.action:hover {
    color: royalblue;
    border-color: currentColor;
    filter: brightness(1.1);
}

.action:active {
    filter: brightness(.9);
}

.action:active::after {
    transition: 0s;
    box-shadow: none;
    opacity: 0.6;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

@keyframes back_scale_1 {
    0% {
        -webkit-transform: scale(1);
    }

    30% {
        -webkit-transform: scale(0.8);
    }

    60% {
        -webkit-transform: scale(1.2);
    }

    100% {
        -webkit-transform: scale(1);
    }
}

.el-row span {
    vertical-align: middle;
    margin-left: 5px;
}

.action b {
    vertical-align: middle;
    margin-left: 2px;
}

.action:hover {
    background-color: #003dff;
    color: #f9fafc;
    border-color: #4281ff;
}

.main {
    display: inline-block;
    width: 60%;
    margin: auto;
    /*box-shadow: 0px 0px 20px rgb(146, 146, 146);*/
    border-radius: 15px;
    background-color: #fff;
}

.info {}

/deep/.el-dialog.el-dialog--center {
    border-radius: 8px;
    position: absolute;
    /* 设置为绝对定位，使下方的top和left生效  */
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/deep/.el-dialog__title {
    font-family: "mama";
    font-size: 25px;
}


.standard {
    font-size: 17px;
}

.reference {
    font-size: 17px;
    background-color: rgb(250, 250, 250);
    border-radius: 2px;
    border-color: rgb(240, 240, 240);
    border-width: 1px;
    border-style: solid;
    padding: 8px;
}

.copy {
    height: 20px !important;
    cursor: pointer;
}

.copyBox {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-top: 8px;
}

.resource {
    cursor: pointer;
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    color: #000000;
    vertical-align: middle;
    text-align: center;
}


.menuBox {
    position: fixed;
    right: 100px;
    bottom: 50px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    transition: 0.7s;
}

.backBox {
    position: fixed;
    cursor: pointer;
    right: 50px;
    bottom: 100px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    transition: 0.7s;
}

.menuBoxBox :hover {
    background-color: #f2f6fc;
    cursor: pointer;
}

.aside {
    width: 0px;
    background-color: #dddddd;
    height: 500px;
    position: fixed;
    left: 0;
    top: 10%;
}

.menu {
    height: 25px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.moreBox {
    position: fixed;
    right: 50px;
    bottom: 50px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #003dff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    animation: turnZ var(--time2);
    transform: rotateZ(var(--deg));
}


.moreBox:active {
    animation-duration: 0.7s;
    animation: none;
}

@keyframes turnZ {

    0% {
        transform: rotateZ(var(--deg0));
    }

    90% {
        transform: rotateZ(var(--deg1));
    }

}

.moreBoxBox :hover {
    background-color: #0434d1;
    cursor: pointer;
}

.collectBox {
    position: fixed;
    right: 50px;
    bottom: 150px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    transition: 0.7s;
}

.collectBox img {
    animation: back_scale_1 var(--time);
}

.collectBox img:hover {
    animation-duration: 0.7s;
    animation: none;
}

a {
    font-weight: bold;
    color: #2c3e50;
}

a.router-link-exact-active {
    color: #003dff;
}

.el-row img {
    height: 30px;
    vertical-align: middle;
    animation: back_scale_1 var(--time);
    margin-top: 2px;
}

.el-row img:hover {}

.el-row img:active {
    animation-duration: 0.7s;
    animation: none;
}
</style>