<template>
  <div class="lf marketing ml mtt">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="marketing-wrap">
      <div class="marketing-inner">
        <div id="myChartConsump" style="width:100%;height:100%;"></div>
      </div>
    </div>
  </div>

</template>

<script>
  import title from '../title';
  export default{
    name:'consumption',
    data(){
      return{
        titlemsg:'消费内容'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartConsump'));
        // 绘制图表
        // 指定图表的配置项和数据
        var  option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['购物','餐饮','门票'],
            textStyle:{ //图例字体颜色
              color:'#fff'
            },
            top:'6%',
            left:'5%'
          },
          series: [
            {
              name:'消费内容',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:335, name:'购物'},
                {value:310, name:'餐饮'},
                {value:234, name:'门票'}
              ]
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
