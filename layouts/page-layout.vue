<template>
  <div>
    <navbar />
    <page-hero>
      <h4>{{ $nuxt.$route.name.replace(/-/g, ' ') }}</h4>
    </page-hero>
    <nuxt />
    <footer-section />
  </div>
</template>

<script>
import FooterSection from '~/components/footer-section.vue'
import navbar from '~/components/navbar.vue'
import PageHero from '~/components/page-hero.vue'
export default {
  components: { navbar, FooterSection, PageHero },
}
</script>

<style scoped>
/* Styles */
</style>
