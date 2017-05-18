import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Client from '@/components/Client/Client'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home_component',
      component: Home
    },
    {
      path: '/client/:clientId',
      name: 'client_component',
      component: Client
    }
  ]
})
