<template>
    <div class="search">
        <h1>学者检索</h1>
        <search></search>
        <el-divider></el-divider>
        <p style="float: left; margin-top: 0px;">为您检索到如下结果</p>
        <div style="clear: both;"></div>
        <div v-for="item in result" style="display: inline-block;">
            <scholar-card :id="item.id"></scholar-card>
        </div>
        <div style="height: 50px;"></div>
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
        <div style="height: 50px;"></div>
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
            result: [
                {
                    id: 0
                },
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
            ]
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

.search {
    width: 72%;
    margin: auto;
}
</style>