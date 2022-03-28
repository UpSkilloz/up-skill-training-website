<template>
  <div>
    <navbar />
    <page-hero>
      <div class="backBtn" @click="goToPrev()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#ffffff"
        >
          <rect fill="none" height="24" width="24" />
          <g>
            <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12" />
          </g>
        </svg>
      </div>
      <div class="course-title">
        {{
          $nuxt.$route.path
            .replace(/-/g, ' ')
            .replace(/\//g, ' ')
            .replace(/course/g, ' ')
        }}
      </div>
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
  methods: {
    goToPrev() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
/* Styles */
.backBtn,
.course-title {
  display: inline-block;
}
.backBtn {
  padding: var(--space-sm);
  cursor: pointer;
}
</style>
