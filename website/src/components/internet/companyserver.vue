<template>
	<div>
		<Nav navtitle="网络营销"></Nav>
		<div class="wraperwidth">
			<div v-for="item in server" class="serverbox" @mouseenter="moveup(item.num)" @mouseleave="movedown(item.num)">
				<router-link :to="{name:'severdetail',params:{content:item}}">
					<div class="serverbox1"><img :src="item.imgurl"></div>
				</router-link>
				<router-link :to="{name:'severdetail',params:{content:item}}">
					<div class="serverbox2">
						<p class="serverboxp1">{{item.title}}</p>
						<p class="serverboxp2">{{item.content}}</p>
					</div>
				</router-link>
			</div>
			<div style="clear: both;"></div>
		</div>
	</div>
</template>

<script>
	import Nav from "../common/nav.vue"
	export default {
		data() {
			return {
				server: [],
				fliter: {
					limit: 12,
					page: 1,
				}
			}
		},
		methods: {
			getData() {
				this.$http.post("http://localhost:3000/internet/list").then(res => {
					var ii = res.data.rows.length
					for(let i = 0; i < ii; i++) {
						res.data.rows[i].num = i
						this.server.push(res.data.rows[i])
					}

				})
			},
			moveup(value) {
				document.getElementsByClassName("serverbox2")[value].id = "active";
			},
			movedown(value) {
				document.getElementsByClassName("serverbox2")[value].id = "";
			}
		},
		components: {
			Nav,
		},
		created() {
			this.getData()
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
	
	.serverbox {
		width: 350px;
		position: relative;
		height: 350px;
		float: left;
		cursor: pointer;
		overflow: hidden;
	}
	
	.serverbox1 {
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.serverbox2 {
		position: absolute;
		top: 350px;
		left: 0px;
		background: #f9f1e9;
		width: 338px;
		height: 338px;
		opacity: 0;
		transition: all 0.5s;
	}
	
	.serverboxp1 {
		margin-top: 40px;
		margin-left: 30px;
		color: #ee882a;
		text-shadow: 0.5px 0.5px 0.5px #ee882a;
		position: relative;
		z-index: 10px;
		opacity: 1;
		cursor: pointer;
	}
	
	.serverboxp2 {
		margin: 80px 30px 0;
		font-size: 12px;
		line-height: 25px;
		color: #464C5B;
	}
	
	#active {
		top: 0px;
		opacity: 0.8;
	}
</style>