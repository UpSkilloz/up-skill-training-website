export const BackToTop = () => import('../..\\components\\back-to-top.vue' /* webpackChunkName: "components/back-to-top" */).then(c => wrapFunctional(c.default || c))
export const CtaSection = () => import('../..\\components\\cta-section.vue' /* webpackChunkName: "components/cta-section" */).then(c => wrapFunctional(c.default || c))
export const FooterSection = () => import('../..\\components\\footer-section.vue' /* webpackChunkName: "components/footer-section" */).then(c => wrapFunctional(c.default || c))
export const IndexFeatures = () => import('../..\\components\\index-features.vue' /* webpackChunkName: "components/index-features" */).then(c => wrapFunctional(c.default || c))
export const IndexHero = () => import('../..\\components\\index-hero.vue' /* webpackChunkName: "components/index-hero" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../..\\components\\navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const PageHero = () => import('../..\\components\\page-hero.vue' /* webpackChunkName: "components/page-hero" */).then(c => wrapFunctional(c.default || c))
export const ScrollDown = () => import('../..\\components\\scroll-down.vue' /* webpackChunkName: "components/scroll-down" */).then(c => wrapFunctional(c.default || c))
export const VertScroll = () => import('../..\\components\\vert-scroll.vue' /* webpackChunkName: "components/vert-scroll" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
