<template>
    <div>
        <div class="source-complaint ml lf">
          <title-h3 :titlemsg="titlemsg"></title-h3>
          <div class="content-wrap">
            <div class="inner-content-wrap">
              <div id="myChart" style="width:96%;height:3rem;margin: 0 auto;"></div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import title from '../title'
export default {
  name: 'sourceComplaint',
  data(){
    return {
      titlemsg:"投诉来源"
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
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        // 指定图表的配置项和数据
        var i=0;
        var colors=['#c4a7ce','#8ebbe5','#a7d17d','#5ea5da','#f29e9e'];
        var option = {
          title : {
            text: '2018年投诉来源分析',
            x:'left',
            textStyle:{
             color:'#fff',
             fontWeight: '100',
             fontSize: 16
            }
          },
          legend: {
            orient: 'vertical',
            left: '75%',
            top:'10%',
            itemGap:22,
            itemHeight:15,
            itemwidth:31,
            data: ['12306','网络','电话','来访','图片'],
            textStyle:{
              color:'#fff'
            }
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '87%',
              center: ['40%', '52%'],
              data:[
                {value:335, name:'12306'},
                {value:310, name:'网络'},
                {value:234, name:'电话'},
                {value:135, name:'来访'},
                {value:348, name:'图片'}
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
                normal : {
                  color:function(){
                    return colors[i++];
                  },
                  labelLine : {
                    show : false
                  }
                },
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }

            }
          ]
        }
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
  .source-complaint{width: 32.7%;height:4.06rem;}
  .content-wrap{width: 100%; height: 3.53rem; margin-top: 0.03rem; background: #002c6a; border-radius: 4px; padding-top: .1rem}
  .content-wrap .inner-content-wrap{width: 97%; margin: 0 auto; height: 3.43rem; background: #0e3883}
  #myChart{width: 96%; margin: 0 auto;height:3rem; padding-top:.215rem; overflow: hidden}
</style>
