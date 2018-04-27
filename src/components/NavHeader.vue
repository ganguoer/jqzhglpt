<template>
  <div>
    <div class="top-warp">
      <div class="grid-content topheader">
        <img class="logo1" src="../../static/images/logo1.png" alt="">
        <div class="title">景区综合管理平台</div>
        <div class="time">今天是2018年4月23日</div>
      </div>
      <div class="header-nav">
        <ul class="clearfix">
          <li v-for="(item,index) in datas" :key="index" @click="changeBg(index)" :class="{libg: index == curIndex}">
            <router-link :to="item.route">
              <div class="pr navli">
                <i class="pa" :class="[item.class]"></i>
                <p>{{item.title}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"NavHeader",
    data(){
      return {
        datas:[
          {
            title:'综合大屏',
            class: 'icon-a1',
            route:'/screen'
          },
          {
            title:'视频监控',
            class: 'icon-a2',
            route:'/video'
          },
          {
            title:'旅游大数据',
            class: 'icon-a3',
            route:'/dataV'
          },
          {
            title:'营销分析',
            class: 'icon-a4',
            route:'/marketing'
          },
          {
            title:'应急管理',
            class: 'icon-a5',
            route:'/emergencyManage'
          },
          {
            title:'景区地图',
            class: 'icon-a6',
            route:'/scMap'
          },
          {
            title:'协同办公',
            class: 'icon-a7',
            route:'/synergeticOffice'
          },
          {
            title:'旅游投诉',
            class: 'icon-a8',
            route:'/touristComplaint'
          },
          {
            title:'环境保护',
            class: 'icon-a9',
            route:'/environmentalProtection'
          },
          {
            title:'呼叫中心',
            class: 'icon-a10',
            route:'/callCenter'
          },
          {
            title:'信息发布',
            class: 'icon-a11',
            route:'/infoRelease'
          },
          {
            title:'应用后台',
            class: 'icon-a12',
            route:'/backstageApplication'
          }
        ],
        curIndex:0
      }
    },
    methods:{
      changeBg(index){
        this.curIndex = index;
      }
    }
  }
</script>
<style scoped>
  .topheader{height: 1rem; line-height: 1rem;width: 100%;background-image: linear-gradient(top, #3b72ee, #012352);background-image: -o-linear-gradient(top, #3b72ee, #012352);
    background-image: -moz-linear-gradient(top, #3b72ee, #012352);
    background-image: -webkit-linear-gradient(top, #3b72ee, #012352);
  }
  .logo1{width: 1.4rem;float: left;margin-top: .32rem;padding-left: .5rem;}
  .title{font-size: .22rem;color: #fff;float: left;margin-left: .2rem;}
  .time{font-size: .16rem;color: #fff;float: right;padding-right: .5rem;}
  .header-nav{width:100%;height:.96rem;overflow: hidden}
  .header-nav ul li{width:8.325%;background: #3b72ee; float: left; height: .94rem;cursor: pointer;border-bottom: solid 1px #012352;border-top: solid 1px #012352}
  .header-nav .navli{border-left: solid 2px #012352;height: .94rem;text-align: center}
  .header-nav .navli p{padding-top:.58rem;text-align: center; color: #fff;font-size: .16rem}
  .navli .pa{font-size:0.36rem;color: #fff;left:50%;top: .18rem;margin-left: -.2rem;}
  .header-nav ul li.libg{
    background: -webkit-linear-gradient(#05459c, #012352);
    background: -o-linear-gradient(#05459c, #012352);
    background: -moz-linear-gradient(#05459c, #012352);
    background: linear-gradient(#05459c, #012352);
    height:.9rem;
    border-top: solid 0.04rem #ffd452;
  }
</style>

