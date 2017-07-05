import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VueMaterial from 'vue-material'

Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
