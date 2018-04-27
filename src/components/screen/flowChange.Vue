<template>
  <div class="lf flowChange ml">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="flowChange-wrap">
      <div class="flowChange-inner">
          <div class="charts">
              <div id="myChart" style="width:4.51rem;height:3.29rem;margin: 0 auto;"></div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
  import title from '../title';
  export default {
    name: 'flowChange',
    data () {
      return {
        titlemsg:'近7日客流变化',
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        // 指定图表的配置项和数据
        var dataAxis = ['3-12', '3-13', '3-14', '3-15', '3-16', '3-17', '3-18'];
        var data = [2000, 1802, 1910, 2340, 2900, 3300, 5100];
        var yMax = 5000;
        var dataShadow = [];

        for (var i = 0; i < data.length; i++) {
          dataShadow.push(yMax);
        }

        var option =  {
          grid:{
            left:'12%',
            top:'15%',
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
              show: false
            },
            z: 10
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            },
            splitLine:{
              lineStyle:{
                type:'dashed',
                color:['#475e8f']  //网格线虚线
              }
            },
          },
          series: [{
            data:data,
            type: 'bar',
            itemStyle:{
              color:'#2e87ef'
            }
          }]};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    },
    components: {
      'title-h3': title
    }
  }



//  //以下是官网异步数据加载与更新的方法，会相对简单些。  只需要将数据填充进入就可以了。
//// 异步加载数据
//  $.get('data.json').done(function (data) {
//// 填入数据
//    myChart.setOption({
//      xAxis: {
//        data: data.categories
//      },
//      series: [{
//        // 根据名字对应到相应的系列
//        name: '销量',
//        data: data.data
//      }]
//    });

</script>

<style scoped>
  .flowChange{ height:3.99rem;width: 24.3%;}
  .flowChange-wrap{height:3.44rem;width: 100%; background:#002d6a;border-radius: 4px;padding-top: .09rem}
  .flowChange-inner{height: 3.34rem;width: 4.46rem;margin: 0 auto; background-color: #003885;border-radius: 4px;}
</style>
