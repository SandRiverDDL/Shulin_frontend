<template>
    <div id="scholarCard" class="box">
        <el-avatar :size="80" :src="avatar" class="avatar"></el-avatar>
        <div style="width: 30px; display: inline-block;"></div>
        <div class="content">
            <div class="name">
                <p>{{ name }}</p>
            </div>
            <div class="org">
                <p>{{ orgs }}</p>
            </div>
            <div class="dataName">
                <span>发表文章:</span>
            </div>
            <div style="width: 10px; display: inline-block;"></div>
            <div class="data">
                <span>{{ n_pubs }}</span>
            </div>
            <div class="dataName">
                <span>被引次数:</span>
            </div>
            <div style="width: 10px; display: inline-block;"></div>
            <div class="data">
                <span>{{ n_citation }}</span>
            </div>
            <div class="fieldName">
                <span>研究领域:</span>
            </div>
            <div style="width: 10px; display: inline-block;"></div>
            <div class="field">
                <span>{{ researchIntrest }}</span>
            </div>
        </div>
        <div class="btn">
            <el-button type="primary" round>查看主页</el-button>
        </div>
        <el-divider></el-divider>
    </div>
</template>
<script>
import cat from '@/assets/avatar/fish.webp'
export default {
    props: ['id'],
    data() {
        return {
            myId: this.id,
            avatar: cat,
            name: "丁真",
            orgs: "蚌埠学院",
            position: "5555",
            researchIntrest: "data mining",
            n_pubs: 1217,
            n_citation: 191,
            pubs_i: "53e9b9fbb7602d",
        }
    },
    methods: {
        getInfoById() {

        }
    }
}
</script>
<style scoped>
.box {
    width: 500px;
    height: 150px;
    margin-top: 30px;
    padding: 15px;
}

.avatar {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(124, 124, 124, 0.7);
}

.content {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    width: 250px;
    height: 150px;
}

.btn {
    display: inline-block;
    vertical-align: middle;
    width: 100px;

    height: 50px;
}

.name {
    width: 100%;
    height: 30px;
    margin-top: -10px;
    font-size: 25px;
    text-align: left;
    font-weight: 500;
}

.org {
    margin-top: 10px;
    height: 20px;
    text-align: left;
    font-size: 15px;
}

.data {
    margin-top: 10px;
    display: inline-block;
    width: 50px;
    font-size: 15px;
    text-align: left
}

.dataName {
    margin-top: 10px;
    display: inline-block;
    width: 65px;
    font-size: 15px;
    text-align: left;
    color: rgb(151, 151, 151);
}

.fieldName {
    margin-top: 10px;
    text-align: left;
    display: inline-block;
    width: 65px;
    font-size: 15px;
    color: rgb(151, 151, 151);

}

.field {
    margin-top: 10px;
    font-size: 15px;
    text-align: left;
    display: inline-block;
    width: 175px;
}
</style>