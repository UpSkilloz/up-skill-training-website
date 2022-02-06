export { default as BackToTop } from '../..\\components\\back-to-top.vue'
export { default as ContactForm } from '../..\\components\\contact-form.vue'
export { default as CtaSection } from '../..\\components\\cta-section.vue'
export { default as CtaVideo } from '../..\\components\\cta-video.vue'
export { default as FooterSection } from '../..\\components\\footer-section.vue'
export { default as IndexFeatures } from '../..\\components\\index-features.vue'
export { default as IndexHero } from '../..\\components\\index-hero.vue'
export { default as NavbarSchedule } from '../..\\components\\navbar-schedule.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as PageHero } from '../..\\components\\page-hero.vue'
export { default as ScheduleForm } from '../..\\components\\schedule-form.vue'
export { default as ScrollDown } from '../..\\components\\scroll-down.vue'
export { default as VertScroll } from '../..\\components\\vert-scroll.vue'

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
