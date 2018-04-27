<template>
  <div class="into-line">
    <div class="tit">
      <h3>咨询统计</h3>
    </div>
    <div class="intoLine-outer">
      <div class="intoLine-inner">
        <div id="myChartCon" style="width:3.48rem;height:3.44rem;margin: 0 auto;"></div>
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
        let myChart = this.$echarts.init(document.getElementById('myChartCon'))
        // 绘制图表
        // 指定图表的配置项和数据
        let option = {
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'horizontal',
            left: 'center',
            data: ['景区景点','景区数据','景区热点','景区路线','景区交通'],
            textStyle:{
                color:'#81b2ff'
            }
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:335, name:'景区景点'},
                {value:310, name:'景区数据'},
                {value:234, name:'景区热点'},
                {value:135, name:'景区路线'},
                {value:1548, name:'景区交通'}
              ],
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
    }
  }





</script>

<style scoped>
  .into-line{width:100%;height:4.11rem;color: #fff;}
  .intoLine-outer{height: 3.59rem;width: 100% ;background: #002d6a;border-radius: 4px;padding-top: .09rem;}
</style>
