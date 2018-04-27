<template>
  <div class="content-wrap synergeticOffice mt22 clearfix">
    <div class="clearfix">
    <today-operating></today-operating>
    <flow-change></flow-change>
    <heat-map></heat-map>
    <flow-prediction></flow-prediction>
    <visitor-source></visitor-source>
    <scenic-income></scenic-income>
    <duty-today></duty-today>
    <video-show></video-show>
    </div>
    <div class="footer">
      <div class="foot">
      <span>咨询量：<strong>999</strong></span>
      <span>投诉量：<strong>999</strong></span>
      <span>处理率：<strong>100%</strong></span>
      <span>报警量：<strong>999</strong></span>
      <span>其他：<strong>999</strong></span>
      </div>
    </div>
  </div>
</template>

<script>
  import operating from './operating';
  import flowChange from './flowChange';
  import heatMap from './heatMap';
  import flowPrediction from './flowPrediction';
  import visitorSource from './visitorSource';
  import scenicIncome from './scenicIncome';
  import dutyToday from './dutyToday';
  import videoShow from './videoShow';
  export default {
    name: 'screen',
    components: {
      'today-operating': operating,
      'flow-change': flowChange,
      'heat-map': heatMap,
      'flow-prediction': flowPrediction,
      'visitor-source': visitorSource,
      'scenic-income': scenicIncome,
      'duty-today': dutyToday,
      'video-show': videoShow
    }
  }
</script>

<style scoped>
  .mtt{margin-top:0.12rem;}
  .footer{width: 98.8%;height: 0.5rem;background-color: #0e4498;border-radius: 0.04rem;margin: 0 auto;}
  .foot{width:60%;color: #fff; font-size: 0.14rem;margin: 0 auto;    padding-top: 0.15rem;}
  .foot span{margin: 0 4.42%;}
  strong{font-size: 0.2rem;}
</style>
