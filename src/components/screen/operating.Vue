<template>
  <div class="lf screen-operating ml">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="screenOper-wrap">
      <div class="screenOper-inner">
        <ul class="screenUl">
          <li>
           <i class="icon-heart"></i>
            <div class="conr">
              <p class="title">拥挤度指数</p>
              <p id="starBg">
                <i class="icon-star"></i>
                <i class="icon-star2"></i>
                <i class="icon-star1"></i>
              </p>
              <button>查看详情</button>
            </div>
          </li>
          <li>
            <i class="icon-rmb"></i>
            <div class="conr">
              <p class="title">购票人数</p>
              <el-progress :percentage="50" status="exception" color="#93d1eb"></el-progress>
              <p class="num">{{value1}}</p>
              <button>查看详情</button>
            </div>
          </li>
          <li>
            <i class="icon-person"></i>
            <div class="conr">
              <p class="title">入园人数</p>
              <p class="person">共计<span>{{value2}}</span>人</p>
              <button class="btn">查看详情</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import title from '../title';
export default {
    name: 'operating',
    data () {
        return {
            titlemsg:'今日运营',
            value0:null,
            value1:null,
            value2:null,
        }
  },
  mounted(){
    this.change();
    this.highlightStar(this.value0);
  },
  methods:{
    change(){
      var that=this;
      that.$ajax.get('operating.js')
        .then(function (response) {
            console.log(response.data);
          that.value0=response.data.data[0].numericalvalue;
          that.value1=response.data.data[1].numericalvalue;
          that.value2=response.data.data[2].numericalvalue;
//          console.log(that.value0);
        })
    },
    highlightStar(num){
//        alert(num);
      var starBg = document.getElementById("starBg");
      var stars = starBg.getElementsByTagName("i");
        if(parseInt(num)==num){
          for(var i = 0 ; i < num ; i++){
            stars[i].className = "icon-star";
          }
        }else{
          return
      }

    }
  },
  components: {
    'title-h3': title
  }
}

</script>

<style scoped>
.screen-operating{ height:3.99rem;width: 24.3%;}
.screenOper-wrap{height:3.44rem;width: 100%; background:#002d6a;border-radius: 4px;padding-top: .09rem}
.screenOper-inner{height: 3.34rem;width: 4.46rem;margin: 0 auto;}
ul.screenUl li{width: 4.46rem;height:1.06rem;margin-bottom: 0.08rem;border-radius: 0.04rem;position: relative;}
ul.screenUl li:nth-child(1){ background-color: #2aba80;}
ul.screenUl li:nth-child(2){background: #dab932;}
ul.screenUl li:nth-child(3){background: #b36fe6;margin-bottom: 0;}
ul.screenUl li i{font-size: 0.74rem;display:inline-block;vertical-align:middle;}
.icon-heart{margin-left: 0.34rem;padding-top: 0.18rem;}
.icon-rmb{margin-left: 0.43rem;margin-top: 0.13rem;}
.icon-person{font-size: 0.6rem;margin-left: 0.34rem;margin-top: 0.25rem;}
.conr{display:inline-block;left:1.95rem;position: absolute;color: #fff;}
.title{font-size: 0.14rem;color: #fff;padding-top:0.12rem;}
#starBg>i{font-size: 0.22rem;padding-top:0.05rem;padding-right: 0.06rem;}
.conr>button{margin-top: 0.1rem;width: 1.38rem;height: 0.24rem;background: #fff;color: #6b6b6b;font-size: 0.12rem;border: none;outline: none;border-radius: 0.04rem;}
.person{font-size: 0.12rem;color: #fff;padding-top:0.02rem;}
.person>span{font-size: 0.24rem;}
.conr>.btn{margin-top: 0.08rem;}
.num{font-size: 0.14rem;}
</style>
