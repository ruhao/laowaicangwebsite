<template>
<div class="bodywidth">
    <div class="wraperwidth">
        <ul>
            <li class="headernavleft"><router-link to='/index' tag='span' class="navfont" active-class="routeactive">网站首页</router-link></li>
            <li class="headernavleft"><router-link to='/index' tag='span' class="navfont" active-class="routeactive">关于我们</router-link></li>
            <li class="headernavleft"><router-link to='/index' tag='span' class="navfont">产品业务</router-link></li>
            <li class="headernavleft"><router-link to='/index' tag='span' class="navfont">网络服务</router-link></li>
            <li class="headernavmid"></router-link><img src="http://www.laowaicang.com/templates/main/images/logo.png"></li>
            <li class="headernavright"><router-link to='/index' tag='span' class="navfont">新闻动态</router-link></li>
            <li class="headernavright"><router-link to='/index' tag='span' class="navfont">人力资源</router-link></li>
            <li class="headernavright"><router-link to='/index' tag='span' class="navfont">在线留言</router-link></li>
            <li class="headernavright"><router-link to='/index' tag='span' class="navfont">联系我们</router-link></li>
        </ul>
    </div>
        <div class="headernavlast"><router-link to='/index' tag='span' class="navfont">CN</router-link><span class="navfontapsn">|</span><router-link class="navfont" to='/index' tag='span'>EN</router-link></div>
    <div><img class="headerbg" src="http://www.laowaicang.com/templates/main/images/about-ban.jpg"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    } 
  }
}
</script>

<style scoped>
    .bodywidth{
      width:100%;
      background: ;
    }
    .wraperwidth{
      width:1420px;
      margin:0 auto;
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    ul{
      margin-top:30px;
      list-style:none;
    }
    .headernavleft{
      width:150px;
      text-align:left;
    }
    .navfont{
    	color: white;
    	cursor: pointer;
    }
    .navfont:hover{
    	color: #ee882a;
    }
    .routeactive{
    	color: #ee882a;
    }
    .headernavright{
    	width: 150px;
    	text-align: right;
    }
    .headernavlast{
    	position: absolute;
    	top:20px;
    	right:30px;	
    }
    .navfontapsn{
    	color: white;
    	margin: 0 10px;
    	cursor: pointer;
    }
    .headernavmid{
    	margin-top: -18px;
    }
    li{
      float:left;
    }
</style>
