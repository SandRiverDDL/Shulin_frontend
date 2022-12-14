<template>
    <div>
        <div style="clear: both;"></div>
        <div class="comment">
            <el-avatar :size="45" style="float: left;">{{ myName }}</el-avatar>

            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 5 }" placeholder="请输入内容" v-model="commentNow"
                style="width: 80%; float: left; margin-left: 10px;">
            </el-input>
            <el-button type="primary" plain style=" float: left; margin-left: 10px; height: 50px;"
                @click="comment">发表评论</el-button>
        </div>
        <div style="clear: both;"></div>
        <el-divider></el-divider>
        <div class="commentBox">
            <div v-for="(item, index) in comments">
                <div class="singleBox">
                    <div class="avatar">
                        <el-avatar :size="45">{{ item.username }}</el-avatar>
                    </div>
                    <div class="content">
                        <b class="name">
                            {{ item.username }}
                        </b>
                        <p>{{ item.content }}</p>
                        <span class="time">{{ item.time }}</span>

                        <span>{{ }}</span>
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
            comments: [],
            paper_id: this.$attrs.paper_id,
            myName: this.$store.state.user_name,
            commentNow: "",
            token: this.$store.state.token,
        }
    },
    computed: {

    },
    mounted() {
        this.getComments();
    },
    methods: {
        getComments() {
            let formData = new FormData();
            formData.append('paper_id', this.paper_id);

            this.$axios({
                method: "post" /* 指明请求方式，可以是 get 或 post */,
                url: "/get_comments" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
                data: formData,
            })
                .then((res) => {
                    this.comments = res.data.data;
                })
                .catch((err) => {
                    console.log(err); /* 若出现异常则在终端输出相关信息 */
                });
        },
        comment() {
            let formData = new FormData();
            formData.append('paper_id', this.paper_id);
            formData.append('token', this.token);
            formData.append('content', this.commentNow);
            this.$axios({
                method: "post" /* 指明请求方式，可以是 get 或 post */,
                url: "/comment" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
                data: formData,
            })
                .then((res) => {
                    if (res.data.errno == 0) {
                        this.$notify({
                            title: "评论成功",
                            message: "",
                            type: "success"
                        });
                        this.commentNow = "";
                        this.getComments();
                    }
                    else {
                        alert(res.data.errno)
                    }
                })
                .catch((err) => {
                    console.log(err); /* 若出现异常则在终端输出相关信息 */
                });
        }
    }
}
</script>
<style scoped>
.input {
    border-radius: 10px;
    border-width: 1px;
    border-color: #7c7c7c;
    width: 80%;
    height: 100px
}

input:active {
    border-color: #7c7c7c;
}

.comment {
    margin-top: 20px;
}

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