<template>
	<div class="contact-title">
		<img src="../../../images/left-c.jpg" />
		<p>{{navtitle}}</p>
		<img src="../../../images/right-c.jpg" />
	</div>
</template>

<script>
	export default {
		props: ["navtitle"]
	}
</script>

<style scoped>
	p {
		margin: 0;
		padding: 0;
	}
	
	.contact-title {
		display: flex;
		width: 440px;
		margin: 0 auto;
		position: relative;
		margin-top: 50px;
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
</style>