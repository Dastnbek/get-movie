import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movies',
    name: 'Movies',
    component: () => import('../views/Movies.vue')
  },
  {
    path: '/tvshows',
    name: 'TVshows',
    component: () => import('../views/Tvshows.vue')
  },
  {
    path: '/actors',
    name: 'Actors',
    component: () => import('../views/Actors.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
