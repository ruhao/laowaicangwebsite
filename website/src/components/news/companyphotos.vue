<template>
	<div>
		<Nav navtitle="公司照片"></Nav>
		<div class="wraperwidth">
			<div class="box">
				<div v-for="item in fliter.data6" class="photobox">
					<router-link to="/news/photodetail">
					<img :src="item.zimgurl1">
					</router-link>
				</div>
				<div style="clear: both;"></div>
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
</template>

<script>
	import PageJs from "../common/page.js"
	import Nav from "../common/nav.vue"
	export default {
		mixins: [PageJs],
		data() {
			return {
				pagenum: [],
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
					type: "4",
					limit: 12,
					page: 1,
				}
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

<style scoped>
	.wraperwidth {
		width: 1420px;
		margin: 0 auto;
	}
	
	img {
		border: 0;
	}
	
	ul,
	p {
		padding: 0;
		margin: 0;
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
	
	.photobox {
		width: 340px;
		margin-left: 15px;
		float: left;
	}
	
	.photobox img {
		width: 340px;
	}
	
	.box {
		margin-top: 50px;
	}
	
	#active {
		color: #EE882A;
		border: solid 1px #EE882A;
	}
</style>