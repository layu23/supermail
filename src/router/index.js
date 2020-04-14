import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Detail from '../views/detail/Detail'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Homes',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart  
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:Detail
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
    return originalPush.call(this,location).catch(err => err)
}
export default router
