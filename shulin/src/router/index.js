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
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/detail',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/detail.vue')
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/userSpace.vue')
  }, {
    path: '/request',
    name: 'request',
    component: () => import(/* webpackChunkName: "about" */ '../views/request.vue')
  }, {
    path: '/lab',
    name: 'lab',
    component: () => import('@/views/lab/Lab.vue')

  }, {
    path: '/door',
    name: 'door',
    component: () => import(/* webpackChunkName: "about" */'../views/scholardoor.vue')
  },
  {
    path: '/agreement',
    name: 'agreement',
    component: () => import(/* webpackChunkName: "about" */'../views/agreement.vue')
  },
  {
    path: '/empty',
    name: 'empty',
    component: () => import(/* webpackChunkName: "about" */'../views/empty.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
