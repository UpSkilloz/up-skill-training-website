<template>
  <div>
    <navbar />
    <nuxt />
    <footer-section />
  </div>
</template>

<script>
import FooterSection from '~/components/footer-section.vue'
import navbar from '~/components/navbar.vue'
export default {
  components: { navbar, FooterSection },
}
</script>

<style scoped>
/* Styles */
</style>
