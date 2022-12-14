<template>
    <div id="scholarCard" class="box">
        <el-avatar :size="80" class="avatar" @click="gotoScholar">{{ this.name }}</el-avatar>
        <div style="width: 30px; display: inline-block;"></div>
        <div class="content">
            <div class="name">
                <p @click="gotoScholar">{{ name }}</p>
            </div>
            <div class="org">
                <p v-if="this.orgs[0] != ''">{{ orgs[0] }}</p>
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
            <div style="width: 10px; display: inline-block;"></div>
        </div>
        <div class="btn">
            <el-button type="primary" round @click="gotoScholar">查看主页</el-button>
        </div>
        <el-divider></el-divider>
    </div>
</template>
<script>
import cat from '@/assets/avatar/fish.webp'
export default {
    props: ['id', 'orgs', 'n_pubs', 'n_citation', 'name'],
    data() {
        return {
            myId: this.id,
        }
    },
    methods: {
        gotoScholar() {
            this.$router.push({ path: '/door', query: { scholarId: this.id } });
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

p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
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