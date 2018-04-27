<template>
    <div>
        <div class="negative-oxygen ml lf mt12">
          <title-h3 :titlemsg="titlemsgoxygen"></title-h3>
          <div class="content-wrap">
            <div class="innerwrap">
                <div class="noise-echart">
                  <div id="myCharts" style="width:95%;height:3.4rem;margin: 0 auto;"></div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import title from '../title'
export default {
  name: 'negativeOxygen',
  data(){
    return {
      titlemsgoxygen:"负氧离子监测"
    }
  },
  mounted(){
    this.drawLine()
  },
  updated(){

  },
  methods:{
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
      var option = {
          // backgroundColor: '#003885',
          grid:{
            left:'14%',
            top:'15%',
            bottom:'12%',
            right:'3%'
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
                color: '#fff',//左边线的颜色
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
            type: 'line',
//            label: {
//                normal: {
//                    show: true,
//                    position: 'top',
//                    formatter: '{c} ℃'
//                }
//            }
            }],

        };

      let myChart = this.$echarts.init(document.getElementById('myCharts'));
      myChart.setOption(option);
    }
  },
  components: {
    'title-h3': title
  }
}

</script>
<style scoped>
  .negative-oxygen{width: 24.5%;height:4.23rem;}
  .negative-oxygen .innerwrap{width:100%; margin:0 auto; height: 3.56rem; background: #002d6a; border-radius: 4px; margin-top: 0.03rem;}
  .negative-oxygen .noise-echart{width:96%;margin:0 auto;height: 3.46rem; background: #173881;}
</style>
