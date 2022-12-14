<template>
    <div class="box">
        <div class="title"><span @click="push">{{ title
        }}</span></div>
        <div class="author"><span v-for="item in authors">{{ item.name }}{{ " " }}</span></div>
        <div style="display: inline-block; width: 20%;"></div>
        <div class="periodical">{{ from }}</div>
        <div class="time">{{ time }}</div>
        <div class="cite">
            <img src="../assets/icon/引用 copy.svg" v-if="icon == 1" />
            <img src="../assets/icon/引用.svg" v-else />
            <span @mouseover="changeIcon" @mouseleave="changeIcon" @click="openIt">引用</span>
        </div>
        <el-dialog title="引用" :visible.sync="citeDialogVisible" width="65%" center>
            <el-row v-for="(item, index) in standards">
                <el-col :span="3">
                    <div style="padding: 9px;"><b class="standard">{{ item.name }}</b></div>
                </el-col>
                <el-col :span="18">
                    <div class="reference">{{ item.content }}</div>
                </el-col>
                <el-col :span="3">
                    <div class="copyBox"><img src="@/assets/icon/copy.svg" class="copy" @click="doCopy(index)" />
                    </div>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            title: "13",
            authors: "",
            time: "",
            from: "",
            icon: 1,
            citeDialogVisible: false,
            standards: [
                {
                    name: "GB/T 7714",
                    content: "[1]" + this.authors + ". " + this.title + "[J]. " + this.from + "," + this.time + "."
                },
                {
                    name: "MLA",
                    content: "[1]" + this.authors + '. +\"' + this.title + '.\"' + this.from + "."
                },
                {
                    name: "APA",
                    content: "[1]" + this.authors + '. (' + this.time + '). ' + this.title + '. ' + this.from + "."
                }
            ],
        }
    },

    mounted() {
        this.getInfo();
    },
    methods: {
        push() {
            this.$router.push({ path: '/detail', query: { id: this.id } });
        },
        changeIcon() {
            if (this.icon == 1) {
                this.icon = 2
            }
            else {
                this.icon = 1
            }
        },
        doCopy: function (index) {
            var success;
            this.$copyText(this.standards[index].content).then(function (e) {
                success = true;
                console.log(e);
            }, function (e) {
                success = false;
                console.log(e);
            });
            if (success = true) {
                this.$notify({
                    title: "复制成功",
                    message: "",
                    type: "success"
                });
            }
            else {
                this.$notify.error({
                    title: "错误",
                    message: "这是一条错误的提示消息"
                });
            }
        },
        showDialog() {
            this.citeDialogVisible = true
        },
        getInfo() {
            let formData = new FormData();
            formData.append('paper_id', this.id);

            this.$axios({
                method: "post" /* 指明请求方式，可以是 get 或 post */,
                url: "/paper_id_search" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
                data: formData,
            })
                .then((res) => {
                    this.title = res.data.msg[0].title;
                    this.authors = res.data.msg[0].authors;
                    this.year = res.data.msg[0].year;
                    this.from = res.data.msg[0].vennues;
                })
                .catch((err) => {
                    console.log(err); /* 若出现异常则在终端输出相关信息 */
                });
        },
        openIt() {
            this.citeDialogVisible = true;
            this.standards[0].content = "[1]";
            let i;
            for (i = 0; i < this.authors.length; i++)
                this.standards[0].content += this.authors[i].name
            this.standards[0].content = this.standards[0].content + ". " + this.title + "[J]. " + "," + this.time + ".";
            this.standards[1].content = "[1]";
            for (i = 0; i < this.authors.length; i++)
                this.standards[1].content += this.authors[i].name
            this.standards[1].content = this.standards[1].content + '. +\"' + this.title + '.\"' + "."
            this.standards[2].content = "[1]";
            for (i = 0; i < this.authors.length; i++)
                this.standards[2].content += this.authors[i].name
            this.standards[2].content = this.standards[2].content + '. (' + this.time + '). ' + this.title + '. ' + "."
        },

    }
}
</script>
<style scoped>
.box {
    width: 800px;
    margin: auto;
    padding: 10px;
}

.title {
    text-align: left;
    font-size: 25px;
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-bottom: 15px;
    text-decoration: none;
}

/deep/.el-dialog__title {
    font-family: "mama";
    font-size: 25px;
}

/deep/.el-dialog.el-dialog--center {
    border-radius: 8px;
    position: absolute;
    /* 设置为绝对定位，使下方的top和left生效  */
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.title span:hover {
    color: #003dff;
}

.title span {
    color: #000;
    text-decoration: none
}

.abstract {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    color: #7C7C7C;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 10px;
}

.author {
    display: inline-block;
    color: #7C7C7C;
    text-align: left;
    width: 20%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
}

.author:hover {
    color: #003dff;
    text-decoration: underline
}

.time {
    display: inline-block;
    color: #7C7C7C;
    text-align: right;
    width: 10%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.periodical {
    display: inline-block;
    color: #7C7C7C;
    text-align: right;
    width: 30%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.cite {
    display: inline-block;
    color: #7C7C7C;
    text-align: right;
    width: 20%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
}

.cite:hover {
    color: #003dff;
    text-decoration: underline
}

img {
    height: 20px;
}

.reference {
    font-size: 17px;
    background-color: rgb(250, 250, 250);
    border-radius: 2px;
    border-color: rgb(240, 240, 240);
    border-width: 1px;
    border-style: solid;
    padding: 8px;
}

.copy {
    height: 20px !important;
    cursor: pointer;

}

.copyBox {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;

}

.standard {
    font-size: 17px;
}
</style>