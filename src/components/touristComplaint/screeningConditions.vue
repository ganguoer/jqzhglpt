<template>
  <div>
      <div class="lf screen-wrap ml mt12">
            <div class="tits-h3 clearfix">
                <div class="lf">
                    <div class="clearfix mlnumber">
                        <span class="lf">筛选条件：</span>
                        <div class="pr lf">
                            <input class="input-txt" type="text" placeholder="请输入查找内容"/>
                            <span class="pa searchs"></span>
                        </div>
                        <span class="lf customer-person com-sel">散客</span>
                        <span class="lf customer-time com-sel">时间</span>
                        <span class="lf mlnewnum">筛选条件：</span>
                        <div class="pr lf">
                            <input class="input-txt" type="text" placeholder="请输入查找内容"/>
                            <span class="pa searchs"></span>
                        </div>
                        <span class="lf customer-person com-sel">散客</span>
                        <span class="lf customer-time com-sel">时间</span>
                    </div>
                </div>
            </div>
            <div class="newnotice-wraps">
                <div class="newnotic-inner">
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
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'screeningConditions',
    data(){
        return {
            argumentmsg:[]
        }
    },
    mounted(){
        this.arguments();
    },
    methods:{
        arguments(){
            var that=this;
            axios.get('../../static/services/b.js')
            .then(function (response){
                var itemsg=eval(response.data);
                that.argumentmsg=itemsg;
            })
        }
    }
}
</script>
<style scoped>
.screen-wrap .tits-h3{width: 100%;height: 0.4rem;line-height: 0.4rem;background-color: #0e4498;font-size: 0.14rem;
    color: #fff;border-radius: 0.04rem; position: relative;margin-bottom: 0.02rem;}
.screen-wrap{ height:3.33rem;width: 65.4%;}
.screen-wrap .searchs{width:16px; height: 16px; background: url(../../../static/images/ss.png) no-repeat;position: absolute; right:.09rem; top: .09rem}
.com-sel{width:.66rem; height: .28rem; line-height: .28rem; text-align: center;border: solid 1px #fff;border-radius:4px;margin-top: .06rem}
.customer-person{margin-left:.16rem;}
.customer-time{margin-left: .06rem}
.screen-wrap .newnotic-inner{height: 3.2rem;width: 98%;margin: 0 auto;border: solid 1px #3b72ee;border-radius: 4px; }
.screen-wrap .newnotic-inner ul li{height: .62rem;border-bottom: solid 1px #1c4aa3;margin:0 .13rem}
.screen-wrap .newnotic-inner .top-content{padding-top: .15rem; color: #81b2ff;}
.screen-wrap .newnotic-inner .top-content h3{ font-size: .16rem;font-weight:100}
.screen-wrap .newnotic-inner ul li .tipnews{display: none;}
.screen-wrap .newnotic-inner ul li:nth-child(1){margin-top: 0.065rem}
.screen-wrap .newnotic-inner .details{color:#81b2ff}
.screen-wrap .newnotic-inner .details:hover{color: #ffd452}
.screen-wrap .newnotic-inner .bottom-content{color: #1463de;margin-top: 0.05rem; height: .2rem;overflow: hidden}
.screen-wrap .bottom-content p span{margin-right: 0.1rem}
.screen-wrap .mlnumber{margin-left:.2rem;}
.screen-wrap .input-txt{margin-left:.12rem;width: 1.54rem; padding-left: .08rem; height: .28rem;border:solid 1px #fff; border-radius:4px; margin-top:.04rem}
.screen-wrap .mlnewnum{margin-left: .4rem}
.newnotice-wraps{ height: 3.33rem;width: 100%;background: #002d6a; border-radius: 4px;padding-top: .075rem; overflow: hidden;}
</style>

