<template>
	<div>
		<Nav navtitle="公司新闻"></Nav>

		<div class="bodycolor">
			<div class="wraperwidth">
				<div v-for="item in fliter.data6">
					<div class="cnbox">
						<div class="cnbox1">
							<div class="cnbox3" @mouseenter="newsmove(item.limitnum)">
								<p class="cnboxp1"><span>{{item.day}}</span>{{item.year}}</p>
								<p class="cnboxp2">{{item.title}}</p>
							</div>
						</div>
						<div class="cnbox2"><img :src="item.imgurl" /></div>
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
						<li v-for="item in li7" class="li">							
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
					type: "1",
					limit: 8,
					page: 1,
				}
			}
		},
		methods: {
			newsmove(index){
				console.log(index)
			}
		},
		components: {
			Nav,
		},
		created() {
			this.getData()
		},
		mounted() {
			document.getElementsByClassName("li")[0].id = "active"
		}
	}
</script>

<style>
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
		width: 350px;
		height: 210px;
		background: white;
		position: relative;
	}
	
	.cnbox2 {
		width: 350px;
		height: 210px;
		overflow: hidden;
	}
	
	.cnbox2 img {
		width: 350px;
		height: 210px;
	}
	
	.cnbox3 {
		width: 350px;
		height: 170px;
		background: #f5f5f5;
		margin-top: 20px;
		margin-left: 20px;
		position: absolute;
		transition: all 1s;
	}
	
	.cnboxp1 {
		color: #ee882a;
		margin-left: 40px;
		margin-top: 30px;
	}
	
	.cnboxp1 span {
		font-size: 48px;
	}
	
	.cnboxp2 {
		margin-left: 40px;
		margin-top: 15px;
		font-weight: bold;
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