// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUl from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import Vuex from 'vuex'
import store from './store/store'
import axios from 'axios'


import '../static/common/css/reset.css'
import '../static/common/css/swiper.min.css'
import 'animate.css'


// import qs from 'qs'
// import 'babel-polyfill'

Vue.config.productionTip = false
/*Vue.config.debug = true*/

Vue.use(ElementUl)
Vue.use(router)
Vue.use(Vuex)
// Vue.use(Swiper)
// Vue.use(eject)

Vue.prototype.$echarts = echarts
Vue.prototype.$http= axios
// Vue.prototype.$http.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // 配置请求头
Vue.prototype.$http.defaults.headers.common['x-access-token'] = store.state.token // 配置请求头token



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
    if (store.state.isLogin) {  // 判断当前的token是否存在
      // console.log('登录信息正确的')

      document.title = to.meta.title

      next();
    }
    else {
      // console.log('登录信息错误的')
      alert('请登录')
      document.title = '登录'
      next({
        path: '/sign',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    document.title = to.meta.title
    next();
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
