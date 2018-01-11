<template>
	<div>
		<div><img class="headerbg" src="../../../images/network-ban.jpg"></div>
		<div class="wraperwidth">
			<div class="hrroute">
				<router-link to='/internet'>
					<div class="heroutebox1" @mouseenter="imgchange2" @mouseleave="imgchange3">
						<img src=".../../../images/network1.jpg" id="hrimg1" />
						<img src=".../../../images/network1a.jpg" id="hrimg2" />
					</div>
				</router-link>
				<router-link to='/internet/server'>
					<div class="heroutebox1" @mouseenter="imgchange" @mouseleave="imgchange1">
						<img src=".../../../images/network2.jpg" id="hrimg3" />
						<img src=".../../../images/network2a.jpg" id="hrimg4" />
					</div>
				</router-link>
			</div>
		</div>
		<div>
			<router-view></router-view>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import Foot from "../common/footer.vue"
	export default {
		methods: {
			imgchange() {
				document.getElementById("hrimg3").style.left = -160 + "px"
				document.getElementById("hrimg3").setAttribute("class", "imgchangq")
				document.getElementById("hrimg4").style.left = 0 + "px"
				document.getElementById("hrimg4").setAttribute("class", "imgchangl")
			},
			imgchange1() {
				document.getElementById("hrimg3").style.left = 0 + "px"
				document.getElementById("hrimg3").setAttribute("class", "imgchangl")
				document.getElementById("hrimg4").style.left = 160 + "px"
				document.getElementById("hrimg4").setAttribute("class", "imgchangq")
			},
			imgchange2() {
				document.getElementById("hrimg1").style.left = -160 + "px"
				document.getElementById("hrimg1").setAttribute("class", "imgchangq")
				document.getElementById("hrimg2").style.left = 0 + "px"
				document.getElementById("hrimg2").setAttribute("class", "imgchangl")
			},
			imgchange3() {
				document.getElementById("hrimg1").style.left = 0 + "px"
				document.getElementById("hrimg1").setAttribute("class", "imgchangl")
				document.getElementById("hrimg2").style.left = 160 + "px"
				document.getElementById("hrimg2").setAttribute("class", "imgchangq")
			}
		},
		components: {
			Foot,
		},
	}
</script>

<style scoped>
	.wraperwidth {
		width: 1420px;
		margin: 0 auto;
	}
	
	.hrroute {
		text-align: center;
	}
	
	.headerbg {
		width: 100%;
		min-width: 1420px;
	}
	
	.heroutebox1 {
		display: inline-block;
		position: relative;
		height: 160px;
		width: 160px;
		margin: 50px;
		cursor: pointer;
		z-index: 11;
		overflow: hidden;
	}
	
	.heroutebox1 img:nth-of-type(1) {
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.heroutebox1 img:nth-of-type(2) {
		position: absolute;
		top: 0px;
		left: 160px;
	}
	
	.heroutebox1 .imgchangq {
		opacity: 0;
		transition: all 0.5s;
	}
	
	.heroutebox1 .imgchangl {
		opacity: 1;
		transition: all 0.5s;
	}
</style>