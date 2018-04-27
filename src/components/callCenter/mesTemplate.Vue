<template>
  <div class="mesTemplate">
    <div class="tit clearfix">
      <h3 class="fl">短信模板</h3>
      <div class="fr rinput">
        <input type="text" placeholder="请输入查找内容" v-model="knowledge">
        <span class="icon-search"></span>
      </div>
    </div>
    <div class="inner-wrap">
      <div class="argument-warp">
        <GeminiScrollbar class="content">
          <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <th class="clearfix">
            <td width="17%">会议名称</td>
            <td width="11.5%">开始时间</td>
            <td width="11.5%">结束时间</td>
            <td width="14%">会议地点</td>
            <td width="13.2%">发布情况</td>
            <td width="13.5%">会议状态</td>
            <td width="18%">会议类型</td>
            </th>
            <tr class="clearfix"  v-for="(item,index) in argumentmsg" :key="index">
              <td width="17%">{{item.name}}</td>
              <td width="11.5%">{{item.startTime}}</td>
              <td width="11.5%">{{item.endTime}}</td>
              <td width="14%">{{item.address}}</td>
              <td width="13.2%">{{item.situsion}}</td>
              <td width="13.5%">{{item.state}}</td>
              <td width="18%">{{item.type}}</td>
            </tr>
          </table>
        </GeminiScrollbar>
      </div>
    </div>
  </div>

</template>

<script>
  import '../../assets/js/jquery-1.9.1.min.js'
  export default{
    name:'mesTemplate',
    data(){
      return{
        knowledge:'',
        argumentmsg:[]
      }
    },
    mounted(){
      this.arguments();
    },
    methods:{
      arguments(){
        var that=this;
        that.$ajax.get('b.js')
          .then(function (response){
//            console.log(response.data+'-------------------')
            var itemsg=eval(response.data);
            that.argumentmsg=itemsg;
          })
      }
    }
  }

</script>

<style scoped>
  .rinput{margin-right: 0.1rem;}
  .rinput input{width:1.81rem;height: 0.26rem;border: 1px solid #fff;border-radius: 5px;background: #0e4498;color: #fff;padding-left: 0.1rem;font-size: 0.12rem;}
  .rinput span{font-size: 0.16rem;position: absolute;right:0.15rem;top: 0.12rem;}
  .mesTemplate{width:100%;height:2.48rem;color: #fff;margin-top: 0.12rem;}
  .mesTemplate .inner-wrap{height: 2rem;width: 100%;background: #002d6a;border-radius: 4px;padding-top: .09rem;overflow-y: hidden; overflow-x: hidden}
  .mesTemplate .argument-warp{height: 1.84rem;width: 98%;border-radius: 4px;margin: 0 auto;overflow: hidden;border: solid 1px #3b72ee;}
</style>
