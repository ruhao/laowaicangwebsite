<template>
	<div>
		<div><img class="headerbg" src="../../../images/products-ban.jpg"></div>
		<div class="wraperwidth">
			<div class="hrroute">
				<router-link to='/news'>
					<div class="heroutebox1" @mouseenter="imgchange2" @mouseleave="imgchange3">
						<img src=".../../../images/products1.jpg" id="hrimg1" />
						<img src=".../../../images/products1a.jpg" id="hrimg2" />
					</div>
				</router-link>
				<router-link to='/news/industrydynamics'>
					<div class="heroutebox1" @mouseenter="imgchange" @mouseleave="imgchange1">
						<img src=".../../../images/products2.jpg" id="hrimg3" />
						<img src=".../../../images/products2a.jpg" id="hrimg4" />
					</div>
				</router-link>
			</div>
		</div>
		<Nav navtitle="产品业务"></Nav>
		<div class="wraperwidth-box">
			<div class="margintop" v-for="item in this.productlist">
				<router-link to='/news/industrydynamics' class="fontstyle">
					<div class="product-box">
						<div class="product-boxl"><img :src="item.imgurl1"></div>
						<div class="product-boxr">
							<img :src="item.imgurl2">
							<p class="product-boxp1">{{item.title}}</p>
							<p class="product-boxp2">{{item.content}}
							</p>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import Nav from "../common/nav.vue"
	export default {
		data() {
			return {
				productlist: [{
						imgurl1: "../../../images/products1-1.jpg",
						imgurl2: "../../../images/products2-1.jpg",
						title: "酒水饮料",
						content: "意大利文化我们应该学习葡萄酒，意大利葡萄酒，葡萄酒和许多其他称，是家庭的 基本饮料。"
					},
					{
						imgurl1: "../../../images/products1-2.jpg",
						imgurl2: "../../../images/products2-2.jpg",
						title: "休闲零食",
						content: "意大利有什么好吃的小吃？让我告诉你一些美味到不能停止的零食。"
					},
					{
						imgurl1: "../../../images/products1-3.jpg",
						imgurl2: "../../../images/products2-3.jpg",
						title: "粮油副食",
						content: "意大利是一个美食国家，他们有着悠久的饮食历史，作为他们的艺术、时尚和家具，总是喜欢精心制作。。"
					},
					{
						imgurl1: "../../../images/products1-4.jpg",
						imgurl2: "../../../images/products2-4.jpg",
						title: "新鲜水果",
						content: "意大利是一个美食国家，他们有着悠久的饮食历史，作为他们的艺术、时尚和家具，总是喜欢精心制作。"
					},
					{
						imgurl1: "../../../images/products1-5.jpg",
						imgurl2: "../../../images/products2-5.jpg",
						title: "酒水饮料",
						content: "意大利文化我们应该学习葡萄酒，意大利葡萄酒，葡萄酒和许多其他称，是家庭的 基本饮料。"
					},
					{
						imgurl1: "../../../images/products1-6.jpg",
						imgurl2: "../../../images/products2-6.jpg",
						title: "休闲零食",
						content: "意大利有什么好吃的小吃？让我告诉你一些美味到不能停止的零食。"
					},
					{
						imgurl1: "../../../images/products1-7.jpg",
						imgurl2: "../../../images/products2-7.jpg",
						title: "粮油副食",
						content: "意大利是一个美食国家，他们有着悠久的饮食历史，作为他们的艺术、时尚和家具，总是喜欢精心制作。。"
					},
					{
						imgurl1: "../../../images/products1-8.jpg",
						imgurl2: "../../../images/products2-8.jpg",
						title: "新鲜水果",
						content: "意大利是一个美食国家，他们有着悠久的饮食历史，作为他们的艺术、时尚和家具，总是喜欢精心制作。"
					},
				],
			}
		},
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
			},
		},
		components: {
			Nav,
		},
	}
</script>

<style scoped>
	.wraperwidth {
		width: 1420px;
		margin: 0 auto;
	}
	
	.headerbg {
		width: 100%;
		min-width: 1420px;
	}
	
	.hrroute {
		text-align: center;
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
	
	.wraperwidth-box {
		width: 1420px;
		margin: 0 auto;
		margin-top: 30px;
		overflow: hidden;
	}
	
	.product-box {
		width: 700px;
		display: flex;
	}
	
	.product-boxl {
		width: 348px;
	}
	
	.product-boxr {
		width: 350px;
		background: #f8efe7;
		position: relative;
		text-align: center;
	}
	
	.product-boxr img {
		margin-top: 30px;
	}
	
	.product-boxp1 {
		color: #ee882a;
		font-weight: 600;
		font-size: 18px;
		margin: 30px 35px 0;
	}
	.margintop{
		margin-top: 20px;
			float: left;
	}
	.margintop:nth-of-type(2n){
		margin-left: 20px;
	}
	.product-boxp2 {
		color: #ee882a;
		font-weight: 100;
		font-size: 14px;
		margin: 20px 35px 0;
		line-height: 25px;
		letter-spacing: 1px;
	}
	
	.product-boxl img {
		width: 100%;
	}
	.fontstyle{
		text-decoration: none;
	}
</style>