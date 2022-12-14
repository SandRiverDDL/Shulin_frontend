<template>
<!--<<<<<<< HEAD-->
<!--    <div>-->
<!--      <span @click="show">555555</span>-->
<!--      <div class="box" v-for="paper in this.$store.state.searched_paper">-->
<!--        <div class="title"><span>{{ paper.title }}</span></div>-->
<!--        <div class="author">-->
<!--          <span v-for="author in paper.authors">-->
<!--            <span class="one_author">{{ author.name }}</span>,&nbsp;-->
<!--          </span>-->
<!--        </div>-->
<!--        <div style="display: inline-block; width: 20%;"></div>-->
<!--        <div class="periodical">{{ paper.periodical }}</div>-->
<!--        <div class="time">{{ paper.year }}</div>-->
<!--        <div class="cite">-->
<!--          <img src="../assets/icon/引用 copy.svg"/>-->
<!--&lt;!&ndash;          <img src="../assets/icon/引用 copy.svg" v-if="icon == 1" />&ndash;&gt;-->
<!--&lt;!&ndash;          <img src="../assets/icon/引用.svg" v-else />&ndash;&gt;-->
<!--          <span @mouseover="changeIcon" @mouseleave="changeIcon" @click="showDialog">引用</span>-->
<!--        </div>-->
<!--        <el-dialog title="引用" :visible.sync="citeDialogVisible" width="65%" center>-->
<!--          <el-row v-for="(item, index) in standards">-->
<!--            <el-col :span="3">-->
<!--              <div style="padding: 9px;"><b class="standard">{{ item.name }}</b></div>-->
<!--            </el-col>-->
<!--            <el-col :span="18">-->
<!--              <div class="reference">{{ item.content }}</div>-->
<!--            </el-col>-->
<!--            <el-col :span="3">-->
<!--              <div class="copyBox"><img src="@/assets/icon/copy.svg" class="copy" @click="doCopy(index)" />-->
<!--              </div>-->
<!--            </el-col>-->
<!--          </el-row>-->
<!--        </el-dialog>-->
<!--      </div>-->
<!--=======-->
  <div>
    <!--      <span @click="show">555555</span>-->
    <div class="box" v-for="paper in this.$store.state.searched_paper">
      <div class="title"><span>{{ paper.title }}</span></div>
      <div class="author">{{ paper.author }}</div>
      <div style="display: inline-block; width: 20%;"></div>
      <div class="periodical">{{ paper.periodical }}</div>
      <div class="time">{{ paper.year }}</div>
      <div class="cite">
        <img src="../assets/icon/引用 copy.svg" />
        <span @mouseover="changeIcon" @mouseleave="changeIcon" @click="showDialog">引用</span>
      </div>
      <el-divider></el-divider>
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
    <el-divider></el-divider>
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

<style scoped>
.box {
  margin: auto;
  padding: 20px;
  border: 1px lightgray solid;
  border-radius: 1%;
}

.title {
  text-align: left;
  font-size: 22px;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  margin-bottom: 15px;

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
  text-decoration: underline
}

.title span {
  color: #000;
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
  width: 40%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}

.one_author:hover {
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
  width: 10%;
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

<script>
export default {
  props: ['id'],
  name: 'papers',
  data() {
    return {
      title: "海底捞员工激励机制研究",
      // abstract: "首先,本论文对海底捞人力资源的现状进行了深刻的分析,并且对海底捞整体情况进行了简单的论述;其次详细分析了海底捞目前员工的激励政策的现状,然后从目前激励政策的实施状况,找出海底捞在在员工激励政策方面存在的一些问题,并给与一定的讨论.在此基础上,针对海底捞员工激励政策存在的问题提出一些改善的对策建议.最后通过对海底捞激励政策的调整所带来的启发进行分析,并希望所提出的一些建议对海底捞员工激励政策的完善有一定的帮助,同时给其他餐饮业在员工激励政策的建设上也存在一定的借鉴作用.",
      author: "郝值郝值郝值郝值郝值郝值",
      time: "2020",
      periodical: "品牌研究",
      icon: 1,
      citeDialogVisible: false,
      standards: [
        {
          name: "GB/T 7714",
          content: "[1]郭田勇, 孙光宇. 新冠疫情对我国经济的影响与应对之策[J]. 银行家, 2020(4):3."
        },
        {
          name: "MLA",
          content: "[1]郭田勇, and 孙光宇. \"新冠疫情对我国经济的影响与应对之策.\" 银行家 4(2020):3."
        },
        {
          name: "APA",
          content: "[1]郭田勇, & 孙光宇. (2020). 新冠疫情对我国经济的影响与应对之策. 银行家(4), 3."
        }
      ],
      papers: [
        {
          title: "aaaaa",
          author: "chy, Bob, Sam",
          periodical: "意林",
          time: '2001',
        },
        {
          title: "bbb",
          author: "chy, Bob",
          periodical: "意林",
          time: '2001',
        }
      ]
    }
  },

  mounted() {
  },
  methods: {
    show() {
      console.log("paper页面的papers", this.$store.state.searched_paper);
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
    }
  }
}
</script>
