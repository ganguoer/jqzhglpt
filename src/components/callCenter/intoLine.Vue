<template>
  <div class="into-line">
    <div class="tit">
      <h3>进线统计</h3>
    </div>
    <div class="intoLine-outer">
      <div class="intoLine-inner">
        <div id="myChartLine" style="width:3.48rem;height:3.44rem;margin: 0 auto;"></div>
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
      let myChart = this.$echarts.init(document.getElementById('myChartLine'))
      // 绘制图表
      // 指定图表的配置项和数据
      var option = {
        grid:{
          left:'16%',
          top:'15%',
          bottom:'12%',
          right:'5%'
        },
        xAxis: {
          data:['3-26', '3-27', '3-28', '3-29', '3-30', '3-31', '4-01'],
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#577cb7',//左边线的颜色
            }
          },
        },
        yAxis: {
          type: 'value',
          name:'(元)',
          nameTextStyle:{
            color:'#fff'
          },
//            max:1500,//Y轴最大值 不写的话自动调节
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#577cb7',//左边线的颜色
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
//              formatter:'{value}元',  //加 单位
            textStyle: {
              color: '#fff'
            }
          },
          splitLine:{
            lineStyle:{
                type:'dashed',
                color:['#475e8f']  //网格线虚线
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c} ℃'
            }
          }
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }],

      };

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
