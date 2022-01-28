<template>
  <div class="hero">
    <div
      class="viewpoint d-flex flex-column justify-content-around align-items-center"
    >
      <img src="@/static/images/logo_icon.svg" alt class="heroIcon" />
      <h1 class="display-5 animate__animated animate__zoomInDown animate__slow">
        Upskill Training
      </h1>
      <h3
        style="text-align: center; max-width: 50%"
        class="animate__animated animate__fadeIn animate__delay-1s"
      >
        “Delivering high performance sales training”
      </h3>
      <div class="ctaButton animate__animated animate__tada animate__delay-2s">
        Click Here for your Future!
      </div>
      <scroll-down />
    </div>
  </div>
</template>

<script>
import scrollDown from './scroll-down.vue'
export default {
  components: { scrollDown },
}
</script>

<style scoped>
/* Styles */
.hero {
  width: 100%;
  height: 100%;
  height: calc(100vh - 100px);
  background: url('@/static/images/hero.webp') center center no-repeat;
  background-size: cover;
  color: var(--colour-light);
  clip-path: polygon(0 0%, 100% 0, 100% 80%, 0% 100%);
}
.hero img {
  width: 30%;
  height: auto;
}
.heroIcon {
  filter: drop-shadow(0 0 12px rgba(var(--colour-dark-rgb), var(--alpha-30)));
}
.hero h1 {
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
}
.viewpoint {
  width: 100%;
  height: 100%;
  padding: var(--space-xlg) 0;
  background: rgba(var(--colour-primary-rgb), var(--alpha-70));
  color: white;
}
.ctaButton {
  padding: var(--space-md);
  background: var(--colour-secondary);
  border-radius: var(--space-sm);
  font-weight: 900;
}
</style>
