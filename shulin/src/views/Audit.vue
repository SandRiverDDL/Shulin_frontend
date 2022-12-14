<template>
    <div>
        <navi></navi>
        <div class="box">
            <h1>学者门户申请审核</h1>
            <el-tabs type="border-card" tab-position="left">
                <el-tab-pane v-for="(item, index) in application">
                    <div slot="label" style="width: 100px; text-align: center;" v-if="item.state === 0"> <img
                            class="img" src="@/assets/icon/通过.svg" />申请{{ index + 1
                            }}</div>
                    <div slot="label" style="width: 100px; text-align: center;" v-else-if="item.state === 1"> <img
                            src="@/assets/icon/拒绝.svg" />申请{{ index + 1
                            }}</div>
                    <div slot="label" style="width: 100px; text-align: center;" v-else> <img
                            src="@/assets/icon/未处理.svg" />申请{{ index + 1 }}</div>
                    <div>
                        <div class="title">申请人ID:</div>
                        <div class="name">{{ item.scholar_id }}</div>
                    </div>
                    <el-divider></el-divider>
                    <div>
                        <div class="title">申请人邮箱:</div>
                        <div class="email">{{ item.email }}</div>
                    </div>
                    <el-divider></el-divider>
                    <div>
                        <div class="title">申请时间:</div>
                        <div class="name">{{ item.apply_time }}</div>
                    </div><el-divider></el-divider>
                    <div>
                        <div class="title">申请原因:</div>
                        <div class="reason">{{ item.content }}</div>
                    </div>
                    <div v-if="item.status === 0">
                        <el-button @click="handleApp(1, item.application_id)" type="primary">通过申请</el-button>
                        <div style="display: inline-block; width: 200px;"></div>
                        <el-button type="danger" @click="handleApp(2, item.application_id)">退回申请</el-button>
                    </div>
                    <div v-else><el-button type="info">已完成审核</el-button></div>

                </el-tab-pane>
            </el-tabs>
            <div style="height: 50px;"></div>
        </div>


    </div>
</template>
<script>
import Navi from "@/components/navi";
export default {
    data() {
        return {
            application: [
            ],
            token: this.$store.state.token,
            names: [
                { scholar_id: "" }
            ],
            scholarName: []
        }
    },
    components: {
        Navi
    },
    mounted() {
        this.getApp()
    },
    methods: {
        getApp() {
            let formData = new FormData();
            formData.append('token', this.token);

            this.$axios({
                method: "post" /* 指明请求方式，可以是 get 或 post */,
                url: "/get_all_application" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
                data: formData,
            })
                .then((res) => {
                    this.application = res.data.data
                    this.getName();
                })
                .catch((err) => {
                    console.log(err); /* 若出现异常则在终端输出相关信息 */
                });
        },
        handleApp(value, id) {
            let formData = new FormData();
            formData.append('token', this.token);
            formData.append('application_id', id);
            formData.append('value', value);
            this.$axios({
                method: "post" /* 指明请求方式，可以是 get 或 post */,
                url: "/handle_application" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
                data: formData,
            })
                .then((res) => {
                    if (value == 1) {
                        this.$notify({
                            title: "通过申请",
                            message: "",
                            type: "success"
                        });
                    }
                    else {
                        this.$notify.error({
                            title: "拒绝申请",
                            message: ""
                        });
                    }
                    this.getApp();
                })
                .catch((err) => {
                    console.log(err); /* 若出现异常则在终端输出相关信息 */
                });
        }
    }
}
</script>
<style>
.box {
    position: absolute;
    left: 15%;
    top: 10%;
    width: 70%;
}

.name {
    display: inline-block;
    width: 80%;
    text-align: left;
    vertical-align: middle;

}

.email {
    display: inline-block;
    width: 80%;
    text-align: left;
    vertical-align: middle;

}

.reason {
    display: inline-block;
    width: 80%;
    text-align: left;
    vertical-align: middle;
    height: 350px;
    line-height: 30px;
}

.title {
    display: inline-block;
    width: 12%;
    text-align: left;
    vertical-align: top;
}

.el-tabs--left {
    height: 90vh;
}

img {
    height: 20px;
    vertical-align: middle;
    margin-bottom: 3px;
    margin-right: 5px;
}
</style>