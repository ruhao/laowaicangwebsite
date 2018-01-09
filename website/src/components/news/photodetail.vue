<template>
	<div>
		<Nav navtitle="公司照片"></Nav>
		<div class="wraperwidth">
			<ul>
				<li>
					<img :src="this.sdimg.zimgurl1"/>
				</li>
				<li>
					<img :src="this.sdimg.zimgurl2"/>
				</li>
				<li>
					<img :src="this.sdimg.zimgurl3"/>
				</li>
				<li>
					<img :src="this.sdimg.zimgurl4"/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Nav from "../common/nav.vue"
	export default {
		data(){
			return{
				sdimg:{},
			}
		},
		components: {
			Nav,
		},
		created(){
			this.sdimg=this.$route.params.content
			console.log(this.sdimg)
		}
	}
</script>

<style scoped>
	ul,li,p{
		margin: 0;
		padding: 0;
	}
	.wraperwidth{
		width: 1420px;
		margin: 0 auto;
		margin-top: 50px;
		position: relative;
		height: 1200px;
	}
	ul{
		list-style: none;
		position: absolute;
		margin-left: 360px;
	}
	ul li{
		width: 720px;
		height: 720px;
		position: absolute;
	}	
	li:nth-of-type(1){
		transform: translate3d(0,0,-360px);
		height: 770px;
	}
	li:nth-of-type(2){
		transform: translate3d(360px,50px,0)
	}
	li:nth-of-type(3){
		transform: translate3d(-360px,50px,0);
	}
	li:nth-of-type(4){
		transform: translate3d(0,0,360px)
	}
	ul li img{
		width: 100%;
		height: 100%;
	}
</style>