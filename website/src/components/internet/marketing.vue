<template>
	<div>
		<Nav navtitle="公司服务"></Nav>
		<div class="wraperwidth">
			<p class="titleex">某某控股集团有限公司成立于2005年1月18日，是一个市政府资本加快国有资本的战略性调整，一些重点企业做大做强，XX（实业）集团有限公司，国有独资公司XYZ控股有限公司和市燃气集团有限责任公司重组和一个城市的建立，是其中的一个最大的国有企业资本、基础设施和公共设施和市政府和市国资委规划投资融资平台。由于对照组的建立，一个国有企业利润总额一直排在第一，被评为“中国企业500强”、“中国企业500强”。</p>
			<div>
				<img class="imgsize" src="../../../images/index-network.jpg" />
				<div class="index-internet-content">
					<div class="index-internet-content">
						<!--循环数据-->
						<div class="index-internet-box" v-for="item in internet">
							<p class="index-internet-body-p1">{{item.num}}</p>
							<p class="index-internet-body-p2">{{item.introduction}}</p>
						</div>
						<div style="clear: both;"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Nav from "../common/nav.vue"
	export default {
		data() {
			return {
				internet: [{
						num: "860+",
						introduction: "我们合作品牌的数量已达到860多个"
					}, {
						num: "125+",
						introduction: "我们公司产品历史悠久，每一件都很经典"
					},
					{
						num: "1000+",
						introduction: "我们的产品数量已达到1000多个"
					}, {
						num: "TOP",
						introduction: "我们是业内最好的公司之一"
					}
				],
			}
		},
		components: {
			Nav,
		}
	}
</script>

<style scoped>
	.wraperwidth {
		width: 1420px;
		margin: 0 auto;
		position: relative;
	}
	
	.titleex {
		margin-top: 45px;
		font-size: 14px;
		color: #c2c2c2;
		position: relative;
	}
	
	.index-internet-body {
		width: 100%;
		position: relative;
	}
	.index-internet-content {
		position: absolute;
		width: 1420px;
		margin: 0 auto 0 auto;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.index-internet-box {
		width: 185px;
		padding: 150px 20px 0 20px;
		float: left;
		text-align: center;
		margin-left: 160px;
	}
	
	.index-internet-box:nth-of-type(1) {
		margin: 0;
	}
	.imgsize{
		width: 100%;
	}
	.in .index-internet-title-introduction {
		font-size: 14px;
		color: #707070;
		text-shadow: 0.4px 0.4px 0.4px #707070;
		margin-top: 20px;
	}
	
	.index-internet-body-p1 {
		font-size: 54px;
		color: #ee882a;
		font-weight: bolder;
	}
	
	.index-internet-body-p2 {
		font-size: 14px;
		color: #ee882a;
		text-shadow: 0.4px 0.4px 0.4px #ee882a;
		margin-top: 20px;
	}
</style>