<template>
  <div class="lf heatMap ml">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="heatMap-wrap">
      <div class="heatMap-inner">
        <div class="charts">
          <div id="map"></div>
          <canvas id="canvas" ></canvas>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import title from '../title';

  export default {
    name: 'heatMap',
    data () {
      return {
        titlemsg:'游客分布热力图'
      }
    },
    mounted (){
      this.drawLine();
      console.log("enter mounted ...");
      console.log("coordtransform:"+window.coordtransform);
    },
    methods:{
      drawLine(){
        // console.log(require);
        console.log("enter drawLine ...");


        // 百度地图API功能
        var map = new BMap.Map("map", {
          enableMapClick: false
        });
        console.log(map);
        // 创建Map实例
        map.centerAndZoom(new BMap.Point(100.80065,27.709689), 12);  // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

        map.setMapStyle({
          style: 'midnight'
        });

        var randomCount = 3000;

        function grenDig(len){
          var num = Math.random() + "";
          return num.substr(2,len);
        }
        /**@argument 在 latlng处 随机产生num个坐标点
         * @return  坐标点数组
         */
        function genRandomPoint(point,total){
          let size = 20;
          let num = total || 300;
          let scale = num * 2;

          let ptArray = [];

          while(num--){
            let lat = point.lat;
            let lng = point.lng;

            lat = lat + "";
            lng = lng + "";

            lat = lat.substring(0,4);
            lat = lat + grenDig(4);

            lng = lng.substring(0,4);
            lng = lng + grenDig(4);

            ptArray.push({
              lng: parseFloat(lng),
              lat: parseFloat(lat)
            });
          }
          return ptArray;
        }


        var city = [
          {
            lng:"100.788723",
            lat:"27.708434"
          },
          {
            lng:"100.78563",
            lat:"27.725679"
          },
          {
            lng:"100.782396",
            lat:"27.725615"
          },
          {
            lng:"100.806758",
            lat:"27.724144"
          },
          {
            lng:"100.792816",
            lat:"27.7393"
          },
          {
            lng:"100.790373",
            lat:"27.717876"
          },
          {
            lng:"100.827455",
            lat:"27.688963"
          },
          {
            lng:"100.807764",
            lat:"27.716565"
          }
        ];



        $.getJSON("../../static/services/data.json",function(datas){
          city = datas;


          var len = city.length;
          var data = [];
          while(len--){

            data.push({
              geometry: {
                type: 'Point',
                coordinates: [city[len].lng,city[len].lat]
              },
              type: "Point"
            });
          }

          var dataSet = new mapv.DataSet(data);
          var options = {
            fillStyle: 'rgba(180, 80, 80, 0.2)',
            size: 1,
            draw: 'simple'
          }

          var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);
          //  require(["./assets/js/mapv.js"],function(mapv){
          //                  var dataSet = new mapv.DataSet(data);

          //    var options = {
          //      fillStyle: 'rgba(180, 80, 80, 0.2)',
          //      size: 1,
          //      draw: 'simple'
          //    }

          //    var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);
          //  });

        });

      }
    },
    components: {
      'title-h3': title
    }
  }

</script>

<style scoped>
  .heatMap{ height:3.99rem;width: 24.3%;}
  .heatMap-wrap{height:3.44rem;width: 100%; background:#002d6a;border-radius: 4px;padding-top: .09rem}
  .heatMap-inner{height: 3.34rem;width: 4.46rem;margin: 0 auto; background-color: #003885;border-radius: 4px;}
  #map {
    width: 100%;
    height: 100%;
    overflow: visible !important;
  }

  .charts{
    width:4.49rem;
    margin: 0 auto;
    height:100%;
    overflow: hidden;
    height: 3.33rem;
  }
</style>
