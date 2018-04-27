<template>
  <div class="into-line">
    <div class="tit">
      <h3>投诉统计</h3>
    </div>
    <div class="intoLine-outer">
      <div class="intoLine-inner">
        <div id="myChartCom" style="width:3.48rem;height:3.44rem;margin: 0 auto;"></div>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    name:'intoLine',
    data(){
      return{

      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartCom'))
        // 绘制图表
        // 指定图表的配置项和数据
        var dataAxis = ['1月', '2月', '3月', '4月', '5月', '6月', '7月'];
        var data = [2000, 1802, 1910, 2340, 2900, 3300, 5100];
        var yMax = 5000;
        var dataShadow = [];

        for (var i = 0; i < data.length; i++) {
          dataShadow.push(yMax);
        }

        var option =  {
          grid:{
            left:'16%',
            top:'15%',
            bottom:'12%',
            right:'5%'
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
              show: false
            },
            z: 10
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false,
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
            itemStyle:{
              color:'#2e87ef'
            }
          }]};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    }
  }





</script>

<style scoped>
  .into-line{width:100%;height:4.11rem;color: #fff;}
  .intoLine-outer{height: 3.59rem;width: 100% ;background: #002d6a;border-radius: 4px;padding-top: .09rem;}
  .intoLine-inner{height: 3.44rem;width: 3.46rem;margin: 0 auto; background-color: #003885;border-radius: 4px;}
</style>
