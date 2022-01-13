import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _352e866e = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _733df558 = () => interopDefault(import('..\\pages\\courses.vue' /* webpackChunkName: "pages/courses" */))
const _79c94baf = () => interopDefault(import('..\\pages\\course\\_slug.vue' /* webpackChunkName: "pages/course/_slug" */))
const _23f2011c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _352e866e,
    name: "about-us"
  }, {
    path: "/courses",
    component: _733df558,
    name: "courses"
  }, {
    path: "/course/:slug?",
    component: _79c94baf,
    name: "course-slug"
  }, {
    path: "/",
    component: _23f2011c,
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
