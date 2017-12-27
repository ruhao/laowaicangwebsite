<template>
	<div>
		<div><img class="headerbg" src="../../../images/liuyan-ban.jpg"></div>
		<div class="contact-title">
			<img src="../../../images/left-c.jpg" />
			<p>在线留言</p>
			<img src="../../../images/right-c.jpg" />
		</div>
		<div class="contact-sketch">
			<p>留下评论，分享你的观点，留下评论，分享你的观点</p>
		</div>
		<div class="message-content">
			<div class="message-content-w">
				<form>
					<label for="title" id="title-label">标&nbsp;&nbsp;题：</label><input type="text" id="title" @blur="titlef" />
					<br />
					<label for="content" id="content-label">内&nbsp;&nbsp;容：</label><textarea id="content" @blur="contentf"></textarea>
					<br />
					<label for="name" id="name-label">姓&nbsp;&nbsp;名：</label><input type="text" id="name" @blur="namef" />
					<br />
					<label for="telephone" id="telephone-label">电&nbsp;&nbsp;话：</label><input type="text" id="telephone" @blur="telephonef" />
					<br />
					<button type="button" id="sub" @click="sub">提交</button>
				</form>
			</div>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
	import Foot from "../common/footer.vue"
	export default {
		data() {
			return {
				flag: [false, false, false, false],
				dataif: {}
			}
		},
		methods: {
			telephonef() {
				let reg = /^1[3|5|7|8]\d{9}$/
				if(reg.test(document.getElementById("telephone").value)) {
					this.flag[3] = true
				} else {
					this.flag[3] = false
				}
			},
			titlef() {
				if(document.getElementById("title").value.trim().length > 0) {
					this.flag[0] = true
				} else {
					this.flag[0] = false
				}
			},
			contentf() {
				if(document.getElementById("content").value.trim().length > 15) {
					this.flag[1] = true
				} else {
					this.flag[1] = false
				}
			},
			namef() {
				if(document.getElementById("name").value.trim().length > 0) {
					this.flag[2] = true
				} else {
					this.flag[2] = false
				}
			},
			sub() {
				if(this.flag[0] && this.flag[2] && this.flag[1] && this.flag[3]) {
					if(confirm("确定提交吗")) {
						this.dataif = {
							title: document.getElementById("title").value,
							content: document.getElementById("content").value,
							name: document.getElementById("name").value,
							telephone: document.getElementById("telephone").value,
							cateId: "5a41bf9d17db19233cf3ddcd"
						}

						this.$http.post('http://localhost:3000/message/data', this.dataif).then(res => {

							setTimeout(function() {
								document.getElementById("title").value = "";
								document.getElementById("content").value = null;
								document.getElementById("name").value = null;
								document.getElementById("telephone").value = null;
								alert("留言成功")
							}, 500)
						})
					}
				} else {
					if(!this.flag[0]) {
						alert("标题不能为空")
						return;
					} else if(!this.flag[1]) {
						alert("内容不能少于15个字")
						return;
					} else if(!this.flag[2]) {
						alert("姓名不能为空")
						return;
					} else if(!this.flag[3]) {
						alert("请输入正确的手机号")
						return;
					}
				}
			}
		},
		components: {
			Foot,
		}
	}
</script>

<style scoped>
	p,
	h3,
	img,
	textarea,
	input {
		margin: 0;
		padding: 0;
	}
	
	.contact-title {
		display: flex;
		width: 440px;
		margin: 0 auto;
		position: relative;
		margin-top: 100px;
	}
	
	.contact-title p {
		line-height: 24px;
		font-size: 24px;
		flex: 1;
		color: #f1662c;
		text-shadow: 1px 1px 1px #f1662c;
	}
	
	.contact-title img {
		height: 20px;
		margin: 3px 40px;
	}
	
	.contact-content {
		width: 1420px;
		margin: 0 auto;
	}
	
	.contact-content-top {
		margin-top: 20px;
		position: relative;
	}
	
	.contact-sketch {
		text-align: center;
	}
	
	.contact-sketch p {
		color: #7a7a7a;
		margin-top: 50px;
		font-size: 14px;
		text-shadow: 0.2px 0.2px 0.2px #cccccc
	}
	
	.message-content-w {
		width: 1420px;
		margin: 0 auto;
	}
	
	#title {
		margin-top: 100px;
	}
	
	#title,
	#name,
	#telephone {
		height: 60px;
		width: 710px;
		border: 0;
		border: dashed #ee882a 1px;
		margin-bottom: 20px;
		position: relative;
	}
	
	#title-label,
	#name-label,
	#telephone-label {
		font-size: 18px;
		margin-right: 45px;
		text-shadow: 0.4px 0.4px 0.4px #cccccc;
		margin-left: 260px;
	}
	
	#content {
		height: 120px;
		width: 710px;
		border: 0;
		border: dashed #ee882a 1px;
		margin-bottom: 20px;
		vertical-align: top;
		resize: none;
	}
	
	#content-label {
		height: 120px;
		font-size: 18px;
		margin-right: 45px;
		text-shadow: 0.4px 0.4px 0.4px #cccccc;
		margin-top: -200px;
		margin-left: 260px;
	}
	
	#sub {
		border: 0;
		border: dashed #ee882a 1px;
		height: 60px;
		width: 160px;
		background: #f8efe7;
		margin-left: 600px;
		margin-top: 35px;
		font-size: 18px;
		color: #f1662c;
		font-weight: 600;
		text-shadow: 0.4px 0.4px 0.4px #f8efe7;
		cursor: pointer;
	}
</style>