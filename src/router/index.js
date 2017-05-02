import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home'
import Login from '../views/login/index'
import Disclaimer from '../views/disclaimer/index'
import Investigate from '../views/investigate/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/disclaimer',
    name: 'disclaimer',
    component: Disclaimer
  },
  {
    path: '/investigate',
    name: 'investigate',
    component: Investigate
  },
  {
    path: '*',
    redirect: '/login'
  }
]

export default new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
