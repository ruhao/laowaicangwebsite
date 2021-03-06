import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'//异步请求数据模块
import axios from 'axios'
import iView from 'iview';
import VueAxios from 'vue-axios'
import {routes} from './router.js';// 路由列表
import {store} from './store.js'//vuex
import 'iview/dist/styles/iview.css'



Vue.use(VueAxios,axios);
Vue.use(VueRouter);
Vue.use(iView)

const router=new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
