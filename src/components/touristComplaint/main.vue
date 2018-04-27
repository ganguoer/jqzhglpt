<template>
  <div class="mt22  clearfix"> 
    <new-sources></new-sources>
    <complaint-el></complaint-el>
    <category-el></category-el>
    <screening-el></screening-el>
  </div>
</template>

<script>
import sourceComplaint from './sourceComplaint'
import numberComplaints from './numberComplaints'
import complaintCategory from './complaintCategory'
import screeningConditions from './screeningConditions'
export default {
  name: 'source',
  components: {     
    'new-sources': sourceComplaint,
    'complaint-el':numberComplaints,
    'category-el':complaintCategory,
    'screening-el':screeningConditions
  }
}
</script>
<style>
  
</style>
