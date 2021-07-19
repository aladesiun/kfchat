import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import login from '../views/auth/login.vue'
import signup from '../views/auth/signup.vue'
import layout from '../views/layout/layout.vue'
import home from '../views/Home.vue'

const routes = [

  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/layout',
    name: 'layout',
    component: layout,
    children:[
      {
        path: '/',
        name: 'home',
        component: home
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
