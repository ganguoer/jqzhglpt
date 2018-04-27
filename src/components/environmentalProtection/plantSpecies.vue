<template>
    <div>
        <div class="environmental plant-species ml lf mt12">
          <title-h3 :titlemsg="titlemsgplant"></title-h3>
          <div class="innerwrap">
            <div class="water-echart">
                <div class="plant-table">
                    <GeminiScrollbar class="content">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                            <th class="clearfix">
                                <td width="33.3%">植物类别</td>
                                <td width="33%">植物名称</td>
                                <td width="33%">物种介绍</td>
                            </th>
                            <tr class="clearfix"  v-for="(item,index) in argumentmsgf" :key="index">
                                <td width="33.3%" class="clearfix"><span class="lf sele-tip" @click="onsomething(index)" :class="{seletiped:index == num}"></span><span>{{item.type}}</span></td>
                                <td width="33%">{{item.name}}</td>
                                <td width="33%">{{item.introduce}}</td>
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
      titlemsgplant:"景区植物种类",
      argumentmsgf:[],
      select:false,
      num:0,
      imgsrc:'../../../static/images/1.png'
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
        axios.get('../../static/services/d.js')
        .then(function (response){
            var itemsg=eval(response.data);
            that.argumentmsgf=itemsg;
        })
    },
    onsomething(index){
        this.num=index;
        var imgs=this.argumentmsgf[index].imgs;
        this.imgsrc=imgs
    }
  },
  components: {
    'title-h3': title
  }
}

</script>
<style scoped>
  .plant-species{width: 24.5%;height:4.23rem;}
  .plant-species .innerwrap{width:100%; margin:0 auto; height: 3.56rem; background: #002d6a; border-radius: 4px; padding-top:.1rem; margin-top: 0.03rem;}
  .plant-species .water-echart{width:96%;margin:0 auto;height: 3.36rem; background: #173881;padding-top: .1rem;}


</style>
