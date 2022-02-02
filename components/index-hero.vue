<template>
  <div class="hero">
    <navbar-schedule />
    <div class="viewpoint d-flex flex-column justify-content-around align-items-center">
      <img src="@/static/images/logo_icon_light.svg" alt class="heroIcon" />
      <h1 class="display-5 animate__animated animate__zoomInDown animate__slow">UpSkill Training</h1>
      <h3
        style="text-align: center; max-width: 50%"
        class="animate__animated animate__fadeIn animate__delay-1s"
      >“Delivering high performance sales training”</h3>
      <div class="ctaButton animate__animated animate__tada animate__delay-2s">View our Courses</div>
    </div>
  </div>
</template>

<script>
import navbarSchedule from './navbar-schedule.vue'
export default {
  components: { navbarSchedule },
}
</script>

<style scoped>
/* Styles */
.hero {
  width: 100%;
  height: 60vh;
  background: url('@/static/images/hero.webp') center center no-repeat;
  background-size: cover;
  color: var(--colour-light);
}
.hero img {
  width: 20%;
  max-height: 200px;
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
  height: 50vh;
  padding: var(--space-xlg) 0;
  background: rgba(var(--colour-primary-rgb), var(--alpha-70));
  color: white;
}
</style>
