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
		<label for="title" id="title-label">标&nbsp;&nbsp;题：</label><input type="text" id="title"/>
		<br />
		<label for="content" id="content-label">内&nbsp;&nbsp;容：</label><textarea type="text" id="content"/></textarea>
		<br />
		<label for="name" id="name-label">姓&nbsp;&nbsp;名：</label><input type="text" id="name"/>
		<br />
		<label for="telephone" id="telephone-label">电&nbsp;&nbsp;话：</label><input type="text" id="telephone" @blur="telephonef"/>
		<br />
		<button type="button" id="sub" @click="sub">提交</button>
		</div>
	</div>
	<Foot></Foot>
	</div>
</template>

<script>
	import Foot from "../common/footer.vue"
	export default {
		data(){
			return{
				telephoneflag:false
			}
		},
		methods:{
			telephonef(){
				let reg=/^1[3|5|7|8]\d{9}$/
				if(reg.test(document.getElementById("telephone").value)){
					this.telephoneflag=ture
				}
			},
			sub(){
				if(this.telephoneflag){
					
				}else{
					alert("请出入正确的手机号")
				}
			}
		},
		components:{
			Foot,
		}
	}
</script>

<style scoped>
	p,h3,img,textarea{
		margin: 0;
		padding: 0;
	}
	
	.contact-title {
		display: flex;
		width: 440px;
		margin: 100px auto 0;
		position: relative;
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
	.message-content{
		margin-top: 50px;
	}
	.message-content-w{
		width: 1420px;
		margin: 0 auto;
	}
	#title-label{
		font-size: 18px;
		margin-right: 45px;
		text-shadow: 0.4px 0.4px 0.4px #cccccc
	}
	#title,#name,#telephone{
		height: 60px;
		width: 710px;
		border: 0;
		border: dashed #ee882a 1px;
		margin-bottom: 20px;
	}
	#title-label,#name-label,#telephone-label{
		font-size: 18px;
		margin-right: 45px;
		text-shadow: 0.4px 0.4px 0.4px #cccccc;
		margin-left: 260px;
	}
	#content{
		height: 120px;
		width: 710px;
		border: 0;
		border: dashed #ee882a 1px;
		margin-bottom: 20px;
		vertical-align:top;
	}
	
	#content-label{
		height: 120px;
		font-size: 18px;
		margin-right: 45px;
		text-shadow: 0.4px 0.4px 0.4px #cccccc;
		margin-top: -200px;
		margin-left: 260px;		
	}
	#sub{
		border: 0;
		border: dashed #ee882a 1px;
		height: 60px;
		width:160px;
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