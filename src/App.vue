<template>
  <div id="app">
    <!--最顶部-->
  <navheader></navheader>
 	<transition name="router" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import navheader from './components/NavHeader';
import Vue from 'vue'
import GeminiScrollbar from 'vue-gemini-scrollbar'
Vue.use(GeminiScrollbar)

export default {
  name: 'App',
  components: {
    'navheader': navheader
  },
  beforeMount:function(){
         let that = this;
         window.bus.$on("resize",function(){
           let matrix = that.getMatrixParam();
           if(!isNaN(matrix)){
              
              //通知body调整高度
              // window.bus.$emit("adjustHeight",matrix);
              setTimeout(function(){
                window.bus.$emit("adjustHeight",matrix);
              },50);
           }

      });
  },
  beforeCreate:function(){
      let that = this;
      // window.bus.$emit("adjustHeight",that.getMatrixParam());
  },
  mounted:function(){

    window.bus.$emit("adjustHeight",this.getMatrixParam());
  },
  updated:function(){
    window.bus.$emit("adjustHeight",this.getMatrixParam());
    
  },
  beforeUpdate:function(){

  },
  methods:{
    resize:function(){

    },
    getMatrixParam:function(){
        //获取第一个子节点的高度。
        var el = this.$children[0];
        var tHight = el.$el.clientHeight
        var docHight = document.body.clientHeight;
        return docHight - tHight;

    }
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
    background-color: #012352!important;
  }
  html{
    overflow: hidden;
  }
  #app {
    font-family: 'microsoft yahei','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
</style>
