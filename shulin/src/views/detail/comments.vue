<template>
    <div>
        <div style="clear: both;"></div>
        <div class="commentBox">
            <div v-for="(item, index) in comments">
                <div class="singleBox">
                    <div class="avatar">
                        <el-avatar :size="45" :src="item.avatar"></el-avatar>
                    </div>
                    <div class="content">
                        <b class="name">
                            {{ item.name }}
                        </b>
                        <p>{{ item.content }}</p>
                        <span class="time">{{ item.time }}</span>
                        <img src="@/assets/icon/thumb.svg" class="thumb" />
                        <span>{{ }}</span>
                        <span class="time">回复</span>
                        <el-divider></el-divider>
                    </div>
                    <div style="clear: both;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import jbcat from '@/assets/avatar/avatar.png'
import fish from '@/assets/avatar/fish.webp'
export default {
    data() {
        return {
            comments: [
                {
                    avatar: jbcat,
                    name: "cat",
                    content: "我和我的动物朋友",
                    pro: true,
                    time: "2022年12月12日",
                    likeNum: 10,
                    com: [{
                        comavatar: fish,
                        comname: "fish",
                        comcontent: "早上有小虫",
                        compro: true,
                        to: "cat",
                    }]
                },
                {
                    avatar: fish,
                    name: "fish",
                    content: "早上有小虫",
                    pro: false,
                    time: "2022年12月12日",
                    likeNum: 10,
                    com: [{
                        comavatar: jbcat,
                        comname: "fish",
                        comcontent: "早上有小虫",
                        compro: true,
                        to: "cat",
                    }]
                }
            ]
        }
    },
    computed: {

    }
}
</script>
<style scoped>
.commentBox {
    padding-top: 20px;

}

.singleBox {
    padding-top: 10px;
    padding-bottom: 10px;
}

.content {
    text-align: left;
    float: left;
    width: 80%;
    margin-left: 10px;
}

p {
    margin-top: 10px;
}

.avatar {
    float: left;

}

.time {
    font-size: 13px;
    margin-right: 20px;
}

.thumb {
    height: 17px;
    vertical-align: middle;
    margin-right: 20px;
}
</style>