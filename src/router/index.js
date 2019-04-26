import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/pages/mainPage'
import Solve from '@/components/pages/solve'
import Interaction from '@/components/pages/Interaction'
import Train from '@/components/pages/train'
import ManyCj from '@/components/pages/manyCj'
import Campus from '@/components/pages/campus'
import Introduce from '@/components/pages/introduce'
import Download from '@/components/pages/download'
import Exhibition from '@/components/pages/exhibition'
import Information from '@/components/pages/information'
import InFoDetails from '@/components/pages/InFoDetails'
import About from '@/components/pages/about'



Vue.use(Router)

export default new Router({
  // mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: {
        title: '水滴智慧-首页'
      }
    },
    {
      path: '/solve',
      name: 'Solve',
      component: Solve,
      meta: {
        title: '水滴智慧-常态智慧'
      }
    },
    {
      path: '/Interaction',
      name: 'Interaction',
      component: Interaction,
      meta: {
        title: '水滴智慧-互动智慧'
      }
    },
    {
      path: '/train',
      name: 'Train',
      component: Train,
      meta: {
        title: '水滴智慧-实训智慧'
      }
    },
    {
      path: '/manyCj',
      name: 'ManyCj',
      component: ManyCj,
      meta: {
        title: '水滴智慧-多场景智慧'
      }
    },
    {
      path: '/campus',
      name: 'Campus',
      component: Campus,
      meta: {
        title: '水滴智慧-智慧校园'
      }
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce,
      meta: {
        title: '水滴智慧-产品介绍'
      }
    },
    {
      path: '/download',
      name: 'Download',
      component: Download,
      meta: {
        title: '水滴智慧-下载中心'
      }
    },
    {
      path: '/exhibition',
      name: 'Exhibition',
      component: Exhibition,
      meta: {
        title: '水滴智慧-案例展示'
      }
    },
    {
      path: '/information',
      name: 'Information',
      component: Information,
      meta: {
        title: '水滴智慧-资讯中心'
      }
    },
    {
      path: '/InFoDetails',
      name: 'InFoDetails',
      component: InFoDetails,
      meta: {
        title: '水滴智慧-资讯详情'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '水滴智慧-关于我们'
      }
    },
  ],
  linkActiveClass: 'active'
})
