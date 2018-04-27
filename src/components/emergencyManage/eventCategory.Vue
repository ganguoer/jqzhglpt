<template>
  <div>
    <div class="lf eventCategory w326 ml  ">
      <title-h3 :titlemsg="titlemsg4"></title-h3>
      <div class="inner-wrap">
        <div class="argument-warp">
          <div class="fl" id="myChartEP" style="width:42%;height:100%;margin: 0 auto;"></div>
          <div class="fl" id="myChartEB" style="width:50%;height:100%;"></div>
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
        titlemsg4:'事件类型统计'
      }
    },
    mounted(){
      this.drawLine();
      this.drawLineProgess();
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartEP'));
        // 绘制图表
        // 指定图表的配置项和数据
        var option = {
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: '8%',
            data: ['事件灾害','公共卫生','自然灾害','公共安全','无事件分类'],
            textStyle:{ //图例字体颜色
              color:'#fff'
            }
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '65%',
              center: ['56%', '60%'],
              data:[
                {value:335, name:'事件灾害'},
                {value:310, name:'公共卫生'},
                {value:234, name:'自然灾害'},
                {value:135, name:'公共安全'},
                {value:1548, name:'无事件分类'}
              ],
              label: {
                normal: {
                  position: 'inner',
                  formatter: '{b} \n ({d}%)',
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
          color: ['rgb(236,110,100)','rgb(100,189,166)','rgb(5,151,235)','rgb(218,185,50)','rgb(179,111,230)']

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      drawLineProgess(){
        let myChart=this.$echarts.init(document.getElementById('myChartEB'));
        var dataAxis =  ['事件灾害','公共卫生','自然灾害','公共安全','无事件分类'];
        var data = [600, 990, 800, 450, 381];
        var yMax = 1000;
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
          series: [
            {
              name:'事件灾害',
              stack: '广告',  //设置分类，同一类合并，多个series数据成一个柱
              type:'bar',
              color:"rgb(236,110,100)",
              barWidth : 22,
              data:[320]
            },
            {
              name:'公共卫生',
              type:'bar',
              stack: '广告',
              data:[0, 132],
              color:'rgb(100,189,166)'
            },
            {
              name:'自然灾害',
              type:'bar',
              stack: '广告',
              data:[0, 0, 191,],
              color:'rgb(5,151,235)'
            },
            {
              name:'公共安全',
              type:'bar',
              stack: '广告',
              data:[0, 0, 0, 154],
              color:'rgb(218,185,50)'
            },
            {
              name:'无事件分类',
              stack: '广告',  //设置分类，同一类合并，多个series数据成一个柱
              type:'bar',
              color:"rgb(179,111,230)",
              data:[0,0,0,0,145]
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
