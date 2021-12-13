import Vue from 'vue'
import Router from 'vue-router'
import TimeView from '@/pages/TimeView.vue'
import Login from '@/pages/Login.vue'
import Signup from '@/pages/SignUp.vue'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
