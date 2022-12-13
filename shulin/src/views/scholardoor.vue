<template>
<div>
<div class="message">
    <el-row type="flex" style="margin-bottom: 20px;">
        <el-col :span="2" :offset="11">
            <div id="name" style="font-size:30px;">{{message.name}}</div>
        </el-col>
    </el-row>
    <el-row type="flex">
        <el-col :span="4" :offset="10">
            <div id="id" style="margin-top: 2px">
                Scholarid:{{message.scholar_id}}
            </div>
        </el-col>
    </el-row>
    <el-divider content-position="center"></el-divider> 
    <el-row type="flex" class="data">
        <el-col :span="8" >
            <div  id="n_pubs">
                <img src="../assets/icon/论文数.svg"/>
                论文数:{{message.n_pubs}}
            </div>
        </el-col>
        <el-col :span="8" >
            <div id="n_citation">
                <img src="../assets/icon/引用数.svg"/>
                引用数:{{message.n_citation}}   
            </div>
        </el-col>
        <el-col :span="8">
            <div id="h_index">
                <img src="../assets/icon/h指数.svg"/>
                h指数:{{message.h_index}}
            </div>
        </el-col>
    </el-row>
    <el-divider content-position="center"></el-divider>
    <el-row v-for="(item,index) in paper" style="text-align: left;margin-bottom: 20px;">
        <el-col :span="8">
            <router-link to="/detail" style="color:blue">{{item.title}}</router-link>
            <div style="font-size:5px">{{item.year}} - {{item.name}} - {{item.venues}} - 被引量:{{item.n_citation}}</div>
        </el-col>
    </el-row>
    <el-row style="text-align: left"> 
        <el-col :span="8">
            <el-pagination   
            background 
            layout="prev, pager, next ,jumper" 
            :current-page.sync="curpage"
	        @size-change="handleSizeChange"
	        @current-change="handleCurrentChange"
	        :page-size="pagesize"
            :total="total"
            >
            </el-pagination>
        </el-col>
    </el-row>
</div>
</div>
</template>
<script>
import { RouterLink } from 'vue-router'
export default { 
    components: { RouterLink },
    data() {
        return {
            total:500,
            curpage: 1, 
            pagesize: 10,
            message: {
                name: "张三",
                scholar_id: "101",
                n_pubs: "2",
                n_citation: "3",
                h_index: "1"
            },
            paper: [
                {
                    paper_id: 1,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 2,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 3,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 4,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 5,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 6,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 7,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 8,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 9,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 10,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 10,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 10,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 10,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 10,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 10,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 10,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                {
                    paper_id: 10,
                    title:'国内外垃圾分类综述',
                    name:'姚蔚',
                    year:'2022',
                    venues:"《中国市场》",
                    n_citation: "3",
                },
                
            ]
        };
    },
    methods: {
        getData(){
        	alert(this.curpage)
		},
        handleSizeChange(val) {
            this.pagesize = val;
            this.curpage = 1;
            this.getData()
        },
        handleCurrentChange(val) {
            this.curpage = val;
            this.getData()
        },
    },
   
}
</script>
<style>
.el-divider--vertical{
  display:inline-block;
  width:1px;
  height:42px;		
  margin:0 8px;
  vertical-align:bottom;
  position:relative;
}
.message {
    width: 60%;
    left: 20%;
    position: absolute;
}
.data {
    cursor: pointer;
}
.data img{
    height: 30px;
    vertical-align: middle;
}
</style>