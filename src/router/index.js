import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Product from '../views/Product.vue'
import Settings from '../views/Settings.vue'
import PageNotFound from '../views/PageNotFound.vue'
import store from '../store/index'

const isAuth = (to, from, next) => {
  if (store.getters["getIsAuth"]) {
    next()
  } else {
    next('/')
  }
}

const isOut = (to, from, next) => {
  if (store.getters["getOut"]) {
    next('/')
  } else {
    next()
  }
}




Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
    beforeEnter: isAuth,
    afterEnter: isOut
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '*',
    name: 'notfound',
    component: PageNotFound,
  }
  
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
