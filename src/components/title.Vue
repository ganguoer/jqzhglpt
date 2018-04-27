<template>
  <div class="tit">
    <h3>{{titlemsg}}</h3>
    <img src="../../static/images/re.png" alt="">
  </div>

</template>

<script>
export default {
    props:['titlemsg']
}

</script>

<style>
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
  .tit>img{
    width: 0.2rem;
    position: absolute;
    right:0.15rem;
    top: 0.1rem;
  }
</style>
