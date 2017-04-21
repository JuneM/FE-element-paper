import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
