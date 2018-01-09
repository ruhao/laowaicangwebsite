<template>
	<div>
		<Nav navtitle='发展足迹'></Nav>
		<div class="wraperwidth">
			<img src="../../../images/aboutfoot.jpg" />
		</div>
	</div>
</template>

<script>
	import Nav from "../common/nav.vue"
	export default {
		components: {
			Nav,
		}
	}
</script>

<style scoped>
	p,
	img {
		margin: 0;
		padding: 0;
	}
	
	.wraperwidth {
		width: 1420px;
		margin: 0 auto;
		margin-top: 50px;
	}

	
</style>