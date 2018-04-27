<template>
    <div>
        <div class="lf new-notice ml">
            <title-h3 :titlemsg="titlemsg"></title-h3>
                <div class="newnotice-wrap">
                    <div class="wrap-notice">
                        <GeminiScrollbar class="content">
                        <ul>
                            <li v-for="(item,index) in items1" :key="index" :class="{tipnew: item.tnew}">
                                <div class="top-content clearfix">
                                    <h3 class="fl">{{item.ggContent}}</h3>
                                    <span class="tipnews lf">NEW</span>
                                </div>
                                <div class="clearfix bottom-content">
                                    <div class="lf w75">
                                        <p class="clearfix">
                                            <span class="lf">{{item.ggType}}</span>
                                            <span class="lf">{{item.ggName}}</span>
                                            <span class="lf">{{item.data}}</span>
                                            <span class="lf">{{item.times}}</span>
                                            <span class="lf">板块：{{item.ggPlate}}</span>
                                        </p>
                                    </div>
                                    <div class="rf">
                                        <div class="clearfix">
                                            <span class="eyes lf">1</span>
                                            <span class="rf">{{item.ggStatus}}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </GeminiScrollbar>
                </div>
            </div>
        </div>
        <div class="lf news-wrap ml">
            <title-h3 :titlemsg="titlemsg1"></title-h3>
            <div class="newnotice-wrap">
                <div class="newnotic-inner">
                <GeminiScrollbar class="content">
                <ul>
                    <li v-for="(item,index) in items" :key="index" :class="{tipnew: item.new}">
                        <div class="top-content clearfix">
                            <h3 class="fl">{{item.title}}</h3>
                            <a href="#" class="details rf">查看详情></a>
                        </div>
                            <div class="bottom-content">
                                <div class="clearfix new-datas">
                                    <div class="lf">{{item.department}}</div>
                                    <div class="lf">{{item.name}}</div>
                                    <div class="lf">{{item.data}}</div>
                                    <div class="lf">
                                        <div class="clearfix">
                                            <span class="eyes lf">1</span>
                                            <span class="rf">{{item.see}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </li>
                </ul>
                </GeminiScrollbar>
                </div>
            </div>
        </div>
        <div class="lf conference-wrap ml">
            <title-h3 :titlemsg="titlemsg2"></title-h3>
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
        <div class="lf mail-list mt12 ml">
            <title-h3 :titlemsg="titlemsg3"></title-h3>
            <div class="inner-wrapcontent">
                <div class="argument-warp">
                    <div class="clearfix">
                        <div class="lf lf-content">
                            <div class="search-wrap pr">
                                <input type="text" placeholder="搜索">
                                <span class="pa search-icon"></span>
                            </div>
                            <div class="search-partment">
                                <GeminiScrollbar class="content">
                                    <ul>
                                       <li>
                                           <div class="clearfix">
                                                <span class="lf arrows"></span>
                                                <span class="lf selet firstsels" :class="{selected:firstselect}" @click="allshow($event)"></span>
                                                <span class="lf companyname">{{companyname}}</span>
                                           </div>
                                           <ul class="secondTit">
                                               <li class="departments" v-for="(item,index) in departmentmsg" :key="index" >
                                                    <div class="clearfix firstdepart">
                                                        <span class="lf arrows"></span>
                                                        <span class="lf selet" :class="{selected:item.isselect}" @click="selectfn(index)"></span>
                                                        <span class="lf companyname">{{item.name}}</span>
                                                    </div>
                                               </li>
                                           </ul>
                                       </li>
                                    </ul>
                                </GeminiScrollbar>
                            </div>
                        </div>
                        <div class="lf lf-table">
                            <div class="inner-wrap">
                            <GeminiScrollbar class="content">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                    <th class="clearfix">
                                        <td width="17%">设备编号</td>
                                        <td width="11.5%">设备分类</td>
                                        <td width="11.5%">名称</td>
                                        <td width="14%">使用时间</td>
                                        <td width="13.2%">申请事由</td>
                                        <td width="13.4%">发起时间</td>
                                        <td width="18%">状态</td>
                                    </th>
                                    <tr class="clearfix"  v-for="(item,index) in argumentmsg" :key="index">
                                        <td width="17%">{{item.name}}</td>
                                        <td width="11.5%">{{item.startTime}}</td>
                                        <td width="11.5%">{{item.endTime}}</td>
                                        <td width="14%">{{item.address}}</td>
                                        <td width="13.2%">{{item.situsion}}</td>
                                        <td width="13.4%">{{item.state}}</td>
                                        <td width="18%">{{item.type}}</td>
                                    </tr>
                                </table>
                            </GeminiScrollbar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lf conference-wrap w326 ml mt12">
            <title-h3 :titlemsg="titlemsg4"></title-h3>
            <div class="inner-wrap">
                <div class="argument-warp">
                    <GeminiScrollbar class="content">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                            <th class="clearfix" >
                                <td width="17%">设备编号</td>
                                <td width="13.5%">设备分类</td>
                                <td width="15.5%">名称</td>
                                <td width="14%">使用时间</td>
                                <td width="14.2%">申请事由</td>
                                <td width="13.4%">发起时间</td>
                                <td width="10%">状态</td>
                            </th>
                            <tr class="clearfix"  v-for="(item,index) in arrshebei" :key="index">
                                <td width="17%">{{item.sbNumber}}</td>
                                <td width="13.5%">{{item.sbClassify}}</td>
                                <td width="15.5%">{{item.sbName}}</td>
                                <td width="14%">{{item.sbAddtime}}</td>
                                <td width="14.2%">{{item.sbContent}}</td>
                                <td width="13.4%">{{item.sbStartdate}}</td>
                                <td width="10%">{{item.sbStatus}}</td>
                            </tr>
                        </table>
                    </GeminiScrollbar>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import title from '../title'
import '../../assets/js/jquery-1.9.1.min.js'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import Vue from 'vue'
import axios from 'axios'
//配置默认的请求url
// Axios.defaults.baseURL = 'http://192.168.2.4:8080/publiccms-V4.0.20180210/';
// Axios.defaults.baseURL = 'http://localhost:3000/static/services/';
// Vue.prototype.$ajax = Axios;
export default {
  name: 'newNotice',
  data(){
    return {
      titlemsg:"最新公告",
      titlemsg1:"新闻",
      titlemsg2:"会议安排",
      titlemsg3:"通讯录",
      titlemsg4:'设备、车辆',
      items:[],
      items1:[],
      argumentmsg:[],
      companyname:'',
      firstselect:'',
      departmentmsg:[],
      arrshebei:[],
      num:0,
      id:null
    }
  },
  mounted(){
    this.change();
    this.change1();
    this.arguments();
    this.department();
    this.arrshebeis();
  },
  updated(){
    this.setattr();
    let liheight=$('.wrap-notice ul').height();
    let wrapH=$('.wrap-notice').height();
    $('.-vertical ').hide();
  },
  methods:{
    allshow(ev){
        this.firstselect=!this.firstselect;
        var arr=this.departmentmsg;
        var id=this.id;
        for(var i=0;i<arr.length;i++){
            arr[i].isselect=this.firstselect;
        }
    },
    selectfn(index){
        this.departmentmsg[index].isselect=!this.departmentmsg[index].isselect;
        if(this.departmentmsg[index].isselect==false){
            this.firstselect=false;
        }else if(this.num==this.departmentmsg.length-1){
            this.firstselect=true;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        }
        this.num=0;
        var arr=[];
        for(var i=0;i<this.departmentmsg.length;i++){
            if(this.departmentmsg[i].isselect===true){
                arr.push(this.departmentmsg[i].id);
                this.num++;
            }
        }
        // axios.post('http://192.168.2.4:8080/publiccms-V4.0.20180210/xtbg/getAllXtbgComdeptres?ids=[1,2]')
        //  .then(function (response){
        //     // var itemsg=eval(response.data.data);
        //     console.log(response)
        // })
    },
    change(){
        var that=this;
        that.$ajax.get('a.js')
        .then(function(response){
            var itemarr=eval(response.data);
            that.items=itemarr;
        })
    },
    change1(){
        var that = this;
        axios.get('http://192.168.2.4:8080/publiccms-V4.0.20180210/xtbg/xtbggglist')
        .then(function(response){
            // console.log(response.data.data);
            that.items1=response.data.data;
        })
    },
    arguments(){
        var that=this;
        that.$ajax.get('b.js')
        .then(function (response){
            var itemsg=eval(response.data);
            that.argumentmsg=itemsg;
        })
    },
    arrshebeis(){
        var that=this;
        axios.get('http://192.168.2.4:8080/publiccms-V4.0.20180210/xtbg/xtbgsblist')
        .then(function (response){
            var itemsg=eval(response.data.data);
            that.arrshebei=itemsg
        })
    },
    department(){
        var that=this;
        axios.get('http://192.168.2.4:8080/publiccms-V4.0.20180210/xtbg/xtbgcomdeptreList')
        .then(function (response) {
            var itemsg1= response.data.datatree[0];
            that.companyname=itemsg1.name;
            that.firstselect=itemsg1.isselect;
            that.id=itemsg1.id;
            that.departmentmsg=itemsg1.children;
        })
    },
    setattr(){
        var aDiv=$('.departments');
        aDiv.each(function(index,ele){
            (function(index){
                aDiv.eq(index).attr('number',aDiv.eq(index).find('.detailsli').length);
                aDiv.eq(index).attr('numbers',aDiv.eq(index).find('.detailsli').length);
            })(index)
        })
    }
  },
  components: {
    'title-h3': title
  }
}

</script>
<style scoped>
    .mail-list{width: 57.5%;height:3.99rem;}
    .mail-list .lf-content{width: 25.5%; height: 100%}
    .mail-list .search-wrap{width: 100%; height: .28rem;margin-top: .01rem;border-bottom: solid 1px #396fe9; background:#002d6a}
    .mail-list .search-wrap input{width: 95%;height: .28rem; line-height: .28rem; padding-left: 5%}
    .mail-list .search-icon{width: .16rem; height: .16rem;background: url(../../../static/images/ss.png);background-size: 100%;right: .1rem; top: .05rem}
    .mail-list .search-partment{height: 3rem;width: 100%; padding-top: .12rem; background: #0e4498;}
    .search-partment ul{margin-left: .12rem;}
    .search-partment ul li{line-height: .14rem; padding-top: .11rem; color: #fff}
    .mail-list .arrows{width: .08rem; height: .05rem; background: url(../../../static/images/arrow.png) no-repeat; background-size: 100%; margin-top: .04rem}
    .mail-list .selet{width: .12rem; height: .12rem; margin-left: .1rem; background: url(../../../static/images/kuang.png) no-repeat; background-size: 100%;  }
    .mail-list .selected{ background: url(../../../static/images/kselected.png) no-repeat; background-size: 100%; }
    .mail-list .companyname{ margin-left: .1rem}
    .mail-list .lf-table{width: 74.3%;}
    .inner-wrap{height: 3.33rem; width: 100%;background: #002d6a;border-radius: 4px;padding-top: .075rem;overflow-y: auto;overflow-x: hidden;}

    .conference-wrap{width: 40%;height:3.99rem;}
    .new-notice{ height:3.99rem;width: 24.3%;}
    .mail-list .inner-wrapcontent,.news-wrap .newnotice-wrap,.conference-wrap .inner-wrap,.newnotice-wrap{height:3.55rem;width: 100%; background:#002d6a;border-radius: 4px;padding-top: .075rem; overflow-y:auto; overflow-x: hidden}
    .mail-list .argument-warp,.conference-wrap .argument-warp,.wrap-notice{border: solid 1px #3b72ee;border-radius: 4px;width: 95%;margin: 0 auto;height: 3.42rem}
    .conference-wrap .argument-warp{width: 96%}
    .mail-list .argument-warp{width: 97%}
    .w326 .argument-warp{width: 95%}
    .wrap-notice ul li{height: .62rem;border-bottom: solid 1px #1c4aa3;margin:0 .13rem}
    .wrap-notice .top-content{padding-top: .15rem; color: #81b2ff;}
    .wrap-notice .top-content h3{ font-size: .16rem; font-weight: 100;height: .2rem;width: 88%; overflow: hidden;}
    .wrap-notice ul li .tipnews{display: none;}
    .wrap-notice ul li:nth-child(1){margin-top: 0.065rem}
    .wrap-notice ul li.tipnew .tipnews{background: #ffd452;display: block; color: #0e3883;font-size: .11rem;border-radius: 4px;margin-left: .06rem;}
    .wrap-notice .bottom-content{color: #1463de;margin-top: 0.05rem; height: .2rem;overflow: hidden}
    .w75{width: 87%}
    .bottom-content p span{margin-right: 0.1rem}
    .news-wrap{ height:3.99rem;width: 32.7%;}
    .news-wrap .newnotic-inner{height: 3.4rem;width: 96%;margin: 0 auto;border: solid 1px #3b72ee;border-radius: 4px;}
    .news-wrap .newnotic-inner ul li{height: .62rem;border-bottom: solid 1px #1c4aa3;margin:0 .13rem}
    .news-wrap .newnotic-inner .top-content{padding-top: .15rem; color: #81b2ff;}
    .news-wrap .newnotic-inner .top-content h3{ font-size: .16rem;font-weight:100}
    .news-wrap .newnotic-inner ul li .tipnews{display: none;}
    .news-wrap .newnotic-inner ul li:nth-child(1){margin-top: 0.065rem}
    .news-wrap .newnotic-inner .details{color:#81b2ff}
    .news-wrap .newnotic-inner .details:hover{color: #ffd452}
    .news-wrap .newnotic-inner .bottom-content{color: #1463de;margin-top: 0.05rem; height: .2rem;overflow: hidden}
    .news-wrap .bottom-content p span{margin-right: 0.1rem}
    .new-datas>div{margin-right:.1rem }
    .w326{width: 40%}
</style>
