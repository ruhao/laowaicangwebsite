<template>
	<div>
		<div><img class="headerbg" src="../../../images/contact-ban.jpg"></div>

		<div class="contact-title">
			<img src="../../../images/left-c.jpg" />
			<p>联系我们</p>
			<img src="../../../images/right-c.jpg" />
		</div>
		<div class="contact-sketch">
			<p>请在线提交您的咨询、建议、意见，我们会在收到邮件后的1个工作日内，对您的问题给予答复。 </p>
		</div>
		<div class="contact-content">
			<div class="contact-content-top">
				<img src="../../../images/contact1.jpg" />
				<div class="contact-content-tr">
					<div class="contact-content-tc">
						<h3>意大利总部</h3>
						<ul class="index-contact-method">
							<li v-for="item in contact"><img :src="item.icon"><span class="index-contact-span">{{item.value}}</span></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="contact-content-top">
				<img class="contact-content-img" src="../../../images/contact2.jpg" />
				<div class="contact-content-tb">
					<div class="contact-content-tc">
						<h3>意大利总部</h3>
						<ul class="index-contact-method">
							<li v-for="item in contact"><img :src="item.icon"><span class="index-contact-span">{{item.value}}</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<Foot></Foot>
	</div>
</template>

<script>
	import Foot from "../common/footer.vue"

	export default {
		data() {
			return {
				contact: [{
						icon: "../../../images/index-contact1.png",
						value: "手机：86-15868121781 "
					},
					{
						icon: "../../../images/index-contact2.png",
						value: "座机：86-010-15868121781"
					},
					{
						icon: "../../../images/index-contact3.png",
						value: "邮件：15868121781@qq.com"
					},
					{
						icon: "../../../images/index-contact4.png",
						value: "地址：中国杭州 滨江区 滨盛路1688号"
					}
				]
			}
		},
		components: {
			Foot,
		}
	}
</script>

<style scoped>
	p,
	h3,
	img {
		margin: 0;
		padding: 0;
	}
	
	.headerbg {
		width: 100%;
		min-width: 1420px;
	}
	
	.contact-title {
		display: flex;
		width: 440px;
		margin: 100px auto 0;
		position: relative;
	}
	
	.contact-title p {
		line-height: 24px;
		font-size: 24px;
		flex: 1;
		color: #f1662c;
		text-shadow: 1px 1px 1px #f1662c;
	}
	
	.contact-title img {
		height: 20px;
		margin: 3px 40px;
	}
	
	.contact-content {
		width: 1420px;
		margin: 0 auto;
	}
	
	.contact-content-top {
		margin-top: 20px;
		position: relative;
	}
	
	.contact-sketch {
		text-align: center;
	}
	
	.contact-sketch p {
		color: #7a7a7a;
		margin-top: 50px;
		font-size: 14px;
		text-shadow: 0.2px 0.2px 0.2px #cccccc
	}
	
	.index-contact-method {
		list-style: none;
		margin-top: 35px;
		position: relative;
	}
	
	.index-contact-method li {
		position: relative;
		margin-top: 20px;
	}
	
	.index-contact-method li img {
		width: 24px;
	}
	
	.index-contact-span {
		font-size: 14px;
		position: relative;
		color: #666666;
		margin-left: 40px;
		top: -8px;
		text-shadow: 0.2px 0.2px 0.2px #b4b0ad
	}
	
	.contact-content {
		margin-top: 50px;
	}
	
	.contact-content-tr {
		width: 840px;
		position: absolute;
		background: #ffffff;
		box-shadow: 0px 5px 5px #cccccc;
		right: 0;
		top: 0;
		height: 280px;
		margin-top: 30px;
		padding: 30px;
		margin-bottom: 30px;
	}
	
	.contact-content-tc {
		background: #fdf3e9;
		position: relative;
		height: 250px;
		padding: 30px 0 0 50px;
	}
	
	.contact-content-tb {
		width: 840px;
		position: absolute;
		background: #ffffff;
		box-shadow: 0px 5px 5px #cccccc;
		left: 0;
		top: 0;
		margin-top: 30px;
		padding: 30px;
	}
	
	.contact-content-tc h3 {
		font-size: 16px;
		color: #ee882a;
	}
	
	.contact-content-img {
		margin-left: 580px;
	}
</style>