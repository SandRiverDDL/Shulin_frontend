import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home.vue'
import comments from '../views/detail/comments'
import detail from '../views/detail/detail'
import data from '../views/detail/data'
import charge from '../views/charge'
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
    path: '/normal',
    name: 'normal',
    component: () => import(/* webpackChunkName: "about" */ '../views/normalSearch.vue')
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
        path: '',
        name: 'comments',
        component: comments
      },
      {
        path: '/data',
        name: 'data',
        component: data
      }
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/user.vue'),
    children: [
      {
        path: '/user/collections',
        name: 'collections',
        component: () => import(/* webpackChunkName: "about" */ '../views/collections.vue')
      },
      {
        path: '/user/following',
        name: 'following',
        component: () => import(/* webpackChunkName: "about" */ '../views/following.vue')
      }
    ]
  }, {
    path: '/request',
    name: 'request',
    component: () => import(/* webpackChunkName: "about" */ '../views/request.vue')
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
  }, {
    path: '/scholarSearch',
    name: 'scholarSearch',
    component: () => import(/* webpackChunkName: "about" */'../views/scholarSearch.vue')
  },
  {
    path: '/judge',
    name: 'Audit',
    component: () => import(/* webpackChunkName: "about" */'../views/Audit.vue')
  },
  {
    path: '/charge',
    name: 'charge',
    component: charge
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
