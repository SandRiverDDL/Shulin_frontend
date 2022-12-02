<template>
    <div class>
        <div class="bg"></div>

        <div class="main">
            <div class="title">
                <h1>国内外垃圾分类模式综述</h1>
            </div>
            <div class="author">
                姚蔚，金鑫，吴蒨蒨
            </div>
            <el-divider></el-divider>
            <el-row>
                <el-col :span="8">
                    <div class="data"><img src="../assets/icon/read.svg" />
                        <span>阅读量：10</span>
                    </div>

                </el-col>
                <el-col :span="8">
                    <div class="data" @click="collectIt">
                        <img :src="collectIcon" :style="styleVar" @mouseover="changeTime" />
                        <span>收藏量：5</span>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="data" @click="likeIt">
                        <img :src="like" :style="styleVar" @mouseover="changeTime" />
                        <span>点赞量：3</span>
                    </div>
                </el-col>
            </el-row>
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
                        <div class="copyBox"><img src="../assets/icon/copy.svg" class="copy" @click="doCopy(index)" />
                        </div>
                    </el-col>
                </el-row>
            </el-dialog>
            <el-row :gutter="20">
                <el-col :span="2">
                    <div style="color: #fff;">1</div>
                </el-col>
                <el-col :span="4" v-for="(item, index) in icons">

                    <div class="action" @mouseover="changeToWhite(index)" @mouseleave="changeToBlack(index)"
                        v-if="(index === 2)" @click="citeDialogVisible = true">
                        <img :src=item.img />
                        <b>{{ item.name }}</b>
                    </div>
                    <div class="action" @mouseover="changeToWhite(index)" @mouseleave="changeToBlack(index)" v-else><img
                            :src=item.img /><b>{{ item.name }}</b>
                    </div>
                </el-col>

            </el-row>
        </div>

    </div>

</template>
<script>
import unlike from '@/assets/icon/like.png'
import like from '@/assets/icon/liked.png'
import uncollect from '@/assets/icon/collect.png'
import collect from '@/assets/icon/collected.png'
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
export default {
    data() {
        return {
            activeName: 'second',
            like: unlike,
            liked: like,
            unliked: unlike,
            collectIcon: uncollect,
            collected: collect,
            uncollected: uncollect,
            time: 0,
            citeDialogVisible: false,
            icons: [
                {
                    img: download_black,
                    img1: download_black,
                    img2: download_white,
                    name: "下载资源"
                },
                {
                    img: read_black,
                    img1: read_black,
                    img2: read_white,
                    name: "在线阅读"
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
            standards: [
                {
                    name: "GB/T 7714",
                    content: "[1]郭田勇, 孙光宇. 新冠疫情对我国经济的影响与应对之策[J]. 银行家, 2020(4):3."
                },
                {
                    name: "MLA",
                    content: '[1]郭田勇, and 孙光宇. "新冠疫情对我国经济的影响与应对之策." 银行家 4(2020):3.'
                },
                {
                    name: "APA",
                    content: '[1]郭田勇, & 孙光宇. (2020). 新冠疫情对我国经济的影响与应对之策. 银行家(4), 3.'
                }
            ]
        };
    },
    computed: {
        styleVar() {
            return {
                '--time': this.time + 's'
            }
        }
    },
    methods: {
        likeIt: function () {
            if (this.like == this.unliked) {
                this.like = this.liked
            }
            else {
                this.like = this.unliked
            }
        },
        collectIt: function () {
            if (this.collectIcon == this.collected) {
                this.collectIcon = this.uncollected
            }
            else {
                this.collectIcon = this.collected
            }
        },
        changeTime() {
            this.time = 1;
        },
        changeToWhite(index) {
            this.icons[index].img = this.icons[index].img2
        },
        changeToBlack(index) {
            this.icons[index].img = this.icons[index].img1
        },
        doCopy: function (index) {
            var success;
            this.$copyText(this.standards[index].content).then(function (e) {
                success = true;
                console.log(e)
            }, function (e) {
                success = false
                console.log(e)
            })
            if (success = true) {
                this.$notify({
                    title: '复制成功',
                    message: '',
                    type: 'success'
                });
            }
            else {
                this.$notify.error({
                    title: '错误',
                    message: '这是一条错误的提示消息'
                });
            }
        }
    }
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

.bg {
    width: 100%;
    height: 100%;
    /**宽高100%是为了图片铺满屏幕 **/
    z-index: -1;
    /*
    position: absolute;
    background: rgb(250, 250, 250);
    background: linear-gradient(90deg, rgba(250, 250, 250, 1) 18%, rgba(154, 217, 255, 1) 70%);
*/
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
    transition: .3s;
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
        opacity: 0;
        -webkit-transform: scale(0);
    }

    45% {
        opacity: 1;
        -webkit-transform: scale(1.2);
    }

    90% {
        -webkit-transform: scale(1);
    }
}

.el-row img {
    height: 30px;
    vertical-align: middle;
    animation: back_scale_1 var(--time);
    margin-top: 2px;
}

.el-row img:hover {
    animation-duration: 1s;
}

.el-row img:active {
    animation: none;
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
    width: 60%;
    left: 20%;
    position: absolute;
    /*box-shadow: 0px 0px 20px rgb(110, 108, 108);
    border-radius: 15px;*/
}


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
</style>