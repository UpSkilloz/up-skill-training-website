<template>
  <div class="page" id="top">
    <navbar />
    <index-hero />
    <div class="container">
      <div class="section intro pt-5" id="introduction">
        <p>
          At Upskill Training we design and deliver sales training programs that inspire sales teams to achieve greatness.
          </p>
          <p>Is your sales team:</p>
          <ul>
            <li>Underperforming and not hitting their KPI’s?</li>
            <li>Underdelivering and suffer from a low close rate?</li>
            <li>Uninspired and just going through the motions?</li>
            <li>Caught up in the blame game. Blaming the leads, the economy, Covid Etc.</li>
          </ul>
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
