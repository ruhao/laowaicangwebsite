<template>
	<div>
		<Nav navtitle="公司照片"></Nav>
		<div class="wrap" id="wrap" @mouseenter="arrappend" @mouseleave="arrhide">
			<div class="slide" id="slide">
				<ul>
					<li v-for="item in sdarr">
						<img :src="item" alt="" />
					</li>
				</ul>
				<div class="arrow" id="arrow">
					<a href="javascript:;" class="prev" @click="prev"></a>
					<a href="javascript:;" class="next" @click="next"></a>
				</div>

			</div>
			<div>
				<p class="titlep">{{this.content}}</p>
				<p class="timep">{{this.detaildate}}</p>
			</div>
		</div>

	</div>
</template>

<script>
	import Nav from "../common/nav.vue"
	export default {
		data() {
			return {
				flagr: true,
				sdarr: [],
				content: "",
				detaildate: "",
				json: [ //  包含了5张图片里面所有的样式
					{ //  1
						width: 400,
						top: 100,
						left: -50,
						opacity: 20,
						z: 2
					},
					{ // 2
						width: 500,
						top: 70,
						left: 0,
						opacity: 80,
						z: 3
					},
					{ // 3
						width: 600,
						top: 20,
						left: 300,
						opacity: 100,
						z: 4
					},
					{ // 4
						width: 500,
						top: 70,
						left: 700,
						opacity: 80,
						z: 3
					},
					{ //5
						width: 400,
						top: 100,
						left: 850,
						opacity: 20,
						z: 2
					}
				],
			}
		},
		methods: {
			animate(obj, json, fn) {
				// 第一参数 动的对象   2  attr  动的那个属性   3   属性值少多少
				clearInterval(obj.timer);
				obj.timer = setInterval(function() {
					let flag = true; //  用来判断是否停止定时器   定时器的里面
					//  每隔 30 毫秒就要运行一次
					for(var k in json) { // k 属性     json[k] 是属性值
						// 第一 k 是 width
						// 第二 k     height
						//  leader  =  600 -  100
						// leader = leader + (target - leader )  /10 ;
						//  计算步长
						// target 目标位置    leader 不清楚，我们不知道用户改那个属性
						// 检测用户给我们了什么属性，  我们就用这个属性的值 来计算
						// 我们怎么知道用户给我们属性，我们怎么又能得到属性的值呢？
						//  var leader = obj.style[attr];  他只能得到行内式
						var leader = 0;
						// 因为透明度是 小数   取值 0~1 之间    第二个  它没有单位
						if(k == "opacity") {
							// 先解决小数的问题
							leader = Math.round(window.getComputedStyle(obj, null)[k] * 100) || 100;
							// 如果没有opacity  默认当 1 看    1* 100  = 100
							// 我们去过来的是  0.3  但是小数不好计算 我们乘以100   30  好计算
						} else {

							leader = parseInt(window.getComputedStyle(obj, null)[k]) || 0;
							// 他本身有单位 所以要去掉    默认的默认是 0
						}
						//去掉px 的方法   parseInt(25px)   25
						/* alert(leader);*/

						var step = (json[k] - leader) / 10;
						step = step > 0 ? Math.ceil(step) : Math.floor(step);
						leader = leader + step;
						if(k == "opacity") { // 透明是不加单位的  不要加px
							obj.style.opacity = leader / 100;
							//                    opacity: 0.4;
							//                    filter: alpha(opacity = 40);     /*不能改只能是 40  不能是 0.4*/
							obj.style.filter = "alpha(opacity = " + leader + ")";
						}
						// 设置层级
						else if(k == "zIndex") {
							obj.style.zIndex = json[k]; //  直接给值
						} else {
							obj.style[k] = leader + "px"; // 其他的要单位
						}
						if(leader != json[k]) { //  只要三个属性有一个没有到达，我就取反
							// 这句话要写到 for in 里面   因为有三个属性，所以用 for in 才能遍历
							// 三个都到了 都不执行这句话了
							flag = false;
						}
					}
					// console.log(flag);
					if(flag) {
						clearInterval(obj.timer);
						if(fn) { // 如果有函数传递过来  ， 定时器结束了，说明动画结束  可以执行 回调函数
							fn(); // 执行函数  fn + ();
						}
					}
				}, 30)
			},

			move(x) {
				let slide = document.getElementById("slide");
				let lis = slide.children[0].children;
				if(x != undefined) { // 如果没有值传递过来，就应该  不执行 里面的语句直接遍历json
					if(x) {
						// 交换 反向json   左侧
						this.json.unshift(this.json.pop())
					} else {
						// 正向 json
						this.json.push(this.json.shift());
					}
				}
				// 交换完毕 json 之后，就要 循环执行一次
				for(let i = 0; i < this.json.length; i++) {
					this.animate(lis[i], {
						width: this.json[i].width,
						top: this.json[i].top,
						left: this.json[i].left,
						opacity: this.json[i].opacity,
						zIndex: this.json[i].z
					}, function() {

					})
				}
			},
			arrappend() {
				document.getElementById("arrow").style.opacity = 1
			},
			arrhide() {
				document.getElementById("arrow").style.opacity = 0
			},
			prev() {
				//				if(this.flagr == true) { // 实现按钮只能点击一次
				this.move(true);
				//					this.flagr = false;
				//				}
			},
			next() {
				//				if(this.flagr == true) { // 实现按钮只能点击一次
				this.move(false);
				//					this.flagr = false;
				//				}
			}
		},
		components: {
			Nav,
		},
		created() {
			this.content = this.$route.params.content.content
			this.detaildate = this.$route.params.content.detaildate
			this.sdarr.push(this.$route.params.content.zimgurl1)
			this.sdarr.push(this.$route.params.content.zimgurl2)
			this.sdarr.push(this.$route.params.content.zimgurl3)
			this.sdarr.push(this.$route.params.content.zimgurl4)
			this.sdarr.push(this.$route.params.content.zimgurl5)
		},
		mounted() {
			this.move()
		}
	}
</script>

<style scoped>
	ol,
	ul {
		list-style: none
	}
	
	a {
		text-decoration: none
	}
	
	fieldset,
	img {
		border: 0;
		vertical-align: top;
	}
	
	a,
	input,
	button,
	select,
	textarea {
		outline: none;
	}
	
	a,
	button {
		cursor: pointer;
	}
	
	.wrap {
		width: 1200px;
		margin: 100px auto;
	}
	
	.slide {
		height: 680px;
		position: relative;
	}
	
	.slide li {
		position: absolute;
		left: 200px;
		top: 0;
	}
	
	.slide li img {
		width: 100%;
	}
	
	.arrow {
		opacity: 0;
	}
	
	.prev,
	.next {
		width: 76px;
		height: 112px;
		position: absolute;
		top: 50%;
		margin-top: -56px;
		background: url(../../../images/prev.png) no-repeat;
		z-index: 99;
	}
	
	.next {
		right: 0;
		background-image: url("../../../images/next.png");
	}
	.titlep{
		color: #EE882A;
		text-align: center;
	}
	.timep{
		color: #000000;
		text-align: center;
		font-size: 14px;
	}
</style>