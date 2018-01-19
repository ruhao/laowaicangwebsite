<template>
	<div>
		<Nav :navtitle="this.$route.params.content.navname"></Nav>

		<div class="wraperwidth">
			<div class="pdetail-left">
				<div v-if="this.detail.title">
					<p class="pdetail-leftp1">{{this.detail.title}}</p>
					<p class="pdetail-leftp2" v-for="item in this.firsttitle">{{item}}</p>
				</div>
				<div v-if="this.detail.title1">
					<p class="pdetail-leftp1">{{this.detail.title1}}</p>
					<p class="pdetail-leftp2" v-for="item in this.secondtitle">{{item}}</p>
				</div>
				<div v-if="this.detail.title2">
					<p class="pdetail-leftp1">{{this.detail.title2}}</p>
					<p class="pdetail-leftp2" v-for="item in this.thirdtitle">{{item}}</p>
				</div>
				<div v-if="this.detail.imgurl" class="imgsize">
					<img :src="this.detail.imgurl" />
				</div>
				<div v-if="this.detail.introduction">
					<p class="pdetail-leftp2" v-for="item in this.introduction">{{item}}</p>
				</div>
				<div v-if="this.detail.name">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">商品名称:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.name}}</p>
				</div>
				<div v-if="this.detail.describe">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品描述:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.describe}}</p>
				</div>
				<div v-if="this.detail.origin">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">原产地:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.origin}}</p>
				</div>
				<div v-if="this.detail.ingredient">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品材料:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.ingredient}}</p>
				</div>
				<div v-if="this.detail.expiration">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">保质期:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.expiration}}</p>
				</div>
				<div v-if="this.detail.storaged">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">储存方法:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.storaged}}</p>
				</div>
				<div v-if="this.detail.match">
					<p class="pdetail-leftp3"><span class="pdetail-leftspan">产品搭配:</span>&nbsp;&nbsp;&nbsp;&nbsp;{{this.detail.match}}</p>
				</div>
			</div>
			<div class="pdetail-right">
				<p class="pdetail-rightp1">产品推荐</p>
				<div v-for="item in relatived" class="serverbox" @mouseenter="moveup(item.num)" @mouseleave="movedown(item.num)">
					<router-link :to="{name:'productdetail',params:{content:{content:item,navname:'this.$route.params.content.navname',relative:'this.$route.params.content.relative'}}}">
						<div class="serverbox1"><img :src="item.imgurl"></div>
					</router-link>
					<router-link :to="{name:'productdetail',params:{content:{content:item,navname:'this.$route.params.content.navname',relative:'this.$route.params.content.relative'}}}">
						<div class="serverbox2" @click="changepage(item.num)">
							<img src="../../../images/products2-1.jpg">
							<p class="prolist">
								{{item.name}}
							</p>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Nav from "../common/nav.vue";
	export default {
		data() {
			return {
				detail: {},
				firsttitle: [],
				secondtitle: [],
				thirdtitle: [],
				introduction: [],
				cidsec1:"",
				relative:[],
				x: "",
				y: "",
				relatived: [],
				fliter: {
					data6: [],
					limit: 50,
					page: 1,
					cateId: [],
				},
			}
		},
		methods: {
			getdetail(data) {
				let object1 = data.split("&&")
				this.firsttitle = object1
				console.log(this.firsttitle)
			},
			getdetail1(data) {
				let object1 = data.split("&&")
				this.secondtitle = object1
				console.log(this.secondtitle)
			},
			getdetail2(data) {
				let object1 = data.split("&&")
				this.thirdtitle = object1
				console.log(this.thirdtitle)
			},
			getdetail3(data) {
				let object1 = data.split("&&")
				this.introduction = object1
			},
			getlistcid(data) {
				if(data.children) {
					let ll = data.children.length
					for(let i = 0; i < ll; i++) {
						this.getlistcid(data.children[i])
					}
				} else {
					this.fliter.cateId.push(data._id)
				}
			},
			moveup(value) {
				document.getElementsByClassName("serverbox2")[value].id = "activet";
			},
			movedown(value) {
				document.getElementsByClassName("serverbox2")[value].id = "";
			},
			randomre(data) {
				let uu = data.length
				this.x = parseInt(Math.random() * uu)
				this.randomrem(this.x, uu)
			},
			randomrem(x, uu) {
				this.y = parseInt(Math.random() * uu)
				if(this.x == this.y) {
					this.randomrem(this.x, uu)
				}
			},
			changepage(index){
				this.detail=this.relatived[index]
				this.getData()
			},
			getData() {
				this.$http.post("http://localhost:3000/products/list", this.fliter).then(res => { //获取数据
					this.relatived=[]
					this.randomre(res.data.rows)
					res.data.rows[this.x].num=0
					res.data.rows[this.y].num=1
					this.relatived.push(res.data.rows[this.x])
					this.relatived.push(res.data.rows[this.y])
					console.log(this.relatived)
				})
			},

		},
		components: {
			Nav,
		},
		created() {
			this.detail = this.$route.params.content.content
			this.getlistcid(this.$route.params.content.relative)
			this.getData()

			if(this.detail.content) {
				this.getdetail(this.detail.content)
			}
			if(this.detail.content1) {
				this.getdetail1(this.detail.content1)
			}
			if(this.detail.content2) {
				this.getdetail(this.detail.content2)
			}
			if(this.detail.introduction) {
				this.getdetail3(this.detail.introduction)
			}
		}
	}
</script>

<style scoped>
	.wraperwidth {
		width: 1420px;
		margin: 50px auto 0;
		display: flex;
	}
	
	.pdetail-left {
		width: 900px;
		padding: 0 90px;
	}
	
	.pdetail-right {
		flex: 1;
		border-top: 3px solid #EE882A
	}
	
	.pdetail-leftp1 {
		font-size: 18px;
		font-weight: bold;
		color: #464C5B;
	}
	
	.pdetail-leftp2 {
		margin-top: 10px;
		font-size: 14px;
		font-weight: 600;
		color: #464C5B;
	}
	
	.pdetail-leftp3 {
		margin-top: 10px;
		font-size: 16px;
		font-weight: 600;
		color: #464C5B;
	}
	
	.pdetail-leftspan {
		font-size: 18px;
		font-weight: bold;
		color: #464C5B;
	}
	
	.imgsize {
		margin: 30px;
		text-align: center;
	}
	
	.pdetail-rightp1 {
		margin-top: 20px;
		line-height: 30px;
		color: #EE882A;
		font-size: 18px;
		font-weight: 600;
	}
	
	.serverbox {
		width: 338px;
		position: relative;
		height: 338px;
		cursor: pointer;
		overflow: hidden;
		z-index: 11;
		margin-top: 30px;
	}
	
	.serverbox1 {
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.serverbox1 img {
		width: 100%;
		height: 100%;
	}
	
	.serverbox2 {
		position: absolute;
		top: 338px;
		left: 0px;
		background: #f9f1e9;
		width: 338px;
		height: 338px;
		opacity: 0;
		transition: all 0.5s;
		text-align: center;
	}
	
	.serverbox2 img {
		margin-top: 20px;
	}
	
	.prolist {
		margin-top: 50px;
		color: #ee882a;
	}
	
	#activet {
		top: 0px;
		opacity: 0.8;
	}
</style>