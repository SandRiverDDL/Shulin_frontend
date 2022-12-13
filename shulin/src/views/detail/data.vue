<template>
    <div>
        <div id="reading" :style="{ width: '600px', height: '500px' }"></div>
        <div id="collect" :style="{ width: '600px', height: '500px' }"></div>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to kalacloud.com'
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            let readingChart = this.$echarts.init(document.getElementById('reading'))
            // 绘制图表
            readingChart.setOption({
                title: { text: '阅读量变化' },

                tooltip: {},
                legend: {

                },
                xAxis: {
                    data: ["12.9", "12.10", "12.10", "12.10", "12.10", "12.10", "12.10",]
                },
                yAxis: {},
                series: [{
                    name: '阅读量',
                    type: 'line',
                    data: [0, 0, 1, 2, 79, 82, 27, 14]
                }]
            });
            let collectChart = this.$echarts.init(document.getElementById('collect'))
            // 绘制图表
            collectChart.setOption({
                title: { text: '收藏量变化' },

                tooltip: {},
                legend: {

                },
                xAxis: {
                    data: ["12.9", "12.10", "12.10", "12.10", "12.10", "12.10", "12.10",]
                },
                yAxis: {},
                series: [{
                    name: '收藏量',
                    type: 'line',
                    data: [0, 0, 1, 2, 79, 82, 27, 14]
                }]
            });
        }
    }
}
</script>