<template>
    <div style="width: 70%; margin: auto;">
        <el-tabs type="border-card" tab-position="left">
            <el-tab-pane v-for="(item, index) in application">
                <div slot="label" style="width: 100px; text-align: center;" v-if="item.state === 0"> <img class="img"
                        src="@/assets/icon/通过.svg" />申请{{ index + 1
                        }}</div>
                <div slot="label" style="width: 100px; text-align: center;" v-else-if="item.state === 1"> <img
                        src="@/assets/icon/拒绝.svg" />申请{{ index + 1
                        }}</div>
                <div slot="label" style="width: 100px; text-align: center;" v-else> <img
                        src="@/assets/icon/未处理.svg" />申请{{ index + 1 }}</div>
                <div>
                    <div class="title">申请人姓名:</div>
                    <div class="name">{{ item.name }}</div>
                </div>
                <el-divider></el-divider>
                <div>
                    <div class="title">申请人邮箱:</div>
                    <div class="email">{{ item.email }}</div>
                </div>
                <el-divider></el-divider>
                <div>
                    <div class="title">申请时间:</div>
                    <div class="name">{{ item.date }}</div>
                </div><el-divider></el-divider>
                <div>
                    <div class="title">申请原因:</div>
                    <div class="reason">{{ item.reason }}</div>
                </div>
                <div v-if="item.state === 2">
                    <el-button type="primary">通过申请</el-button>
                    <div style="display: inline-block; width: 200px;"></div>
                    <el-button type="danger">退回申请</el-button>
                </div>
                <div v-else><el-button type="info">已完成审核</el-button></div>

            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            application: [
                {
                    reason: "我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请我要申请",
                    email: "我的email",
                    name: "我的名字",
                    date: "2022年12月13日",
                    state: 0
                },
                {
                    reason: "我要申请",
                    email: "我的email",
                    name: "我的名字",
                    date: "2022年12月13日",
                    state: 1
                },
                {
                    reason: "我要申请",
                    email: "我的email",
                    name: "我的名字",
                    date: "2022年12月13日",
                    state: 2
                },
            ]
        }
    }
}
</script>
<style>
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
    height: 85vh;
}

img {
    height: 20px;
    vertical-align: middle;
    margin-bottom: 3px;
    margin-right: 5px;
}
</style>