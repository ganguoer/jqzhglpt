
<template>
  <div class="lf marketing ml">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="marketing-wrap">
      <div class="marketing-inner">
        <div id="myChartAge" style="width:100%;height:100%;"></div>
      </div>
    </div>
  </div>

</template>

<script>
  import title from '../title';
  export default{
    name:'visitorAge',
    data(){
      return{
        titlemsg:'游客年龄分布'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartAge'))
        // 绘制图表
        // 指定图表的配置项和数据
        var dataAxis = ['18岁以下', '19-29', '30-39', '40-49', '50岁及以上'];
        var data = [2000, 1802, 1910, 2340, 2900];
        var yMax = '100%';
        var dataShadow = [];

        for (var i = 0; i < data.length; i++) {
          dataShadow.push(yMax);
        }

        var option =  {
          grid:{
            left:'12%',
            top:'10%',
            bottom:'12%',
            right:'4%'
          },
          xAxis: {
            data: dataAxis,
            axisLabel: {
//              inside: true,
              textStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle:{
                color:'#637eaf'
              }
            },
            z: 10
          },
          yAxis: [
            {
              type: 'value',
              splitLine:{show: false},//去除网格线
              axisLine: {
                show: true,
                lineStyle:{
                  color:'#637eaf'
                }
              },
              axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value} %',
                textStyle: {
                  color: '#fff'
                }
              },
              show: true
            }
          ],
          series: [{
            data:data,
            type: 'bar',
            barWidth : 30,
            itemStyle: {
              color:'#2e87ef'
            },

          }]};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    },
    components:{
      'title-h3':title
    }
  }

</script>

<style>


</style>
