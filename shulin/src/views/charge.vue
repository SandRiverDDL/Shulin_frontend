<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>购买积分</span>
                <el-button type="success" icon="el-icon-check" circle @click="charge"></el-button>
            </div>
            <div class="item">

            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    methods: {
        charge() {
            this.$axios({
                method: "post",
                url: "https://pay.jrv9.com/pay/mapi.php",
                data: {
                    'id': 1070,
                    'type': 'alipay',
                    'out_trade_no': '20160806151343349',
                    'notify_url': 'http://localhost:8080/charge',
                    'return_url': 'http://localhost:8080/charge',
                    'name': '积分',
                    'money': '0.01',
                    'param': '',
                },
            })
                .then((res) => {
                    /* res 是 response 的缩写 */
                    alert(res.data.code);
                }
                )
                .catch((err) => {
                    console.log(err); /* 若出现异常则在终端输出相关信息 */
                });


        }

    }
}
</script>
<style>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 880px;
    margin: auto;
}
</style>