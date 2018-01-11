<template>
	<div>
		<Nav navtitle='企业文化'></Nav>
		<div class="wraperwidth">
			<div v-for="item in this.fliter.data6">
				<div v-if="item.num%2==0" class="honor">
					<div class="honor1">
						<img :src="item.imgurl">
					</div>
					<div class="honor2">
						<img :src="item.bgimg" />
						<div class="honorcontent">
							<p class="honortitle">{{item.title}}</p>
							<p class="honorcontentp" v-for="it in item.content">
								{{it}}
							</p>
						</div>
					</div>
				</div>
				<div v-else="" class="honor">
					<div class="honor2">
						<img :src="item.bgimg" />
						<div class="honorcontent">
							<p class="honortitle">{{item.title}}</p>
							<p class="honorcontentp" v-for="it in item.content">
								{{it}}
							</p>
						</div>
					</div>
					<div class="honor1">
						<img :src="item.imgurl">
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
				fliter: {
					data6: [],
					type: "2",
					limit: 8,
				}
			}
		},
		methods: {

		},
		components: {
			Nav,
		},
		created() {
			this.$http.post("http://localhost:3000/about/list", this.fliter).then(res => {
				let ii = res.data.rows.length
				for(let i = 0; i < ii; i++) {
					res.data.rows[i].content = res.data.rows[i].content.replace(/；/g, ";")//进行替换，把中英文的；统一起来
					res.data.rows[i].content = res.data.rows[i].content.split(";")//进行分割 使语句分行显示
					let ll = res.data.rows[i].content.length
					for(let j=0;j<ll;j++){
						res.data.rows[i].content[j]=res.data.rows[i].content[j]+";"//进行；好统一还原
					}
					res.data.rows[i].num = i
				}

				this.fliter.data6 = res.data.rows
			})
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
	
	.honor {
		display: flex;
	}
	
	.honor1 {
		width: 710px;
		height: 300px;
		overflow: hidden;
	}
	
	.honor2 {
		width: 710px;
		height: 300px;
		overflow: hidden;
		position: relative;
	}
	
	.honor1 img {
		width: 100%;
		height: 100%;
	}
	
	.honor2 .honorcontent {
		position: absolute;
		width: 100%;
		height: 100%;
		top:0;
		left: 0;
		z-index: 2;
	}
	.honortitle{
		margin-left:50px;
		margin-top: 35px;
		font-size: 28px;
		color: #EE882A;
		margin-bottom: 35px;
	}
	.honorcontentp{
		margin-left: 50px;
		margin-right: 50px;
		font-size: 14px;
		line-height: 25px;
		color: #5B6270;
		text-shadow: 0.4px 0.4px 0.4px #9BA7B5;
		letter-spacing: 2px;
	}
	
</style>