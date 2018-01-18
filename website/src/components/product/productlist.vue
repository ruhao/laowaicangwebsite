<template>
	<div>
		<Nav navtitle="产品业务"></Nav>
		<div class="all">
		<div class="margintop" v-for="item in this.productlist">
			<router-link :to="{name:'productcid',params:{id:{id:item.id,name:item.title}}}" class="fontstyle">
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
		<div style="clear: both;"></div>
		</div>
	</div>
</template>

<script>
	import Nav from "../common/nav.vue"
	import Foot from "../common/footer.vue"
	export default {
		data() {
			return {
				productlist: [{
						imgurl1: "../../../images/products1-1.jpg",
						imgurl2: "../../../images/products2-1.jpg",
						title: "酒水饮料",
						content: "意大利文化我们应该学习葡萄酒，意大利葡萄酒，葡萄酒和许多其他称，是家庭的 基本饮料。",
						id: "5a5c236891abad27484d3ee3",
					},
					{
						imgurl1: "../../../images/products1-2.jpg",
						imgurl2: "../../../images/products2-2.jpg",
						title: "休闲零食",
						content: "意大利有什么好吃的小吃？让我告诉你一些美味到不能停止的零食。",
						id: "5a5c12346354202600f286fe",
					},
					{
						imgurl1: "../../../images/products1-3.jpg",
						imgurl2: "../../../images/products2-3.jpg",
						title: "粮油副食",
						content: "意大利是一个美食国家，他们有着悠久的饮食历史，作为他们的艺术、时尚和家具，总是喜欢精心制作。",
						id: "5a5c120e6354202600f286fb",
					},
					{
						imgurl1: "../../../images/products1-4.jpg",
						imgurl2: "../../../images/products2-4.jpg",
						title: "新鲜水果",
						content: "意大利是一个美食国家，他们有着悠久的饮食历史，作为他们的艺术、时尚和家具，总是喜欢精心制作。",
						id: "5a5c12186354202600f286fc",
					},
					{
						imgurl1: "../../../images/products1-5.jpg",
						imgurl2: "../../../images/products2-5.jpg",
						title: "酒水饮料",
						content: "意大利文化我们应该学习葡萄酒，意大利葡萄酒，葡萄酒和许多其他称，是家庭的 基本饮料。",
						id: "5a5c12346354202600f286fe",
					},
					{
						imgurl1: "../../../images/products1-6.jpg",
						imgurl2: "../../../images/products2-6.jpg",
						title: "休闲零食",
						content: "意大利有什么好吃的小吃？让我告诉你一些美味到不能停止的零食。",
						id: "5a5c12346354202600f286fe",
					},
					{
						imgurl1: "../../../images/products1-7.jpg",
						imgurl2: "../../../images/products2-7.jpg",
						title: "粮油副食",
						content: "意大利是一个美食国家，他们有着悠久的饮食历史，作为他们的艺术、时尚和家具，总是喜欢精心制作。",
						id: "5a5c120e6354202600f286fb",
					},
					{
						imgurl1: "../../../images/products1-8.jpg",
						imgurl2: "../../../images/products2-8.jpg",
						title: "新鲜水果",
						content: "意大利是一个美食国家，他们有着悠久的饮食历史，作为他们的艺术、时尚和家具，总是喜欢精心制作。",
						id: "5a5c12186354202600f286fc",
					},
				],
			}
		},
		components: {
			Nav,
			Foot,
		},
	}
</script>

<style scoped>
	.product-box {
		width: 700px;
		display: flex;
		z-index: 11;
		position: relative;
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
	.all{
		margin-top: 30px;
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
	
	.margintop {
		margin-top: 20px;
		float: left;
	}
	
	.margintop:nth-of-type(2n) {
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
	
	.fontstyle {
		text-decoration: none;
		z-index: 11;
	}
</style>