import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'//异步请求数据模块
import axios from 'axios'
import VueAxios from 'vue-axios'
import {routes} from './router.js';// 路由列表
import {store} from './store.js'//vuex


Vue.use(VueAxios,axios);
Vue.use(VueRouter);

//路由及跳转方式
const router=new VueRouter({
  routes,
  mode:'history'
})

//实例化
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
