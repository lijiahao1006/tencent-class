import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const scrollBehavior = function (to, from, savedPosition) {
  // if (savedPosition) {
  //   // savedPosition is only available for popstate navigations.
  //   return savedPosition
  // } else {
  //   const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
      console.log(to.hash)
      // specify offset of the element
      if (to.hash === '#box') {
        position.offset = { y: 100 }
      }

      // bypass #1number check
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        return position
      }
      return false
    }

    return new Promise(resolve => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }

      // wait for the out transition to complete (if necessary)
      this.app.$root.$once('triggerScroll', () => {
        // if the resolved position is falsy or an empty object,
        // will retain current scroll position.
        resolve(position)
      })
    })
  }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
]

const router = new VueRouter({
  routes,
  scrollBehavior,
})

export default router
