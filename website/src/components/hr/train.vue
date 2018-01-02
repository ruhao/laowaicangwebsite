<template>
	<div>
		<div class="contact-title">
			<img src="../../../images/left-c.jpg" />
			<p>人才培训</p>
			<img src="../../../images/right-c.jpg" />
		</div>
		<div class="traincontent">
			<p class="traincontent-title">内部培训</p>
			<p class="traincontent-tcontent">培训体系是集团人才培养体系的重要组成部分，也是优秀的声誉体系之一。在培训模式上，该组采用混合培训，包括在职培训、课堂培训、在线培训、远程培训等。在职培训是最重要的组成部分之一，包括直接经理制、导师制等。</p>
			<div v-for="item in this.fliter.data6">
				<p class="traindetail-title">训练</p>
				<p class="traindetail-title">{{item.edpattern}}</p>
				<p class="traincontent-tcontent">{{item.edcontent}}</p>
				<div class="traindetail-content">
					<img :src="item.edimgurl">
					<img :src="item.edimgurl1">
				</div>
			</div>
			<p class="traincontent-bottom">
				作为激励机制的重要组成部分，集团具有很强的薪酬体系和员工福利。在某种程度上，一组工作人员举行了许多其他公司没有办法提供“选择权的工作方式，可选择是否执行弹性系统，包括工作时间的自由选择和自由决定是否参加员工持股计划，选择在家里一天的工作自由。
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				information: "",
				fliter: {
					data6: [],
					type: "2",
					limit: 2,
				}
			}
		},
		created() {
			this.$http.post('http://localhost:3000/hr/list', this.fliter).then(res => {
				this.fliter.data6 = res.data.rows
				this.information = res.data.rows[0].edreson
			})
		}
	}
</script>

<style scoped>
		p {
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
	.traincontent{
		width: 1420px;
		margin: 30px auto 0;
	}
	.traincontent-title{
		color: #666666;
		text-shadow: 0.5px 0.5px 0.5px #666666;
	}
	.traincontent-tcontent{
		margin-top: 10px;
		font-size: 14px;
		color: #666666;
		text-shadow: -0.2px 0.2px 0.2px #666666;
	}
	.traindetail-title{
		margin-top: 30px;
		color: #666666;
		text-shadow: 0.5px 0.5px 0.5px #666666;
	}
	.traindetail-content{
		margin-top: 50px;
		display: flex;
	}
	.traincontent-bottom{
		margin-top: 45px;
		font-size: 14px;
		color: #666666;
		text-shadow: -0.2px 0.2px 0.2px #666666;
	}
</style>