<template>
  <div>
    <div class="lf eventCategory w326 ml mt12">
      <title-h3 :titlemsg="titlemsg4"></title-h3>
      <div class="inner-wrap">
        <div class="argument-warp">
          <div class="fl" id="myChartPSP" style="width:45%;height:100%;margin: 0 auto;"></div>
          <div class="fl" id="myChartPSB" style="width:45%;height:100%;"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import title from '../title'
  export default {
    name: 'eventCategory',
    data(){
      return {
        titlemsg4:'预案启动统计'
      }
    },
    mounted(){
      this.drawLine();
      this.drawLineProgess();
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartPSP'));
        // 绘制图表
        // 指定图表的配置项和数据
        var option = {
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '65%',
              center: ['46%', '50%'],
              data:[
                {value:7, name:'现场预案统计7份'}
              ],
              label: {
                normal: {
                  position: 'center',
                  formatter: '{b} \n',
                  textStyle: {
                    color: '#fff',
                    fontWeight: '100',
                    fontSize: 12
                  }
                }
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ],
          color: ['rgb(236,110,100)']

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      drawLineProgess(){
        let myChart=this.$echarts.init(document.getElementById('myChartPSB'));
        var dataAxis =  ['启动预案'];

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
          yAxis: {
            type: 'value',
            max:10,
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
          series: [
            {
              name:'启动预案',
              stack: '广告',  //设置分类，同一类合并，多个series数据成一个柱
              type:'bar',
              color:"rgb(236,110,100)",
              barWidth : 44,
              data:[4]
            }
          ]};


        myChart.setOption(option);
      }
    },
    components: {
      'title-h3': title
    }
  }

</script>
<style scoped>
  .eventCategory{width: 40%;height:4.14rem;}
  .eventCategory .inner-wrap{height: 3.64rem; width: 100%;background: #002d6a;border-radius: 4px;padding-top: .08rem;overflow:hidden}
  .eventCategory .argument-warp{width: 97%;background: #173881;height: 3.54rem;margin: 0 auto;border-radius: 4px;}
  .w326{width:32.604%}
  #myChartEP{width: 40%; margin: 0 auto;height:4rem; padding-top:.215rem; overflow: hidden}
  #myChartEB{width:50%; margin-left: 6%}
</style>
