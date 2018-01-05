<template>
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
</template>

<script>
</script>

<style scoped>
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
		border: solid 1px #5B6270;
		line-height: 30px;
		border-radius: 5px;
		cursor: pointer;
		background: white;
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