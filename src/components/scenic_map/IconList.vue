
<template>
    <div class="spot-nav" >
        <ul class="Icons" :style="styles">
            <li  class="Icon" v-for="item in icons" :key=item.id>
                <div class="Icon-box">
                    <span v-on:click = "clickType(item)" class="block Icon-box-icon" :class="[item.order == isActive ? 'active':'',item.icon]"></span>
                    <span class="block Icon-box-font" :class="[item.order == isActive ? 'font-active':'']">{{item.name}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      styles:{
          width:"100%",
          margin:"0 auto"
       },
      state:1,
      isActive:1,
      icons: [
          {
              icon:"icon-shijian",
              name:"事件",
              id:"shijian",
              order:1
          },
          {
              name:"拥挤度",
              icon:"icon-yongjidu",
              id:"yongjidu",
              order:2
          },
          {
              name:"广播",
              icon:"icon-guangbo",
              id:"guangbo",
              order:3
          },
          {
              name:"热点",
              icon:"icon-redian",
              id:"redian",
              order:4
          },
          {
              name:"景点",
              icon:"icon-jingdian",
              id:"jingdian",
              order:5
          },
          {
              name:"服务区",
              icon:"icon-fuwuqu",
              id:"fuwuqu",
              order:6
          },
          {
              name:"停车场",
              icon:"icon-tingchechang",
              id:"shiping",
              order:7
          },
          {
              name:"厕所",
              icon:"icon-cesuo",
              id:"cesuo",
              order:8
          },
          {
              name:"卫生所",
              icon:"icon-weishengsuo",
              id:"weishengsuo",
              order:9
          },
          {
              name:"巡查人员",
              icon:"icon-xuncha",
              id:"xuncha",
              order:10
          },
          {
              name:"车辆",
              icon:"icon-cheliang",
              id:"cheliang",
              order:11,
          },
          {
              name:"物资",
              icon:"icon-wuzi",
              id:"wuzi",
              order:12
          },
          {
              name:"交通站点",
              icon:"icon-jiaotongzhandian",
              id:"jiaotongzhandian",
              order:13
          },

          {
              name:"闸机",
              icon:"icon-zhaji",
              id:"zhaji",
              order:14
          },
          {
              name:"环保监测",
              icon:"icon-huanbao",
              id:"huanbao",
              order:15
          }
          ,{
              name:"光钎管网",
              icon:"icon-guangqian",
              id:"guangqian",
              order:16
          },
          {
              name:"LED屏",
              icon:"icon-led",
              id:"led",
              order:17
          }
      ]
    }
  },
  beforeMount:function(){

  },
  mounted:function(){
    var length = this.icons.length;
    var el = this.$el.firstElementChild.firstElementChild;
    var amount = length*el.clientWidth;

    this.styles.width  = amount+"px";
  },
  computed:{

  },
   methods: {

    clickType: function (data) {
        // console.log("enter....");
        this.isActive = parseInt(data.order);
        // this.$emit('broadcastType',{type:data});
        window.bus.$emit('boradcastType',{type : data});
    }
  },
  computed:{

  }
}
</script>

<style scoped>
    .block{
        display: block;
    }

    .active{
       color:#ffffff !important;
       background: #0e4498 !important;
    }

    .font-active{
        color:#ffffff !important;
    }
    .Icons{
        margin: 0;
        padding:0;
        list-style: none;
        padding: 15px 0;
        font-size: 22px;
        box-sizing: content-box;
        color: #81b2ff;
        background:#2b60b2;
        padding:12px 15px;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 10px 10px 0 0;
        /* background: rgba(14,68,152,0.75); */
        /* background: rgba(59,114,238,0.75); */

    }
    .Icon{
        width:50px;
        text-align: center;
        border-radius: 5px;
        padding:0 5px;
        float: left;
        cursor: pointer;
    }
    .Icon-box-icon{
        background: rgba(0,0,0,0.25);
        border-radius: 5px;
        line-height: 40px;
    }

    .Icon-box-icon:hover{
        color: #81b2ff;
        background:#2b60b2
    }
   .Icon-box-font{
       margin-top:5px;
       font-size: 12px;
       color: #81b2ff;
   }
    .Icon:hover{
        color: yellow;
    }
    p{
        color: yellow;
    }
</style>
