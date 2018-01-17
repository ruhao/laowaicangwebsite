<template>
	<div>
		<Nav navtitle="行业动态"></Nav>

		<div class="bodycolor">
			<div class="wraperwidth">
				<div v-for="item in fliter.data6">
					<div class="cnbox">
						<div class="cnbox1">
							<div class="cnbox3">
								<p class="cnboxp1"><span>{{item.hday}}</span>{{item.hyear}}</p>
								<p class="cnboxp2">{{item.htitle}}</p>
								<p class="cnboxp3">{{item.hcontent}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="wraperwidth">
				<div class="page">
					<ul v-if="li7>=7">
						<li @click="prev"><span>上一页</span></li>
						<li class="li"><span @click="changepage(li1,1)">{{this.li1}}</span></li>
						<li class="li"><span v-if="li2===2" @click="changepage(li2,2)">{{this.li2}}</span>
							<span v-else>..{{this.li2}}</span>
						</li>
						<li class="li"><span @click="changepage(li3,3)">{{this.li3}}</span></li>
						<li class="li"><span @click="changepage(li4,4)">{{this.li4}}</span></li>
						<li class="li"><span @click="changepage(li5,5)">{{this.li5}}</span></li>
						<li class="li"><span v-if="li6==='...'">{{this.li6}}</span>
							<span v-else @click="changepage(li6,6)">{{this.li6}}</span>
						</li>
						<li class="li"><span @click="changepage(li7,7)">{{this.li7}}</span></li>
						<li @click="next"><span>下一页</span></li>
					</ul>
					<ul v-else>
						<li @click="prev"><span>上一页</span></li>
						<li class="li" v-for="item in li7">							
							<span @click="changepage(item,item)">{{item}}</span>
						</li>
						<li @click="next"><span>下一页</span></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageJs from "../common/page.js"
	import Nav from "../common/nav.vue"
	export default {
		mixins: [PageJs],
		data() {
			return {
				apimodel:"news",
				pagenum:[],
				companynews: [],
				li1: 1,
				li2: 2,
				li3: 3,
				li4: 4,
				li5: 5,
				li6: "...",
				li7: 7,
				fliter: {
					data6: [],
					type: "2",
					limit: 8,
					page: 1,
				}
			}
		},
		methods: {},
		components: {
			Nav,
		},
		created() {
			this.getData()
		},
		mounted() {
			console.log(document.getElementsByClassName("li")[0])
			document.getElementsByClassName("li")[0].id = "active"
		}
	}
</script>

<style scoped>
	p,
	img,
	ul,
	li {
		margin: 0;
		padding: 0;
	}
	
	.bodycolor {
		background: #f5f5f5;
		margin-top: 50px;
		padding-top: 50px;
	}
	
	.wraperwidth {
		width: 1420px;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.cnbox {
		width: 700px;
		float: left;
		display: flex;
		margin-top: 20px;
	}
	
	.cnbox:nth-of-type(2n+1) {
		margin-right: 10px;
	}
	
	.cnbox1 {
		width: 700px;
		height: 210px;
		background: white;
		position: relative;
	}
	
	.cnbox3 {
		width: 640px;
		height: 160px;
		margin: 20px;
		padding-top: 10px;
		background: #f5f5f5;
	}
	
	.cnboxp1 {
		color: #ee882a;
		margin-left: 40px;
	}
	
	.cnboxp1 span {
		font-size: 48px;
	}
	
	.cnboxp2 {
		margin-left: 40px;
		font-weight: bold;
	}
	.cnboxp3{
		margin-top: 10px;
		margin-left: 40px;
		margin-right: 20px;
		font-size: 12px;
		color: #666666;
	}
	.page {
		margin-top: 30px;
	}
	
	.page ul {
		overflow: hidden;
		height: 50px;
		width: 700px;
		list-style: none;
		margin: 30px auto;
	}
	
	.page ul li {
		float: left;
		margin-left: 20px;
		border: solid 1px #00B7FF;
		line-height: 30px;
		border-radius: 5px;
		cursor: pointer;
		background: white;
		color: #00B7FF;
	}
	
	.page ul li:hover {
		color: #EE882A;
		border: solid 1px #EE882A;
	}
	
	.page ul li span {
		padding: 0 15px;
		background: white;
	}
	
	#active {
		color: #EE882A;
		border: solid 1px #EE882A;
	}
</style>