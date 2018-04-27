<template>
  <div class="lf marketing ml mtt">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="marketing-wrap">
      <div class="marketing-inner">
        <div id="myChartLine" style="width:100%;height:100%;"></div>
      </div>
    </div>
  </div>

</template>

<script>
  import title from '../title';
  export default{
    name:'travelLine',
    data(){
      return{
        titlemsg:'旅游线路'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartLine'))
        // 绘制图表
        // 指定图表的配置项和数据
         var option = {
            tooltip : {
              trigger: 'axis'
            },
           grid:{
             left:'12%',
             top:'20%',
             bottom:'12%',
             right:'12%'
           },
            legend: {
              data:['环湖线路','踏春线路'],
              textStyle:{
                  color:'#fff'
              },
              top:'6%',
              left:'25%'
            },
            xAxis : [
              {
                type : 'category',
                axisLabel: {
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
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
              }
            ],
            yAxis : [
              {
                type : 'value',
                axisLabel: {
                  textStyle: {
                    color: '#fff'
                  }
                },
                axisTick: {  //轴上的刻度线
                  show: false
                },
                axisLine: {
                  show: true,
                  lineStyle:{
                    color:'#637eaf'
                  }
                },
              },
            ],
            series : [
              {
                name:'环湖线路',
                type:'bar',
                data:[200, 400, 100, 1630, 250, 700, 1305, 592, 32, 1800, 60, 30],
                itemStyle: {
                  color:'#ba40ec'
                },
                markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                  ]
                },
                markLine : {
                  data : [
                    {type : 'average', name: '平均值'}
                  ]
                }
              },

              {
                name:'踏春线路',
                type:'bar',
                itemStyle: {
                  color:'#f3a54f'
                },
                data:[205, 500, 900, 26, 28, 70, 175, 182, 48, 18, 6, 2],
                markPoint : {
                  data : [
                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                  ]
                },
                markLine : {
                  data : [
                    {type : 'average', name : '平均值'}
                  ]
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
