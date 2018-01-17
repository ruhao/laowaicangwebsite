<template>
	<div>
		<div><img class="headerbg" src="../../../images/products-ban.jpg"></div>
		<Nav navtitle="产品业务"></Nav>
		<div class="wraperwidth-box">
			<router-view></router-view>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import Nav from "../common/nav.vue"
	import Foot from "../common/footer.vue"
	export default {

		methods: {

		},
		components: {
			Nav,
			Foot,
		},
	}
</script>

<style scoped>
	.headerbg {
		width: 100%;
		min-width: 1420px;
	}
	
	.wraperwidth-box {
		width: 1420px;
		margin: 0 auto;
		margin-top: 30px;
	}
</style>