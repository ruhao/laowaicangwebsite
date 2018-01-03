<template>
	<div>
		<div><img src="../../../images/join-ban.jpg"></div>
		<div class="wraperwidth">
			<div class="hrroute">
				<router-link to='/hr/strategy'>
				<div class="heroutebox1" @mouseenter="imgchange2" @mouseleave="imgchange3">
					<img src=".../../../images/join1.jpg" id="hrimg1"/>
					<img src=".../../../images/join1a.jpg" id="hrimg2"/>
				</div>
				</router-link>
				<router-link to='/hr/train'>
				<div class="heroutebox1" @mouseenter="imgchange" @mouseleave="imgchange1">
					<img src=".../../../images/join2.jpg" id="hrimg3"/>
					<img src=".../../../images/join2a.jpg" id="hrimg4"/>
				</div>
				</router-link>
				<router-link to='/hr/advertises'>
				<div class="heroutebox1" @mouseenter="imgchange4" @mouseleave="imgchange5">
					<img src=".../../../images/join3.jpg" id="hrimg5"/>
					<img src=".../../../images/join3a.jpg" id="hrimg6"/>
				</div>
				</router-link>
			</div>
		</div>
		<div v-if="this.$route.path==='/hr'">
			<div class="bottom">
			<p class="stp">我们的团队拥有广泛的专业和文化背景，我们对中国和其他海外市场的商业环境的深刻理解，是对国际商业舞台上成功运行的关键。同时，我们也认识到人才对集团发展的重要性，因此，我们一直致力于为人才创造最佳的工作和发展平台。</p>
			<p class="stp">通过多年的实践和发展，我们团队的骨干更深刻的理解是最大的信心，韩胜集团的发展是稳定的集团的长期基础。品行、能力、健康是我们的选择标准，“激情、使命、责任、坚持、锲而不舍”是我们的团队精神，我们致力于创造一个愿景和崇高境界，团队精神，身心健康，和英国的跨国好团队的特点。</p>
		</div>
		</div>
		<div v-else>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
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
				document.getElementById("hrimg3").style.left=-160+"px"
				document.getElementById("hrimg3").setAttribute("class","imgchangq")
				document.getElementById("hrimg4").style.left=0+"px"
				document.getElementById("hrimg4").setAttribute("class","imgchangl")
			},
			imgchange1(){
				document.getElementById("hrimg3").style.left=0+"px"
				document.getElementById("hrimg3").setAttribute("class","imgchangl")
				document.getElementById("hrimg4").style.left=160+"px"
				document.getElementById("hrimg4").setAttribute("class","imgchangq")
			},
			imgchange2(){
				document.getElementById("hrimg1").style.left=-160+"px"
				document.getElementById("hrimg1").setAttribute("class","imgchangq")
				document.getElementById("hrimg2").style.left=0+"px"
				document.getElementById("hrimg2").setAttribute("class","imgchangl")
			},
			imgchange3(){
				document.getElementById("hrimg1").style.left=0+"px"
				document.getElementById("hrimg1").setAttribute("class","imgchangl")
				document.getElementById("hrimg2").style.left=160+"px"
				document.getElementById("hrimg2").setAttribute("class","imgchangq")
			},
			imgchange4(){
				document.getElementById("hrimg5").style.left=-160+"px"
				document.getElementById("hrimg5").setAttribute("class","imgchangq")
				document.getElementById("hrimg6").style.left=0+"px"
				document.getElementById("hrimg6").setAttribute("class","imgchangl")
			},
			imgchange5(){
				document.getElementById("hrimg5").style.left=0+"px"
				document.getElementById("hrimg5").setAttribute("class","imgchangl")
				document.getElementById("hrimg6").style.left=160+"px"
				document.getElementById("hrimg6").setAttribute("class","imgchangq")
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
	.heroutebox1 img:nth-of-type(1){
		position: absolute;
		top: 0;
		left: 0;
	}
	.heroutebox1 img:nth-of-type(2){
		position: absolute;
		top: 0px;
		left: 160px;
	}
	.heroutebox1 .imgchangq{
		opacity: 0;
		transition: all 0.5s;
	}
	.heroutebox1 .imgchangl{
		opacity: 1;
		transition: all 0.5s;
	}
	.bottom{
		width: 1420px;
		margin: 0 auto;
	}
	.stp {
		margin-top:45px;
		font-size: 14px;
		color: #666666;
		line-height: 25px;
	}
</style>