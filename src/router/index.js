import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component : () => import('../views/MainPage.vue')
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () => import('../views/Movies.vue')
  },
  {
    path: '/actors',
    name: 'Actors',
    component: () => import('../views/Actors.vue')
  },
  {
      path : '/movie/:type/:id',
      name : "Movie",
      component : () => import('../views/Movie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
