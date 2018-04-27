<template>
  <div>
    <div class="lf scenicStatistics w326 ml">
      <title-h3 :titlemsg="titlemsg"></title-h3>
      <div class="inner-wrap">
        <div class="argument-warp">
          <div id="myChartscenicStatistics" style="width:100%;height:100%;"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import title from '../title'
export default{
    name:'scenicStatistics',
    data(){
        return{
          titlemsg:'景区事件统计'
        }
    },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChartscenicStatistics'));
      // 绘制图表
      // 指定图表的配置项和数据
      var posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
      ];

      app.configParameters = {
        rotate: {
          min: -90,
          max: 90
        },
        align: {
          options: {
            left: 'left',
            center: 'center',
            right: 'right'
          }
        },
        verticalAlign: {
          options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
          }
        },
        position: {
          options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
          }, {})
        },
        distance: {
          min: 0,
          max: 100
        }
      };

      app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
          var labelOption = {
            normal: {
              rotate: app.config.rotate,
              align: app.config.align,
              verticalAlign: app.config.verticalAlign,
              position: app.config.position,
              distance: app.config.distance
            }
          };
          myChart.setOption({
            series: [{
              label: labelOption
            }, {
              label: labelOption
            }, {
              label: labelOption
            }, {
              label: labelOption
            }]
          });
        }
      };

      var option = {
        color: ['#9be469', '#856fbe', '#e63bdd', '#47d67d','#e2806d'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
//          orient:'vertical',
//          x: 'left',
          data: ['封路', '坠楼', '失火', '打架','走失'],
          textStyle:{ //图例字体颜色
            color:'#fff'
          },
          top:'6%',
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
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
            data: ['2017-12', '2018-01', '2018-02', '2018-03', '2018-04']
          }
        ],
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
        series: [
          {
            name: '封路',
            type: 'bar',
            barWidth : 10,
            barGap: 0,
            data: [120, 132, 201, 234, 190]
          },
          {
            name: '坠楼',
            type: 'bar',
            barWidth : 10,
            data: [200, 382, 191, 234, 290]
          },
          {
            name: '失火',
            type: 'bar',
            barWidth : 10,
            data: [90, 202, 201, 154, 190]
          },
          {
            name: '打架',
            type: 'bar',
            barWidth : 10,
            data: [130, 257, 101, 99, 40]
          },
          {
            name: '走失',
            type: 'bar',
            barWidth : 10,
            data: [136, 177, 101, 99, 40]
          }
        ]
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
  .scenicStatistics{width: 40%;height:4.14rem;}
  .scenicStatistics .inner-wrap{height: 3.64rem; width: 100%;background: #002d6a;border-radius: 4px;padding-top: .08rem;overflow:hidden}
  .scenicStatistics .argument-warp{width: 97%;background: #173881;height: 3.54rem;margin: 0 auto;border-radius: 4px;}
  .w326{width:32.604%}
</style>

