import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home.vue'
import comments from '../views/detail/comments'
import detail from '../views/detail/detail'
import data from '../views/detail/data'
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
    component: detail,
    children: [
      {
        path: 'comments',
        name: 'comments',
        component: comments
      },
      {
        path: '',
        name: 'data',
        component: data
      }
    ],
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
  },{
    path: '/scholarSearch',
    name: 'scholarSearch',
    component: () => import(/* webpackChunkName: "about" */'../views/scholarSearch.vue')
  },
  {
    path: '/Audit',
    name: 'Audit',
    component: () => import(/* webpackChunkName: "about" */'../views/Audit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
