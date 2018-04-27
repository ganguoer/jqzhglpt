
<template>
  <div class="lf marketing ml">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="marketing-wrap">
      <div class="marketing-inner">
         <div id="myChartPro" style="width:100%;height:100%;"></div>
      </div>
    </div>
  </div>

</template>

<script>
  import title from '../title';
  export default{
    name:'proChannel',
    data(){
      return{
        titlemsg:'产品预定渠道'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartPro'))
        // 绘制图表
        // 指定图表的配置项和数据
        var dataAxis = ['同程', '携程', '驴妈妈', '去哪儿网', '景区官网'];
        var data = [600, 990, 800, 450, 381];
        var yMax = 1000;
        var dataShadow = [];

        for (var i = 0; i < data.length; i++) {
          dataShadow.push(yMax);
        }

        var option =  {
          backgroundColor: '#003885',
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
          yAxis: {
            type: 'value',
            splitLine:{show: false},//去除网格线
            axisLine: {
              show: true,
              lineStyle:{
                  color:'#637eaf'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          series: [{
            data:data,
            type: 'bar',
            barWidth : 30,
            itemStyle:{
              color:'#ffd452'
            }
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

