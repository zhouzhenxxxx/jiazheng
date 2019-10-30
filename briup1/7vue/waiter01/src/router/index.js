import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/Manager/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manager',
    component: Manager,
    children:[{
      path:'home',
      component:() => import('../pages/Manager/Home.vue')
    },{
      path:'order',
      component:() => import('../pages/Manager/Order.vue')
    },{
      path:'user',
      component:() => import('../pages/Manager/User.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
