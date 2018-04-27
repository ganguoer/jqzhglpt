<template>
  <div class="lf marketingci ml">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="marketingci-wrap">
      <div class="marketingci-inner">
        <div id="myChartKey" style="width:100%;height:100%;"></div>
      </div>
    </div>
  </div>

</template>

<script>
  import title from '../title';
  import 'echarts-wordcloud/dist/echarts-wordcloud.js';
  export default{
    name:'keyWord',
    data(){
      return{
        titlemsg:'景区关键词'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartKey'));
        // 绘制图表
        // 指定图表的配置项和数据
        var option = {
          tooltip: {},
          series: [ {
            type: 'wordCloud',
            gridSize: 2,
            sizeRange: [18, 30],
            rotationRange: [-10, 190],
            shape: 'pentagon',
            width: 1400,
            height: 1000,
            drawOutOfBound: true,
            textStyle: {
              normal: {
                color: function () {
                  return 'rgb(' + [
                      Math.round(Math.random() * 200),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: [
              {
                name: '九寨沟',
                value: 10000,

//                textStyle: {
//                  normal: {
//                    color: '#ef4c81'
//                  },
////                  emphasis: {
////                    color: 'red'
////                  }
//                }
              },
              {
                name: '驴友',
                value: 6181
              },
              {
                name: '篝火晚会',
                value: 4386
              },
              {
                name: '海景别墅',
                value: 4055
              },
              {
                name: '旅游客体',
                value: 2467
              },
              {
                name: '土耳其',
                value: 2244
              },
              {
                name: '国内游',
                value: 1898
              },
              {
                name: '景区热点',
                value: 1484
              },
              {
                name: '旅游攻略',
                value: 1112
              },
              {
                name: '四川',
                value: 965
              },
              {
                name: '云南',
                value: 847
              },
              {
                name: '长白山',
                value: 582
              },
              {
                name: '自驾游',
                value: 555
              },
              {
                name: '大海',
                value: 550
              },
              {
                name: 'TOP10',
                value: 462
              },
              {
                name: '世界上最浪漫的春天',
                value: 366
              },
              {
                name: '投诉建议',
                value: 360
              },
              {
                name: '热门娱乐项目',
                value: 282
              },
              {
                name: '购物',
                value: 273
              },
              {
                name: '旅游评价',
                value: 265
              },
              {
                name: '安心出游',
                value: 866
              },
              {
                name: '夏季避暑',
                value: 760
              },
              {
                name: '大熊猫',
                value: 682
              },
              {
                name: '泸沽湖',
                value: 1523
              },
              {
                name: '热门娱乐',
                value: 465
              }
            ]
          } ]
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
  .marketingci{ height:4.14rem;width: 24.3%;}
  .marketingci-wrap{height:3.64rem;width: 100%; background:#002d6a;border-radius: 4px;padding-top: .09rem}
  .marketingci-inner{width:97%;height: 3.54rem;background-color: #173881;border-radius: 4px;margin: 0 auto;}
</style>
