<template>
    <div class="chatBox">
        <div v-for="item in Messages">
            <div v-if="item.Mine === true" class="mine">
                <el-avatar :size="50" :src="myAvatar" style="float: right;"></el-avatar>
                <div class="dialogBoxRight" style="float: right;">
                    <span>{{ item.content }}</span>
                </div>
            </div>
            <div v-else class="others">
                <el-avatar :size="50" :src="othersAvatar" style="float: left;"></el-avatar>
                <div class="dialogBoxLeft" style="float: left;">
                    <span>{{ item.content }}</span>
                </div>
            </div>
            <div style="clear: both;"></div>
        </div>
    </div>
</template>
<script>
import jbcat from '@/assets/avatar/avatar.png'
import fish from '@/assets/avatar/fish.webp'
export default {
    data() {
        return {
            Messages: [
                {
                    content: "我和我的动物朋友",
                    Mine: true,
                },
                {
                    content: "早上有小虫",
                    Mine: false
                },
                {
                    content: "我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx我测xxx",
                    Mine: true
                }
            ],
            myAvatar: jbcat,
            othersAvatar: fish
        }
    }
}
</script>
<style scoped>
.chatBox {
    width: 60%;
    margin: auto;
    padding: 50px;
    font-size: 15px;
    background-color: rgb(240, 240, 240);
}

.mine {}

.others {}

.dialogBoxRight {
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border: solid #000 0px;
    padding: 11px;
    max-width: 60%;
    margin: 10px;
    background-color: #0076fd;
    color: #fff;
}

.dialogBoxLeft {
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: solid #000 0px;
    padding: 11px;
    max-width: 60%;
    margin: 10px;
    background-color: #fff;
}

span {
    text-align: left;
    display: inline-block;
}
</style>