import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import('../views/home/Home')
const category = ()=> import('../views/category/Category')
const car = ()=> import('../views/car/Car')
const profile = ()=> import('../views/profile/Profile')
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/car',
    component:car
  },
  {
    path:'/profile',
    component:profile
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
