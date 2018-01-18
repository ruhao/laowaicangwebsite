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
			<div class="pdetail-right"></div>
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
			}
		},
		components: {
			Nav,
		},
		created() {
			this.detail = this.$route.params.content.content
			this.getdetail(this.detail.content)
			this.getdetail1(this.detail.content1)
			this.getdetail2(this.detail.content2)
			this.getdetail3(this.detail.introduction)
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
		width: 1000px;
	}
	
	.pdetail-right {
		flex: 1;
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
</style>