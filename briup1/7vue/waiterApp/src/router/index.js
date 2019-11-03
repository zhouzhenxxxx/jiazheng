import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/Manager/Layout.vue'
import store from '../store'
import { Toast } from 'vant'
import {getToken} from '../utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manager',
    redirect:'/home',
    component: Manager,
    beforeEnter:(to,from,next)=>{
      let token=getToken();
        if(token){
          store.dispatch('user/getUserInfo',token)
          .then(()=>{
            next();
          })
        }else{
          Toast('Token失效')
          next({path:'/login'})
        }
    },
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
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
