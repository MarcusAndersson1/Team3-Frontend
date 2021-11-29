import Vue from 'vue'
import Router from 'vue-router'
import TimeView from '@/pages/TimeView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: TimeView
    }
  ]
})
