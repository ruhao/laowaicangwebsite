<template>
	<div>
		<div><img src="../../../images/join-ban.jpg"></div>
			
		<div class="wraperwidth">
			<div class="hrroute">
				<div class="heroutebox1">
					<img src=".../../../images/join1.jpg" />
					<img src=".../../../images/join1a.jpg" />
				</div>
				<div class="heroutebox1" @mouseenter="imgchange">
					<img src=".../../../images/join2.jpg" id="hrimg3"/>
					<img src=".../../../images/join2a.jpg" id="hrimg4"/>
				</div>
				<div class="heroutebox1">
					<img src=".../../../images/join3.jpg" />
					<img src=".../../../images/join3a.jpg" />
				</div>
			</div>
		</div>
			
		<div v-if="this.$route.path==='/hr'">
			
		</div>
		<div v-else>
			
			<router-view></router-view>
		</div>
		<Foot></Foot>
	</div>
	
</template>

<script>
	import Foot from "../common/footer.vue"
	export default{
		data(){
			return{
			}
		},
		methods:{
			imgchange(){
				console.log(document.getElementById("hrimg3"))
			}
		},
		components: {
			Foot,
		},
		created(){
		
	},


	}
</script>

<style scoped>
	.wraperwidth{
		width: 1420px;
		margin: 0 auto;
	}
	.hrroute{
		text-align: center;
	}
	.heroutebox1{
		display: inline-block;
		position: relative;
		height: 160px;
		width: 160px;
		margin: 50px;
		cursor: pointer;
		z-index: 11;
		overflow: hidden;
	}
	
</style>