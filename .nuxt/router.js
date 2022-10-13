import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bbbd400c = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _660ee8aa = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _b5f04bd4 = () => interopDefault(import('..\\pages\\blog-details\\index.vue' /* webpackChunkName: "pages/blog-details/index" */))
const _e88acb72 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _a44ed996 = () => interopDefault(import('..\\pages\\home1\\index.vue' /* webpackChunkName: "pages/home1/index" */))
const _198cd64c = () => interopDefault(import('..\\pages\\home1-light\\index.vue' /* webpackChunkName: "pages/home1-light/index" */))
const _94eb8ed8 = () => interopDefault(import('..\\pages\\home2\\index.vue' /* webpackChunkName: "pages/home2/index" */))
const _43c28f2a = () => interopDefault(import('..\\pages\\home2-light\\index.vue' /* webpackChunkName: "pages/home2-light/index" */))
const _8588441a = () => interopDefault(import('..\\pages\\home3\\index.vue' /* webpackChunkName: "pages/home3/index" */))
const _ba9ecaec = () => interopDefault(import('..\\pages\\home3-light\\index.vue' /* webpackChunkName: "pages/home3-light/index" */))
const _7624f95c = () => interopDefault(import('..\\pages\\home4\\index.vue' /* webpackChunkName: "pages/home4/index" */))
const _6e522919 = () => interopDefault(import('..\\pages\\project-details\\index.vue' /* webpackChunkName: "pages/project-details/index" */))
const _76f5277e = () => interopDefault(import('..\\pages\\works1\\index.vue' /* webpackChunkName: "pages/works1/index" */))
const _7ea6ccdd = () => interopDefault(import('..\\pages\\works2\\index.vue' /* webpackChunkName: "pages/works2/index" */))
const _f34f1b88 = () => interopDefault(import('..\\pages\\works3\\index.vue' /* webpackChunkName: "pages/works3/index" */))
const _e5eb7366 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _bbbd400c,
    name: "about"
  }, {
    path: "/blog",
    component: _660ee8aa,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _b5f04bd4,
    name: "blog-details"
  }, {
    path: "/contact",
    component: _e88acb72,
    name: "contact"
  }, {
    path: "/home1",
    component: _a44ed996,
    name: "home1"
  }, {
    path: "/home1-light",
    component: _198cd64c,
    name: "home1-light"
  }, {
    path: "/home2",
    component: _94eb8ed8,
    name: "home2"
  }, {
    path: "/home2-light",
    component: _43c28f2a,
    name: "home2-light"
  }, {
    path: "/home3",
    component: _8588441a,
    name: "home3"
  }, {
    path: "/home3-light",
    component: _ba9ecaec,
    name: "home3-light"
  }, {
    path: "/home4",
    component: _7624f95c,
    name: "home4"
  }, {
    path: "/project-details",
    component: _6e522919,
    name: "project-details"
  }, {
    path: "/works1",
    component: _76f5277e,
    name: "works1"
  }, {
    path: "/works2",
    component: _7ea6ccdd,
    name: "works2"
  }, {
    path: "/works3",
    component: _f34f1b88,
    name: "works3"
  }, {
    path: "/",
    component: _e5eb7366,
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
