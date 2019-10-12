import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home/index.vue'
import Films from './views/home/films.vue'
import Cinemas from './views/home/cinemas.vue'
import Center from './views/home/center.vue'

import City from './views/city/index.vue'
import Login from './views/login/index.vue'
import FilmInfo from './views/film/index.vue'
import Money from './views/money/index.vue'
import Card from './views/card/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'films',
          component: Films
        },
        {
          path: 'cinemas',
          component: Cinemas
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/money',
      component: Money,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/card',
      component: Card,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/film/:id',
      component: FilmInfo
    }
  ]
})

// 实现登录拦截
router.beforeEach((to, from, next) => {
  let userInfo = window.localStorage.getItem('userInfo')
  if (to.meta.needLogin && !userInfo) {
    // 要去登录
    // next('/login')
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
