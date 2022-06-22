import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b2a6964 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _134d20e0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _0cf59478 = () => interopDefault(import('..\\pages\\courses.vue' /* webpackChunkName: "pages/courses" */))
const _472625f9 = () => interopDefault(import('..\\pages\\our-approach.vue' /* webpackChunkName: "pages/our-approach" */))
const _fcb98e64 = () => interopDefault(import('..\\pages\\trainers.vue' /* webpackChunkName: "pages/trainers" */))
const _49d512cf = () => interopDefault(import('..\\pages\\course\\_slug.vue' /* webpackChunkName: "pages/course/_slug" */))
const _095be692 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _5b2a6964,
    name: "about-us"
  }, {
    path: "/contact",
    component: _134d20e0,
    name: "contact"
  }, {
    path: "/courses",
    component: _0cf59478,
    name: "courses"
  }, {
    path: "/our-approach",
    component: _472625f9,
    name: "our-approach"
  }, {
    path: "/trainers",
    component: _fcb98e64,
    name: "trainers"
  }, {
    path: "/course/:slug?",
    component: _49d512cf,
    name: "course-slug"
  }, {
    path: "/",
    component: _095be692,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
