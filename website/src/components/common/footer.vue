<template>
	<div class="contact-footer">
		<div class="contact-footer-content">
			<ul class="index-footer-method">
				<li v-for="item in contact" class="contact-footer-li"><img :src="item.icon"><span class="contact-span">{{item.value}}</span></li>
			</ul>
			<p class="contact-footer-bottom">老外仓 版权所有 2014-2019 ICP 123456789 </p>
		</div>
	</div>
</template>

<script>
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
		}
	}
</script>

<style>
	ul,li,p{
		margin: 0;
		padding: 0;
	}
	.contact-footer {
		background: #f8efe7;

	}
	
	.contact-footer-content {
		width: 1420px;
		margin: 0 auto;
	}
	
	.index-footer-method {
		margin-top: 90px;
		list-style: none;
		padding-top: 55px;
		position: relative;
		display: flex;
	}
	
	.contact-footer-li {
		width: 355px;
	}
	
	.contact-footer-li:nth-of-type(4) {
		text-align: right;
	}
	
	.contact-span {
		position: relative;
		color: #666666;
		margin-left: 25px;
		top: -8px;
		text-shadow: 0.2px 0.2px 0.2px #b4b0ad
	}
	
	.contact-footer-bottom {
		font-size: 14px;
		text-align: center;
		margin-top: 75px;
		padding-bottom: 20px;
		text-shadow: 0.2px 0.2px 0.2px #b4b0ad
	}
</style>