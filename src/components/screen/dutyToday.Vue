<template>
  <div class="lf dutyT ml mtt">
    <title-h3 :titlemsg="titlemsg"></title-h3>
    <div class="dutyT-wrap">
      <div class="dutyT-inner">
        <ul class="dutyUl">
          <li v-for="(item,index) in items" :key="index">
            <i class="icon-rota"></i>
            <div class="con-r">
              <p>{{item.zbType}}：{{item.zbName}}</p>
              <p>联系电话：{{item.zbPhone}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import title from '../title';
export default{
    name:'dutyToday',
    data () {
        return{
          titlemsg:'今日值班',
          items:''
        }
    },
  mounted () {
       this.change();
  },
  methods:{
    change(){
        var that=this;
        that.$ajax.get('duty.js')
          .then(function (response) {
            console.log(response.data)
            that.items=response.data.data;
          })
    }
  },
  components: {
    'title-h3': title
  }
}

</script>

<style scoped>
  .dutyT{height: 3.99rem;width: 16.04%;}
  .dutyT-wrap{height: 3.44rem; background:#002d6a;border-radius: 4px;padding-top: .09rem}
  .dutyT-inner{height: 3.34rem;width: 2.93rem;margin: 0 auto;overflow: hidden;}
  ul.dutyUl li{width: 2.93rem;height:0.73rem;margin-bottom: 0.12rem;border-radius: 0.04rem;background: #0e3883;position: relative;}
  .icon-rota{display: inline-block;font-size:0.32rem;width:0.49rem;height: 0.49rem;line-height:0.49rem; background-color: #3b72ee;border-radius: 0.25rem;text-align: center;position: absolute;top: 0.1rem;left:0.17rem;}
  .con-r{display: inline-block;margin-left:0.85rem;color: #75abff;font-size: 0.12rem;padding-top: 0.14rem;}
  .con-r>p{height: 0.22rem;line-height: 0.22rem;}
</style>
