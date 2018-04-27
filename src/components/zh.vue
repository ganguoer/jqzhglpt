<template>
  <div class="zh clearfix">
        <div class="content">
              <div class="tit">
                  <h3>今日运营</h3>
                  <!-- <img src="../../static/images/re.png" alt=""> -->
              </div>
              <div class="con">
                 <div class="con1">
                   <div class="lef">
                       <!-- <img src="../../static/images/heart.png" alt=""> -->
                   </div>
                   <div class="rig">
                       <span>拥挤度指数</span>

                   </div>
                 </div>
              </div>
        </div>
        <div class="content">
            <div class="tit">
              <h3>近7日客流变化</h3>
              <!-- <img src="../../static/images/re.png" alt=""> -->
            </div>
            <div class="con">

            </div>
        </div>
        <div class="content">
            <div class="tit">
              <h3>游客分布热力图</h3>
              <!-- <img src="../../static/images/re.png" alt=""> -->
            </div>
            <div class="con">

            </div>
        </div>
        <div class="content">
            <div class="tit">
              <h3>景区未来流量预测</h3>
              <!-- <img src="../../static/images/re.png" alt=""> -->
            </div>
            <div class="con">

            </div>
        </div>
        <div class="content">

        </div>
        <div class="content"></div>
        <div class="content"></div>
        <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'zh',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.zh{
  width: 100%;
  /*height: 100%;*/
  padding: 0 0.1rem;
  overflow: hidden;
}
  .content{
    float: left;
    width: 24.61%;
    height: 3.96rem;
    margin:0.07rem 0;
    margin-right: 0.5%;
  }
.content:nth-child(4){
  margin-right: 0;
}
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
.tit>h5{
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
  .con{
    width: 4.45rem;
    height: 3.35rem;
    padding: 0.09rem 0.12rem;
    background-color: #002d6a;
    border-radius: 0.04rem;
  }
.con1{
  width: 4.46rem;
  height: 1.06rem;
  border-radius: 0.04rem;
  background-color: #2aba80;
  position: relative;
}
  .con1 img{
    width: 0.84rem;
    height: 0.74rem;
    position: absolute;
    top: 0.16rem;
    left: 0.40rem;
  }

</style>
