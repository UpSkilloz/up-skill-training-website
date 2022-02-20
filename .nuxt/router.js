import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _347d7ed0 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _cfe44b54 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _dc936424 = () => interopDefault(import('..\\pages\\courses.vue' /* webpackChunkName: "pages/courses" */))
const _344ce643 = () => interopDefault(import('..\\pages\\our-approach.vue' /* webpackChunkName: "pages/our-approach" */))
const _d60ca3d0 = () => interopDefault(import('..\\pages\\trainers.vue' /* webpackChunkName: "pages/trainers" */))
const _01865bc5 = () => interopDefault(import('..\\pages\\course\\_slug.vue' /* webpackChunkName: "pages/course/_slug" */))
const _36c88588 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _347d7ed0,
    name: "about-us"
  }, {
    path: "/contact",
    component: _cfe44b54,
    name: "contact"
  }, {
    path: "/courses",
    component: _dc936424,
    name: "courses"
  }, {
    path: "/our-approach",
    component: _344ce643,
    name: "our-approach"
  }, {
    path: "/trainers",
    component: _d60ca3d0,
    name: "trainers"
  }, {
    path: "/course/:slug?",
    component: _01865bc5,
    name: "course-slug"
  }, {
    path: "/",
    component: _36c88588,
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
