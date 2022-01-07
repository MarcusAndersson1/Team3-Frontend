import Vue from 'vue'
import Router from 'vue-router'
import TimeView from '@/pages/TimeView.vue'
import Login from '@/pages/Login.vue'
import Signup from '@/pages/SignUp.vue'
import Test from '@/pages/Test.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: TimeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (window.location.hash !== '#/signup') {
    if (document.cookie === null || document.cookie.split('=')[1] !== 'true') {
      next()
      window.location = '/#/login'
    }
  }
  next()
})

export default router
