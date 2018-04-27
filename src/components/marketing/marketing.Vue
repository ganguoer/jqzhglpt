<template>
  <div class="content-wrap synergeticOffice mt22 clearfix">
    <div class="clearfix">
      <visitor-ratio></visitor-ratio>
      <visitor-age></visitor-age>
      <pro-channel></pro-channel>
      <key-word></key-word>
      <travel></travel>
      <travel-line></travel-line>
      <consumption></consumption>
      <tourists></tourists>

    </div>
  </div>
</template>

<script>
  import visitorRatio from './visitorRatio';
  import visitorAge from './visitorAge';
  import proChannel from './proChannel';
//  import transport from './transport';
  import travel from './travel';
  import travelLine from './travelLine';
  import consumption from './consumption';
  import tourists from './tourists';
  import keyWord from './keyWord';
//  import touristMap from './touristMap';
  export default {
    name: 'marketing',
    components: {
      'visitor-ratio': visitorRatio,
      'visitor-age': visitorAge,
      'pro-channel': proChannel,
//      'transport': transport,
      'travel': travel,
      'travel-line': travelLine,
      'consumption': consumption,
      'tourists': tourists,
      'key-word': keyWord,
//      'tourist-map': touristMap,

    }
  }
</script>

<style >
  .marketing{ height:4.14rem;width: 24.3%;}
  .marketing-wrap{height:3.64rem;width: 100%; background:#002d6a;border-radius: 4px;padding-top: .09rem}
  .marketing-inner{width: 4.5rem;height: 3.54rem;background-color: #173881;border-radius: 4px;margin: 0 auto;}
  .mtt{margin-top:0.12rem;}

</style>
