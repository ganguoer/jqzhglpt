<template>
    <div>
        <div class="patrol-information ml lf ">
          <title-h3 :titlemsg="titlemsg"></title-h3>
          <div class="contents-wrap">
            <div class="lf globalGraph">
              <div class="top-img"><img src="../../../static/images/ti.jpg"></div>
              <p class="text">景区全局图</p>
            </div>
            <div class="rf patrol-mssage">
                <div class="innermsg">
                  <ul>
                    <li class="clearfix" v-for="(item,index) in patrol" :key="index">
                      <span class="lf times-txt">{{item.tit}}</span>
                      <span class="lf times-num">{{item.detail}}</span>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import title from '../title'
import axios from 'axios'
export default {
  name: 'patrolInformation',
  data(){
    return {
      titlemsg:"巡护信息报告",
      patrol:[]
    }
  },
  mounted(){
    this.patromsg();
  },
  updated(){

  },
  methods:{
     patromsg(){
        var that=this;
        axios.get('../../static/services/g.js')
        .then(function (response){
            var itemsg=eval(response.data);
            that.patrol=itemsg;
        })
    }
  },
  components: {
    'title-h3': title
  }
}

</script>
<style scoped>
  .patrol-information{width: 49.1%;height:3.96rem;}
  .patrol-information .contents-wrap{width: 100%; height: 3.53rem; margin-top: 0.03rem; padding-top: 0}
  .patrol-information .globalGraph{width: 40%; height: 3.53rem; background: #0e3883; border-radius: 4px;}
  .patrol-information .globalGraph .text{text-align: center;padding-top: .1rem; color: #fff}
  .patrol-mssage{width:58.8%;height: 3.53rem; background: #002d6a; border-radius: 4px;}
  .patrol-mssage .innermsg{width: 96%; margin:0 auto; border-radius: 3px;height:3.33rem;margin-top: .1rem; overflow: hidden}
  .patrol-mssage .innermsg li{color: #75abff;height:.36rem; line-height: .36rem; overflow: hidden; margin-bottom: 1px}
  .patrol-mssage .innermsg li:last-child{margin-bottom: none}
  .patrol-information .top-img{width: 98%;height: 3.02rem; margin:0 auto; margin-top: .1rem;}
  .patrol-information .top-img img{width: 100%}
  .patrol-information .times-txt{width: 32.8%; background: #0e4498;  text-align: right; padding-right:.15rem; margin-right:.01rem }
  .patrol-information .times-num{background: #0e3883; width: 59.2%; padding-left: .26rem}
  .patrol-mssage .innermsg li:nth-child(1) .times-txt{border-radius:4px 0 0 0}
  .patrol-mssage .innermsg li:nth-child(1) .times-num{border-radius:0 4px 0 0}
</style>
