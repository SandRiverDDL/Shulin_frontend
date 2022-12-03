<template>
<div>
<div class="message">
    <el-row type="flex" style="margin-bottom: 20px;text-align: left">
        <el-col :span="1" :offset="3" ><div id="name" style="font-size:30px;font-family:SimHei;font-weight:500">{{message.name}}</div></el-col>
        <el-col :span="2" :offset="3"> <div id="id" style="border-style:solid;border-width:1px;background:#DDDDDD;margin-top: 2px">Scholarid:{{message.scholar_id}}</div></el-col>
    </el-row>
    <el-row type="flex" style="text-align: left;margin-bottom: 30px">
        <el-col :span="1" :offset="3" >
            <div style="margin-bottom: 6px">论文数</div>
            <div id="h_index" >{{message.n_pubs}}</div>
        </el-col>
        <el-divider direction="vertical"></el-divider>
        <el-col :span="1" >
            <div style="margin-bottom:6px">引用数</div>
            <div id="h_index">{{message.n_citation}}</div>
        </el-col>
        <el-divider direction="vertical"></el-divider>
        <el-col :span="1">
            <div style="margin-bottom:6px">h指数</div>
            <div id="h_index">{{message.h_index}}</div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="18" :offset="3" >
            <el-divider content-position="center"></el-divider>
        </el-col>  
    </el-row>
    <el-row v-for="(item,index) in paper" style="text-align: left;margin-bottom: 20px;">
        <el-col :span="8" :offset="3">
            <router-link to="/detail" style="color:blue">{{item.title}}</router-link>
            <div style="font-size:5px">{{item.year}} - {{item.name}} - {{item.venues}} - 被引量:{{item.n_citation}}</div>
        </el-col>
    </el-row>
    <el-row style="text-align: left"> 
        <el-col :span="8" :offset="3">
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
import { RouterLink } from 'vue-router';

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
</style>