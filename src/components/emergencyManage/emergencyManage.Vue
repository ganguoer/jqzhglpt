<template>
<div class="emergencyManage mt22 clearfix">
   <scenic-statistics></scenic-statistics>
   <event-category></event-category>
   <event-level></event-level>
   <plan-start></plan-start>
 <emergency-event></emergency-event>
</div>
</template>

<script>
import scenicStatistics from './scenicStatistics'
import eventCategory from './eventCategory'
import eventLevel from './eventLevel'
import planStart from './planStart'
import emergencyEvent from './emergencyEvent'
export default{
    name:'emergencyManage',
    data(){
        return{

        }
    },
   components:{
        'scenic-statistics':scenicStatistics,
        'event-category':eventCategory,
        'event-level':eventLevel,
        'plan-start':planStart,
        'emergency-event':emergencyEvent
  }
}

</script>

<style >

</style>
