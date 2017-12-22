<template>
	<div class="bodywidth">
		<div class="wraperwidth">
			<ul>
				<li class="headernavleft">
					<router-link to='/' tag='span' class="navfont" active-class="routeactive" exact>网站首页</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/about' tag='span' class="navfont" active-class="routeactive">关于我们</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/product' tag='span' class="navfont" active-class="routeactive">产品业务</router-link>
				</li>
				<li class="headernavleft">
					<router-link to='/internet' tag='span' class="navfont" active-class="routeactive">网络服务</router-link>
				</li>
				<li class="headernavmid">
					</router-link><img src="http://www.laowaicang.com/templates/main/images/logo.png"></li>
				<li class="headernavright">
					<router-link to='/news' tag='span' class="navfont" active-class="routeactive">新闻动态</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/hr' tag='span' class="navfont" active-class="routeactive">人力资源</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/message' tag='span' class="navfont" active-class="routeactive">在线留言</router-link>
				</li>
				<li class="headernavright">
					<router-link to='/contact' tag='span' class="navfont" active-class="routeactive">联系我们</router-link>
				</li>
			</ul>
		</div>
		<div class="headernavlast">
			<router-link to='/index' tag='span' class="navfont">CN</router-link><span class="navfontapsn">|</span>
			<router-link class="navfont" to='/index' tag='span'>EN</router-link>
		</div>
		<div>
			<transition :name="transitionName">

				<router-view class="child-view"></router-view>

			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				transitionName: 'slide-left'
			}
		},

		beforeRouteUpdate(to,
			from, next) {
			let isBack =
				this.$router.isBack
			if(isBack) {

				this.transitionName =
					'slide-right'
			} else {

				this.transitionName =
					'slide-left'
			}
			this.$router.isBack =
				false
			next()

		}

	}
</script>

<style scoped>

	.wraperwidth {
		width: 1420px;
		margin: 0 auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
	}
	
	ul {
		margin-top: 30px;
		list-style: none;

	}
	
	.headernavleft {
		width: 150px;
		text-align: left;
	}
	
	.navfont {
		color: white;
		cursor: pointer;
	}
	
	.navfont:hover {
		color: #ee882a;
	}
	
	.routeactive {
		color: #ee882a;
	}
	
	.headernavright {
		width: 150px;
		text-align: right;
	}
	
	.headernavlast {
		position: absolute;
		top: 30px;
		right: 30px;
	}
	
	.navfontapsn {
		color: white;
		margin: 0 10px;
		cursor: pointer;
	}
	
	.headernavmid {
		margin-top: -18px;
	}
	
	li {
		float: left;
	}
		.child-view {
		position: absolute;
		width: 100%;
		transition: all 1s cubic-bezier(.55, 0, .1, 1);
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(50px, 0);
		transform: translate(50px, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		-webkit-transform: translate(-50px, 0);
		transform: translate(-50px, 0);
	}
	
	.bodywidth {
		width: 100%;
		background: ;
	}
	
</style>