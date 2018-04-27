<template>
    <div>
        <div class="water-information ml lf">
          <title-h3 :titlemsg="titlemsgwater"></title-h3>
          <div class="content-wrap">
            <div class="innerwrap">
                <div class="water-echart">
                  <div id="myChartsa" style="width:89%;height:3.4rem;margin: 0 auto;"></div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import title from '../title'
export default {
  name: 'waterQuality',
  data(){
    return {
      titlemsgwater:"水质监测",
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
            left:'10%',
            top:'15%',
            bottom:'20%',
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
      let myChart = this.$echarts.init(document.getElementById('myChartsa'));
      myChart.setOption(option);
    }
  },
  components: {
    'title-h3': title
  }
}

</script>
<style scoped>
  .water-information{width: 24.5%;height:3.96rem;}
  .water-information .content-wrap{width: 100%; height: 3.53rem; margin-top: 0.03rem; padding-top:0}
  .water-information .innerwrap{width:100%; margin:0 auto; height: 3.33rem; background: #002d6a; border-radius: 4px; padding-top:.1rem}
  .water-information .water-echart{width:96%;margin:0 auto;height: 3.23rem; background: #173881;}
</style>
