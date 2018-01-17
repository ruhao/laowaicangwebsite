<template>
	<div>
		<div class="wraperwidth">
			<div class="productlistbox">
				<div class="secondul">产品业务</div>
				<div class="secondul" @click="getsecond(0)">
					<div class="secondarea">
						<div v-for="item in alldata" class="secondcon" @click="getsec(item.children,item.text)">
							{{item.text}}
						</div>
					</div>
				</div>
				<div class="secondul" @click="getsecond(1)" v-if="cidtir">
					{{cidtir1}}
					<div class="secondarea">
						<div v-for="item in cidtir" class="secondcon" @click="getthird(item.children,item.text)">
							{{item.text}}
						</div>
					</div>
				</div>
				<div class="secondul" @click="getsecond(2)" v-if="cidfour">
					{{cidfour1}}
					<div class="secondarea">
						<div v-for="item in cidfour" class="secondcon" @click="getfour(item.children,item.text)">
							{{item.text}}
						</div>
					</div>
				</div>
				<div class="secondul" @click="getsecond(2)" v-if="cidfifth">
					{{cidfifth1}}
					<div class="secondarea">
						<div v-for="item in cidfour" class="secondcon" @click="getfifth(item.children)">
							{{item.text}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="wraperwidth">
			<div v-for="item in fliter.data6" class="serverbox" @mouseenter="moveup(item.num)" @mouseleave="movedown(item.num)">
				<router-link :to="{name:'severdetail',params:{content:item}}">
					<div class="serverbox1"><img :src="item.imgurl"></div>
				</router-link>
				<router-link :to="{name:'severdetail',params:{content:item}}">
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
	import PageJs from "../common/page.js"
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
				},
				alldata: [],
				tempdata: [],
				listcid: [],
				cidtir:"",
				cidfour:"",
				cidtir1:"",
				cidfour1:"",
				cidfifth1:"",
				cidfifth:"",
				id: "5a5c123d6354202600f286ff",
				second: false,
			}
		},
		methods: {
			getcid(data, id) {
				this.listcid = []
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
			getlistcid(data) {
				if(data.children) {
					let ll = data.children.length
					for(let i = 0; i < ll; i++) {
						this.getlistcid(data.children[i])
					}
				} else {
					this.listcid.push(data._id)
				}
			},
			getsec(value,value1){
				this.cidtir=value
				this.cidtir1=value1
			},
			getthird(value,value1){
				this.cidfour=value
				this.cidfour1=value1
			},
			getfour(value,value1){
				this.cidfifth=value
				this.cidfifth1=value1
			},
			getfifth(){
				
			},
			getsecond(index) {
				let vv = this.alldata.length
				if(this.second) {
					this.second = false
					document.getElementsByClassName("secondarea")[index].style.height = 0 + "px"
				} else {
					this.second = true
					document.getElementsByClassName("secondarea")[index].style.height = vv * 40 + "px"
				}
			},
			moveup(value) {
				document.getElementsByClassName("serverbox2")[value].id = "activet";
			},
			movedown(value) {
				document.getElementsByClassName("serverbox2")[value].id = "";
			}
		},
		created() {
			this.getData()
			this.$http.get("http://localhost:3000/kind/data").then(res => {
				this.alldata = res.data[0].children[5].children
				this.getcid(this.alldata, this.id)
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
		width: 350px;
		position: relative;
		height: 350px;
		float: left;
		cursor: pointer;
		overflow: hidden;
		z-index: 11;
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
		top: 350px;
		left: 0px;
		background: #f9f1e9;
		width: 350px;
		height: 350px;
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