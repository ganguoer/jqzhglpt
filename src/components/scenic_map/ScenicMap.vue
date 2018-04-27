<template>
	<div class="container" :style=styleObj>
		<section class="section">
			<map-com></map-com>
		</section>
		<footer class="footer">
			<IconList v-on:broadcastType="getType"></IconList>
		</footer>
	</div>
</template>

<script>
	import IconList from "./IconList"
	import MapCom from  "./MapCom"
	
	export default {
		data(){

			return {
				mapArgs:{
					key:"988b262540ae65a710f18bf4516193de",
					callback:function(res){}
				},
				key:"988b262540ae65a710f18bf4516193de",
				styleObj:{
    				height: '10px'
				}
			}
		},
		components:{
			IconList:IconList,
			MapCom:MapCom
		},
		//加载高德地图脚本
		beforeCreate:function(){
			let that = this;
			//收到App组件的调整消息。重新调整本组建的高度
			window.bus.$on("adjustHeight",function(id){
				console.log("高度调整至："+id);
				that.styleObj.height =  id +"px";
			});
		},
	    beforeMount:function(){
		
		 },
		 beforeUpdate:function(){

		 },
		 mounted:function(){
			
		 },
		methods:{
			getType:function(data){

			},
			resize:function(data){
				console.log("new is:"+data);
			},
			jsApiCallBack:function(res){

			}
		},
		computed:{

		}
	}
</script>

<style scoped>
	.container{
		position: relative;
		overflow: hidden;
		width: 100%;
	}

	.section{
		widows: 100%;
		height: 100%;
	}

	.footer{
		position:absolute;
		width:100%;
		left:0;
		bottom:0;
  		/* background:#2b60b2; */
	}
	p{
		color: yellow
	}
</style>
