import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _251f9196 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _3f427198 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _38eae530 = () => interopDefault(import('..\\pages\\courses.vue' /* webpackChunkName: "pages/courses" */))
const _575001d4 = () => interopDefault(import('..\\pages\\trainers.vue' /* webpackChunkName: "pages/trainers" */))
const _3bee0cf2 = () => interopDefault(import('..\\pages\\course\\_slug.vue' /* webpackChunkName: "pages/course/_slug" */))
const _2d5e054a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _251f9196,
    name: "about-us"
  }, {
    path: "/contact",
    component: _3f427198,
    name: "contact"
  }, {
    path: "/courses",
    component: _38eae530,
    name: "courses"
  }, {
    path: "/trainers",
    component: _575001d4,
    name: "trainers"
  }, {
    path: "/course/:slug?",
    component: _3bee0cf2,
    name: "course-slug"
  }, {
    path: "/",
    component: _2d5e054a,
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
