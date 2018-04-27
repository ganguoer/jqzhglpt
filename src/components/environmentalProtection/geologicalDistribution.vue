<template>
    <div>
        <div class="environmental geological-distribution ml lf mt12">
          <title-h3 :titlemsg="titlemsggeological"></title-h3>
          <div class="innerwrap">
            <div class="water-echart">
              <div class="plant-table">
                    <GeminiScrollbar class="content">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                            <th class="clearfix">
                                <td width="49.6%">地质类型</td>
                                <td width="50%">分布情况</td>
                            </th>
                            <tr class="clearfix"  v-for="(item,index) in argumentmsgw" :key="index">
                                <td width="49.6%" class="clearfix"><span class="lf sele-tip" @click="onsomething(index)" :class="{seletiped:index == num}"></span><span>{{item.type}}</span></td>
                                <td width="50%">{{item.name}}</td>
                            </tr>
                        </table>
                    </GeminiScrollbar>
                </div>
                <div class="img-photo"><img :src="imgsrc"></div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import title from '../title'
import axios from 'axios'
import '../../assets/js/jquery-1.9.1.min.js'
import Vue from 'vue'
import GeminiScrollbar from 'vue-gemini-scrollbar'
export default {
  name: 'waterQuality',
  data(){
    return {
      titlemsggeological:"景区地质分布",
      argumentmsgw:[],
      select:false,
      num:0,
      imgsrc:'../../../static/images/3.png'
    }
  },
  created(){
  },
  mounted(){
    this.arguments();
  },
  updated(){
  },
  methods:{
    arguments(){
        var that=this;
        axios.get('../../static/services/f.js')
        .then(function (response){
            var itemsg=eval(response.data);
            that.argumentmsgw=itemsg;
        })
    },
    onsomething(index){
        this.num=index;
        var imgs=this.argumentmsgw[index].imgs;
        this.imgsrc=imgs
    }
  },
  components: {
    'title-h3': title
  }
}

</script>
<style scoped>
  .geological-distribution{width: 24.3%;height:4.23rem;}
  .geological-distribution .innerwrap{width:100%; margin:0 auto; height: 3.56rem; background: #002d6a; border-radius: 4px; margin-top: 0.03rem; padding-top: .1rem}
  .geological-distribution .water-echart{width:96%;margin:0 auto;height: 3.36rem; background: #173881; padding-top: .1rem}
</style>
