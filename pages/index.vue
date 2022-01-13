<template>
  <div class="page" id="top">
    <navbar />
    <index-hero />
    <div class="container">
      <div class="section intro pt-5" id="introduction">
        <p>
          At Up Skill Training we design and deliver training programs for your
          sales team. With 27 years of real-world experience in the sales
          profession we have developed an in depth understanding of the key
          elements required for success as a sales professional in today's
          competitive business environment.
        </p>
      </div>
    </div>
    <div class="ctaSection">
      <cta-section />
    </div>
    <div class="features">
      <index-features />
    </div>
    <div class="industries">
      <vert-scroll />
    </div>
    <footer-section />
    <back-to-top />
  </div>
</template>

<script>
import 'animate.css'
import BackToTop from '~/components/back-to-top.vue'
import IndexHero from '~/components/index-hero.vue'
import navbar from '~/components/navbar.vue'
import indexFeatures from '~/components/index-features.vue'
import CtaSection from '~/components/cta-section.vue'
import VertScroll from '~/components/vert-scroll.vue'
import FooterSection from '~/components/footer-section.vue'
export default {
  components: {
    navbar,
    IndexHero,
    BackToTop,
    indexFeatures,
    CtaSection,
    VertScroll,
    FooterSection,
  },
}
</script>

<style scoped>
/* Styles */
.intro {
  font-size: 1.3em;
  font-weight: 100;
}
</style>
