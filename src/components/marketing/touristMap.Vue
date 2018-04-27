<template>
  <div class="lf marketingci ml mtt">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="marketingci-wrap">
      <div class="marketingci-inner">

      </div>
    </div>
  </div>

</template>

<script>
  import title from '../title';
  export default{
    name:'touristMap',
    data(){
      return{
        titlemsg:'景区游客热力图'
      }
    },
    components:{
      'title-h3':title
    }
  }

</script>

<style scoped>
  .marketingci{ height:3.8rem;width: 49.2%;}
  .marketingci-wrap{height:3.28rem;width: 100%; background:#002d6a;border-radius: 4px;padding-top: .09rem}
  .marketingci-inner{width: 9.25rem;height: 3.21rem;background-color: #173881;border-radius: 4px;margin: 0 auto;}
</style>
