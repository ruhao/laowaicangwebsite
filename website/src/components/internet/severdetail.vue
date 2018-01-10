<template>
	<div>
		<Nav navtitle="网络营销"></Nav>
		<div class="wraperwidth">
			<p class="content">
				{{server}}
			</p>
		</div>
	</div>
</template>

<script>
	import Nav from "../common/nav.vue"
	export default {
		data() {
			return {
				server: "",
			}
		},
		methods: {
			
		},
		components: {
			Nav,
		},
		created() {
			this.server=this.$route.params.content.content
		}
	}
</script>

<style scoped>
	p {
		margin: 0;
		padding: 0;
	}
	
	.wraperwidth {
		width: 1420px;
		margin: 45px auto 0;
	}
	
	.content{
		color: #666666;
		font-size: 12px;
		text-shadow: 0.5px 0.5px 0.5px #9BA7B5;
	}
</style>