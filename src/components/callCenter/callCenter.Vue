<template>
  <div class="callCenter-wrap synergeticOffice mt22 clearfix">
    <div class="clearfix">
      <div class="tableL">
        <div class="clearfix">
          <knowledge-div></knowledge-div>
          <incoming-customer></incoming-customer>
          <mes-template></mes-template>
       </div>
      </div>
      <div class="echartR">
         <div class="clearfix">
           <ul class="clearfix callUl">
             <li class="lib">
                 <into-line></into-line>
             </li>
             <li class="lib lil">
               <consult-div></consult-div>
             </li>
             <li>
               <complaints-div></complaints-div>
             </li>
             <li class="lil">
               <customer-div></customer-div>
              </li>
           </ul>
        </div>
      </div>

 </div>
  </div>

</template>

<script>
  import knowledgeDiv from './knowledge'
  import incomingCustomer from './IncomingCustomer'
  import mesTemplate from './mesTemplate'
  import intoLine from './intoLine'
  import complaints from './complaints'
  import customer from './customer'
  import consult from './consult'
export default{
    name:'callCenter',
    data(){
        return{

        }
    },
  components:{
     'knowledge-div': knowledgeDiv,
     'incoming-customer':incomingCustomer,
     'mes-template':mesTemplate,
     'into-line':intoLine,
     'complaints-div':complaints,
      'customer-div':customer,
      'consult-div':consult,

  }
}

</script>

<style scoped>
  .tit{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #0e4498;
    font-size: 0.14rem;
    color: #fff;
    border-radius: 0.04rem;
    position: relative;
    margin-bottom: 0.02rem;
  }
  .tit>h3{
    font-size: 0.16rem;
    margin-left: 0.15rem;
    font-weight: 400;
  }
  .tit>i{
    font-size: 0.18rem;
    position: absolute;
    right:0.15rem;
    top: 0.1rem;
  }
.tableL{width: 59.583%;height: 100%;float: left;margin-left:0.09rem;}
  .echartR{width: 39.01%;height: 100%;float: left;margin-left:0.09rem;}
  ul.callUl>li{float: left;width: 49.31%;height: 100%;}
  .lib{margin-bottom: 0.12rem}
  .lil{margin-left: 0.1rem;}
</style>
