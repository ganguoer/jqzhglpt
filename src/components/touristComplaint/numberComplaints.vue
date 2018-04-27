<<<<<<< HEAD
<template>
    <div>
        <div class="number-complaint ml lf">
          <title-h3 :titlemsg="titlemsg"></title-h3>
          <div class="content-wrap">
            <div class="inner-content-wrap">
              <div id="myChart1" style="width:96%;height:3rem;margin: 0 auto;"></div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import title from '../title'
export default {
  name: 'numberComplaints',
  data(){
    return {
      titlemsg:"投诉数量",
    }
  },
  mounted(){
    this.drawLine();
  },
  updated(){

  },
  methods:{
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'));
        // 绘制图表
        // 指定图表的配置项和数据
        var option = {
            title : {
                text: '2018年投诉数量分析',
                x:'left',
                textStyle:{
                color:'#fff',
                fontWeight: '100',
                fontSize: 16
                }
            },
            legend:{  // 对应series的name
                orient: 'vertical',
                left: '5%',
                top:'10%',
                itemGap:13,
                itemHeight:16,
                itemwidth:31,
                data:['1月','2月','3月','4月','5月','6月','7月','8月'],
                textStyle:{
                    color:'#fff'
                }
            },
            grid: {
                left: '20%',
                right: '10%',
                bottom: '3%',
                containLabel: true
            },
            tooltip : {
                //trigger: 'axis',    //显示其他分类
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月'],
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                    show: false
                    },
                    axisLine: {
                    show: false
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#fff',//左边线的颜色
                        }
                        },
                }
            ],
            series : [
                {
                    name:'1月',
                    stack: '广告',  //设置分类，同一类合并，多个series数据成一个柱
                    type:'bar',
                    color:"#f29e9e",
                    barWidth : 22,
                    data:[320]
                },
                {
                    name:'2月',
                    type:'bar',
                    stack: '广告',
                    data:[0, 132],
                    color:'#5ea5da'
                },
                {
                    name:'3月',
                    type:'bar',
                    stack: '广告',
                    data:[0, 0, 191,],
                    color:'#a7d17d'
                },
                {
                    name:'4月',
                    type:'bar',
                    stack: '广告',
                    data:[0, 0, 0, 154],
                    color:'#8ebbe5'
                },
                {
                    name:'5月',
                    stack: '广告',  //设置分类，同一类合并，多个series数据成一个柱
                    type:'bar',
                    color:"#c4a7ce",
                    data:[0,0,0,0,145]
                },
                {
                    name:'6月',
                    type:'bar',
                    stack: '广告',
                    data:[0,0,0,0,0,325],
                    color:'#f3a397'
                },
                {
                    name:'7月',
                    type:'bar',
                    stack: '广告',
                    data:[0,0,0,0,0,0,145],
                    color:'#848dc5'
                },
                {
                    name:'8月',
                    type:'bar',
                    stack: '广告',
                    data:[0,0,0,0,0,0,0,145],
                    color:'#8ebbe5'
                },
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  components: {
    'title-h3': title
  }
}

</script>
<style scoped>
  .number-complaint{width: 65.4%;height:4.06rem;}
  .number-complaint .content-wrap{width: 100%; height: 3.53rem; margin-top: 0.03rem; background: #002c6a; border-radius: 4px; padding-top: .1rem}
  .number-complaint .inner-content-wrap{width: 97%; margin: 0 auto; height: 3.43rem; background: #0e3883}
  #myChart1{width: 96%; margin: 0 auto;height:3rem; padding-top:.215rem; overflow: hidden}
</style>
=======
<template>
    <div>
        <div class="number-complaint ml lf">
          <title-h3 :titlemsg="titlemsg"></title-h3>
          <div class="content-wrap">
            <div class="inner-content-wrap">
              <div id="myChart1" style="width:96%;height:3rem;margin: 0 auto;"></div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import title from '../title'
export default {
  name: 'numberComplaints',
  data(){
    return {
      titlemsg:"投诉数量",
    }
  },
  mounted(){
    this.drawLine();
  },
  updated(){

  },
  methods:{
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart1'));
        // 绘制图表
        // 指定图表的配置项和数据
        var option = {
            title : {
                text: '2018年投诉数量分析',
                x:'left',
                textStyle:{
                color:'#fff',
                fontWeight: '100',
                fontSize: 16
                }
            },
            legend:{  // 对应series的name
                orient: 'vertical',
                left: '5%',
                top:'10%',
                itemGap:13,
                itemHeight:16,
                itemwidth:31,
                data:['1月','2月','3月','4月','5月','6月','7月','8月'],
                textStyle:{
                    color:'#fff'
                }
            },
            grid: {
                left: '20%',
                right: '10%',
                bottom: '3%',
                containLabel: true
            },
            tooltip : {
                //trigger: 'axis',    //显示其他分类
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月'],
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                    show: false
                    },
                    axisLine: {
                    show: false
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',

                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#fff',//左边线的颜色
                        }
                        },
                }
            ],
            series : [
                {
                    name:'1月',
                    stack: '广告',  //设置分类，同一类合并，多个series数据成一个柱
                    type:'bar',
                    color:"#f29e9e",
                    barWidth : 22,
                    data:[320]
                },
                {
                    name:'2月',
                    type:'bar',
                    stack: '广告',
                    data:[0, 132],
                    color:'#5ea5da'
                },
                {
                    name:'3月',
                    type:'bar',
                    stack: '广告',
                    data:[0, 0, 191,],
                    color:'#a7d17d'
                },
                {
                    name:'4月',
                    type:'bar',
                    stack: '广告',
                    data:[0, 0, 0, 154],
                    color:'#8ebbe5'
                },
                {
                    name:'5月',
                    stack: '广告',  //设置分类，同一类合并，多个series数据成一个柱
                    type:'bar',
                    color:"#c4a7ce",
                    data:[0,0,0,0,145]
                },
                {
                    name:'6月',
                    type:'bar',
                    stack: '广告',
                    data:[0,0,0,0,0,325],
                    color:'#f3a397'
                },
                {
                    name:'7月',
                    type:'bar',
                    stack: '广告',
                    data:[0,0,0,0,0,0,145],
                    color:'#848dc5'
                },
                {
                    name:'8月',
                    type:'bar',
                    stack: '广告',
                    data:[0,0,0,0,0,0,0,145],
                    color:'#8ebbe5'
                },
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  components: {
    'title-h3': title
  }
}

</script>
<style scoped>
  .number-complaint{width: 65.4%;height:4.06rem;}
  .number-complaint .content-wrap{width: 100%; height: 3.53rem; margin-top: 0.03rem; background: #002c6a; border-radius: 4px; padding-top: .1rem}
  .number-complaint .inner-content-wrap{width: 97%; margin: 0 auto; height: 3.43rem; background: #0e3883}
  #myChart1{width: 96%; margin: 0 auto;height:3rem; padding-top:.215rem; overflow: hidden}
</style>
>>>>>>> 30190837a447857154197d8be8904236674f8f25
