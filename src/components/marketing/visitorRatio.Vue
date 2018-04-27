<template>
  <div class="lf marketing ml">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="marketing-wrap">
      <div class="marketing-inner">
        <div id="myChartVisitor" style="width:100%;height:100%;margin: 0 auto;"></div>
      </div>
    </div>
  </div>

</template>

<script>
import title from '../title';
export default{
    name:'visitorRatio',
    data(){
        return{
          titlemsg:'游客男女比例'
        }
    },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChartVisitor'))
      // 绘制图表
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "<br/>{b}: {c} ({d}%)"
          },
        color:['#44a2d8', '#fcd864'],
        series : [
          {
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'男'},
              {value:310, name:'女'}
            ],
            label : {
              normal : {
                formatter: '{b} {d}%',
                textStyle : {
                  fontWeight : 'normal',
                  fontSize : 15
                }
              }
            },
            itemStyle:{
              color:'#fff'
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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

<style>


</style>
