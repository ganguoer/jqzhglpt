<template>
    <div>
        <div class="lf category-wraps w326 ml mt12">
            <title-h3 :titlemsg="titlemsg4"></title-h3>
            <div class="inner-wrap">
                <div class="argument-warp">
                    <div class="fl" id="myChart2" style="width:50%;height:3rem;margin: 0 auto;"></div>
                    <div class="fl" id="progress" style="width:40%;height:3rem;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import title from '../title'
export default {
  name: 'complaintCategory',
  data(){
    return {
      titlemsg4:'投诉类别'
    }
  },
  mounted(){
      this.drawLine();
      this.drawLineProgess();
  },
  updated(){
  },
  methods:{
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart2'));
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
             fontSize: 13
            }
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '67%',
              center: ['40%', '52%'],
              data:[
                {value:335, name:'非法一日游'},
                {value:310, name:'购物'},
                {value:234, name:'其他'},
                {value:135, name:'住宿设施'},
                {value:348, name:'旅游景区'}
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
    },
    drawLineProgess(){
        let myChart=this.$echarts.init(document.getElementById('progress'));
        var data = [53, 85, 60, 45, 53];
        var xMax = 100;
        var option = {
            backgroudColor:'#fff',
            tooltip: {
                show: true,
                formatter: "{b} {c}%"
            },

            xAxis: [{
                axisTick: {
                    show: false,
                    color:'#fff',
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                    color:'#fff',
                },
                splitLine: {
                    show: false,
                    color:'#fff',
                }
            }],
            yAxis: [{
                type: 'category',
                data: ['非法一日游', '购物', '其他', '住宿设施','旅游景区' ],
                axisTick: {
                    color:'#fff',
                    show: false,
                },
                axisLine: {
                    color:'#fff',
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            }],
            series: [
                {
                name: ' ',
                type: 'bar',
                barWidth: 13,
                silent: true,
                itemStyle: {
                    normal: {
                        color: '#fff',
                        barBorderRadius: [0, 5, 5, 0],
                    }
                },
                barGap: '-100%',
                barCategoryGap: '50%',
                data:[100,100,100,100,100]
            },
            {
                name: ' ',
                type: 'bar',
                barWidth: 13,
                label: {
                    normal: {
                        position: 'top',
                        formatter: '{c}%',
                    }
                },
                data: [{
                    value: 53,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: {
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: '#c4a7ce' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#c4a7ce' // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                },
                {
                    value: 53,
                    itemStyle: {
                        // normal:{color:'#b250ff',barBorderRadius:[0,10,10,0],}
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: {
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: '#8ebbe5' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#8ebbe5' // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                },
                {
                    value: 93,
                    itemStyle: {
                        // normal:{color:'#4bf3ff',barBorderRadius:[0,10,10,0],  },
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: {
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: '#a7d17d' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#a7d17d' // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            }
                        }

                    }
                },
                {
                    value: 53,
                    itemStyle: {
                        // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: {
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: '#5ea5da' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#5ea5da' // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                },
                {
                    value: 90,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 10, 10, 0],
                            color: {
                                type: 'bar',
                                colorStops: [{
                                    offset: 0,
                                    color: '#f29e9e' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#f29e9e' // 100% 处的颜色
                                }],
                                globalCoord: false, // 缺省为 false

                            }
                        }
                    }
                }
                ]
            }]
        };

        myChart.setOption(option);
    }
  },
  components: {
    'title-h3': title
  }
}

</script>
<style scoped>
    .category-wraps .inner-wrap{height: 3.33rem; width: 100%;background: #002d6a;border-radius: 4px;padding-top: .075rem;overflow:hidden}
    .category-wraps{width: 40%;height:3.99rem;}
    .category-wraps .argument-warp{width: 96%}
    #myChart2{width: 50%; margin: 0 auto;height:3rem; padding-top:.215rem; overflow: hidden}
    #progress{width:40%; margin-left: 5%}
    .w326{width:32.6%}
    </style>
