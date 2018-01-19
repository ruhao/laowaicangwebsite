<template>
	<div>
		<Nav navtitle="产品业务"></Nav>
		<div class="wraperwidth">
			<div class="productlistbox">
				<div class="secondul" @click="getall">产品业务</div>
				<!--二级搜索-->
				<!--用v-if进行判断，用v-for进行循环-->
				<div class="secondul" @click="getsecond(0)">
					{{cidsec1}}
					<div class="secondarea">
						<div v-for="item in alldata" class="secondcon" @click="getsec(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--三级搜索-->
				<div class="secondul" @click="getsecond(1)" v-if="cidtir">
					{{cidfour1}}
					<div class="secondarea">
						<div v-for="item in cidtir" class="secondcon" @click="getthird(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--四级搜索-->
				<div class="secondul" @click="getsecond(2)" v-if="cidfour">
					{{cidfifth1}}
					<div class="secondarea">
						<div v-for="item in cidfour" class="secondcon" @click="getfour(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
				<!--五级搜索-->
				<div class="secondul" @click="getsecond(3)" v-if="cidfifth">
					{{cidsix1}}
					<div class="secondarea">
						<div v-for="item in cidfifth" class="secondcon" @click="getfifth(item.children,item.text,item)">
							{{item.text}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="wraperwidth">
			<div v-for="item in fliter.data6" class="serverbox" @mouseenter="moveup(item.num)" @mouseleave="movedown(item.num)">
				<router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:tempdata}}}">
					<div class="serverbox1"><img :src="item.imgurl"></div>
				</router-link>
				<router-link :to="{name:'productdetail',params:{content:{content:item,navname:cidsec1,relative:tempdata}}}">
					<div class="serverbox2">
						<img src="../../../images/products2-1.jpg">
						<p class="prolist">
							{{item.name}}
						</p>
					</div>
				</router-link>
			</div>
			<div style="clear: both;"></div>
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
	import PageJs from "../common/page.js";
	import Nav from "../common/nav.vue";
	export default {
		mixins: [PageJs],
		data() {
			return {
				apimodel: "products",
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
					limit: 12,
					page: 1,
					cateId: [],
				},
				alldata: [],
				tempdata: [],
				cidtir: "",
				cidfour: "",
				cidfifth: "",
				cidsix: "",
				cidsec1: "",
				cidtir1: "可选分类",
				cidfour1: "可选分类",
				cidfifth1: "可选分类",
				cidsix1: "可选分类",
				id: "",
				second: false,//用于判断相同处展开与收拢
				flag: 6,//用于判断点击不同处的展开与收拢
			}
		},
		methods: {
			//过得初始的数据
			getcid(data, id) {
				this.fliter.cateId = []
				let ii = data.length
				for(let i = 0; i < ii; i++) {
					if(data[i]._id == id) {
						this.tempdata = data[i];
						this.getlistcid(this.tempdata);
						return;
					} else {
						if(data[i].children) {
							this.getcid(data[i].children, id)
						}
					}
				}
			},
			//获取id数组与数据库进行交互
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
			//this.cidtir 是多级列表选项
			//cidtir 是多级列表的标题
			//getlistcid重新获取id实现精确分类
			getall(){
				this.fliter.cateId=[],
				this.getData()
			},
			getsec(value, value1, value2) {
				this.cidsec1= value2.text 
				this.cidtir = value
				this.cidtir1 = value1
				this.getlistcid(value2)
				this.getData()
				console.log(this.cidtir)
			},
			getthird(value, value1, value2) {
				this.cidfour = value
				this.cidfour1 = value1
				this.getlistcid(value2)
				this.getData()
				console.log(this.cidtir)
			},
			getfour(value, value1, value2) {
				this.cidfifth = value
				this.cidfifth1 = value1
				this.getlistcid(value2)
				this.getData()
			},
			getfifth(value, value1, value2) {
				this.cidsix = value
				this.cidsix1 = value1
				this.getlistcid(value2)
				this.getData()
			},
			//点击进行动画效果交互
			getsecond(index) {
				console.log(1)
				this.fliter.cateId = [] //重置cateId
				let vv = this.alldata.length //获取数量 来计算secondarea的高度
				let bb = document.getElementsByClassName("secondarea").length//获取循环长度
				if(this.flag == index) {//当点击与上一次同时
					for(let i = 0; i < bb; i++) {
						if(i == index) {//点击部分为展开
							if(this.second) {
								this.second = false
								document.getElementsByClassName("secondarea")[i].style.height = vv * 40 + "px";
							} else {
								this.second = true
								document.getElementsByClassName("secondarea")[i].style.height = 0 + "px"
							}
						} else {
							//其他部分为收拢
							document.getElementsByClassName("secondarea")[i].style.height = 0 + "px"

						}

					}
				} else {
					//点击部分与上次一次不相同时
					for(let i = 0; i < bb; i++) {
						if(i == index) {
							document.getElementsByClassName("secondarea")[i].style.height = vv * 40 + "px";//当前点击的为展开
							this.flag = index;
							this.second = false;//进行设置，避免多点一次的情况出现
						} else {
							document.getElementsByClassName("secondarea")[i].style.height = 0 + "px"//其他的都是收拢

						}

					}
				}

			},
			moveup(value) {
				document.getElementsByClassName("serverbox2")[value].id = "activet";
			},
			movedown(value) {
				document.getElementsByClassName("serverbox2")[value].id = "";
			}
		},
		components: {
			Nav,
		},
		created() {
			this.id=this.$route.params.id.id//接受传递下来的信息
			this.cidsec1=this.$route.params.id.name
			this.$http.get("http://localhost:3000/kind/data").then(res => {
				this.alldata = res.data[0].children[5].children
				this.getcid(this.alldata, this.id)
				console.log(this.cidtir)
				this.getData()
			})
		},
	}
</script>

<style scoped>
	img {
		border: 0;
	}
	
	ul,
	p {
		padding: 0;
		margin: 0;
	}
	
	.wraperwidth {
		min-width: 1420px;
		margin: 30px auto 0;
	}
	
	.secondul {
		width: 200px;
		height: 40px;
		background: #f2Ab69;
		text-align: center;
		z-index: 14;
		position: relative;
		margin: 20px;
		line-height: 40px;
		cursor: pointer;
		color: white;
	}
	
	.secondarea {
		position: absolute;
		top: 40px;
		left: 0;
		width: 100%;
		height: 0px;
		overflow: hidden;
		transition: all 0.5s;
		z-index: 14;
		color: #f2Ab69;
	}
	
	.secondul .secondcon {
		line-height: 40px;
		background: #f8efe7;
		width: 100%;
	}
	
	.productlistbox {
		display: flex;
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
	
	.serverbox {
		width: 338px;
		position: relative;
		height: 338px;
		float: left;
		cursor: pointer;
		overflow: hidden;
		z-index: 11;
		margin-left: 12px;
		margin-top: 12px;
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