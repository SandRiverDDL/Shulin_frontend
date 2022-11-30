import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   meta: {
  //     title: '登录',
  //     requiresAuth: false, // false表示不需要登录
  //   },
  //   component: LoginView,
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/userSpace.vue')
  },{
    path: '/request',
    name: 'request',
    component: () => import(/* webpackChunkName: "about" */ '../views/request.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
