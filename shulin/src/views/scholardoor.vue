<template>
    <div>
        <navi></navi>
        <div class="message">
            <el-row type="flex" style="margin-bottom: 20px;">
                <el-col :span="18" :offset="3">
                    <div id="name" style="font-size:30px;">{{ message.name }}</div>
                </el-col>
            </el-row>
            <el-row type="flex" v-if="this.org != ''">
                <el-col :span="18" :offset="3">
                    <div id="id" style="margin-top: 2px">
                        {{ message.org }}
                    </div>
                </el-col>
            </el-row>
            <el-divider content-position="center"></el-divider>
            <el-row type="flex" class="data">
                <el-col :span="8">
                    <div id="n_pubs">
                        <img src="../assets/icon/论文数.svg" />
                        论文数:{{ message.n_pubs }}
                    </div>
                </el-col>
                <el-col :span="8">
                    <div id="n_citation">
                        <img src="../assets/icon/引用数.svg" />
                        引用数:{{ message.n_citation }}
                    </div>
                </el-col>
                <el-col :span="8">
                    <div id="h_index">
                        <img src="../assets/icon/h指数.svg" />
                        h指数:{{ message.h_index }}
                    </div>
                </el-col>
            </el-row>
            <el-divider content-position="center"></el-divider>
            <el-row v-for="item in paper_show" style="text-align: left;margin-bottom: 20px;">
                <el-col :span="8">
                    <paper-card :id="item.i"></paper-card>
                </el-col>
            </el-row>
            <el-row style="text-align: left">
                <el-col :span="8">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="queryInfo.pagenum" :page-size="queryInfo.pagesize" :page-sizes="[10, 30, 50]"
                        layout="total, sizes, prev, pager, next ,jumper" :total="total">

                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router'
import paperCard from '../components/paperCard2.vue'
import Navi from "@/components/navi";
export default {
    components: { RouterLink, paperCard, Navi },
    mounted() {
        this.getScholarInfo()
    },
    data() {
        return {
            scholarId: this.$route.query.scholarId,
            // 总条数
            total: 0,
            //参数
            queryInfo: {
                query: '',
                // 当前页数
                pagenum: 1,
                // 显示一页多少条数据
                pagesize: 10
            },
            message: {
                name: "",
                n_pubs: "",
                n_citation: "",
                h_index: "",
                org: ""
            },
            paper: [
            ],
            paper_show: [],
        };
    },
    methods: {
        //监听 pagesize 改变的事件
        handleSizeChange(newsize) {
            //这里conso 选中第几页 最新的值
            console.log(newsize)
            //最新的条数（newsize）赋值给 动态的 pagesie
            this.queryInfo.pagesize = newsize
            //获取到最新一页显示的数据  重新发送axios请求 这里是封装好的请求方法
            this.getShow()
        },


        // 监听 页码值 改变的事件
        handleCurrentChange(newPage) {
            console.log(newPage)
            //把最新的页码（newPage）赋值给 动态的 pagenum 
            this.queryInfo.pagenum = newPage
            //获取到最新显示的页码值  重新发送axios请求 这里是封装好的请求方法
            this.getShow()
        },
        getShow() {
            this.paper_show.length = 0;
            let i = 0
            var x = this.paper.length, y = this.queryInfo.pagesize, c = this.paper.length - (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize;
            var min = x < y ? (x < c ? x : c) : (y < c ? y : c);
            this.paper_show.length = min
            for (i = 0; i < this.queryInfo.pagesize && i + (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize < this.paper.length; i++) {
                this.paper_show[i] = this.paper[i + (this.queryInfo.pagenum - 1) * this.queryInfo.pagesize];
            }
        },
        getPaper() {
            this.total = this.paper.length
        },
        getScholarInfo() {
            let formData = new FormData();
            formData.append('scholar_id', this.scholarId);

            this.$axios({
                method: "post" /* 指明请求方式，可以是 get 或 post */,
                url: "/author_id_search" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
                data: formData,
            })
                .then((res) => {
                    this.paper = res.data.msg[0].pubs;
                    this.getPaper()
                    this.getShow()
                    this.message.n_pubs = res.data.msg[0].n_pubs;
                    this.message.n_citation = res.data.msg[0].n_citation;
                    this.message.h_index = res.data.msg[0].h_index;
                    this.message.name = res.data.msg[0].name;
                    this.message.org = res.data.msg[0].orgs[0]
                })
                .catch((err) => {
                    console.log(err); /* 若出现异常则在终端输出相关信息 */
                });
        }
    },

}
</script>
<style>
.el-divider--vertical {
    display: inline-block;
    width: 1px;
    height: 42px;
    margin: 0 8px;
    vertical-align: bottom;
    position: relative;
}

.message {
    width: 60%;
    left: 20%;
    position: absolute;
}

.data {
    cursor: pointer;
}

.data img {
    height: 30px;
    vertical-align: middle;
}
</style>