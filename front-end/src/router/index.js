import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/portfolio.vue'
import Lessons from '../views/lessons.vue'
import Customs from '../views/custom-orders.vue'
import About from '../views/About.vue'
import Bookings from '../views/book-lesson.vue'
import LoggedIn from '../views/loggedIn.vue'
import Order from '../views/singleOrder.vue'
import Shop from '../views/shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Portfolio
  },
  {
    path: '/lessons',
    name: 'Lessons',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Lessons
  },
  {
    path: '/custom-orders',
    name: 'Custom-orders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Customs
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/book-lesson',
    name: 'Book-lesson',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Bookings
  },
  {
    path: '/loggedIn',
    name: 'Logged-In',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LoggedIn
  },
  {
    path: '/singleOrder/:id',
    name: 'order',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Order
  },
  {
    path: '/shop',
    name: 'shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
