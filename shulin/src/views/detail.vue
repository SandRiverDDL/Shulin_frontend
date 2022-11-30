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
            <div style="clear: both;"></div>
            <el-row>
                <el-col :span="8">
                    <div class="data"><img src="../assets/icon/read.svg" />
                        <span>阅读量：10</span>
                    </div>

                </el-col>
                <el-col :span="8">
                    <div class="data">
                        <img src="../assets/icon/collected.png" />
                        <span>收藏量：5</span>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="data" @click="likeIt">
                        <img :src="like" />
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
                    <div class="keyword">知网；概念；概念特征；语汇语用学；计算语义学</div>
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
            <div style="height: 70px;"></div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="评论" name="first">评论</el-tab-pane>
                <el-tab-pane label="相关文献" name="second">相关文献</el-tab-pane>
            </el-tabs>
        </div>

    </div>

</template>
<script>
import unlike from '@/assets/icon/like.png'
import liked from '@/assets/icon/like.svg'
export default {
    data() {
        return {
            activeName: 'first',
            like: unlike,
            liked: liked,
            unliked: unlike
        };
    },
    methods: {
        likeIt: function () {
            if (this.like == this.unliked) {
            }
        }
    }
};
</script>
<style>
.title {
    margin-top: 10px;
}

.title h1 {
    font-family: "mama";
    font-size: 45px;
}

.data {
    cursor: pointer;
}

.author {}

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

.el-row img {
    height: 30px;
    vertical-align: middle;
}

.el-row span {
    vertical-align: middle;
    margin-left: 5px;
}

.main {
    width: 80%;
    left: 10%;
    position: absolute;
    /*box-shadow: 0px 0px 20px rgb(110, 108, 108);
    border-radius: 15px;*/
}
</style>