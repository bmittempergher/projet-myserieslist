import Vue from 'vue'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import Menu from '@/components/Menu'

Vue.use(VueMaterial)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    }
  ]
})
