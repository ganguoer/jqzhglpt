<template>
  <div>
    <div class="lf eventLevel w326 ml">
      <title-h3 :titlemsg="titlemsg"></title-h3>
      <div class="inner-wrap">
        <div class="argument-warp">
          <div id="myCharteventLevel" style="width:100%;height:100%;"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import title from '../title'
  export default{
    name:'eventLevel',
    data(){
      return{
        titlemsg:'事件级别统计'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myCharteventLevel'));
        // 绘制图表
        // 指定图表的配置项和数据

         var option = {
            tooltip : {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data:['一级处置','二级处置','三级处置','四级处置'],
              textStyle:{ //图例字体颜色
                color:'#fff'
              },
              top:'4%'
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
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
                data : ['2017-12','2018-01','2018-02','2018-03','2018-04','2018-05']
              }
            ],
            yAxis : [
              {
                type: 'value',
                splitLine:{
                  lineStyle:{
                    type:'dashed',
                    color:['#475e8f']  //网格线虚线
                  }
                },
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
              }
            ],
            series : [
              {
                name:'一级处置',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[20, 182, 91, 234, 90, 30, 30]
              },
              {
                name:'二级处置',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[10, 32, 21, 14, 10, 30, 40]
              },
              {
                name:'三级处置',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[30, 32, 18, 34, 90, 30, 20]
              },
              {
                name:'四级处置',
                type:'line',
                stack: '总量',
                label: {
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
                areaStyle: {normal: {}},
                data:[20, 32, 90, 93, 90, 130, 132]
              }
            ],
            color:['#e86c67','#2a97e9','#d8b93e','#b26ee4',]

          };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    },
    components:{
      'title-h3':title
    }
  }

</script>

<style scoped>
  .eventLevel{width: 40%;height:4.14rem;}
  .eventLevel .inner-wrap{height: 3.64rem; width: 100%;background: #002d6a;border-radius: 4px;padding-top: .08rem;overflow:hidden}
  .eventLevel .argument-warp{width: 97%;background: #173881;height: 3.54rem;margin: 0 auto;border-radius: 4px;}
  .w326{width:32.604%}
</style>

