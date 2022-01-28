<template>
  <div class="ctaSection">
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <h2>Call to Action Section:</h2>
      <p>We have over 25 years of experience designing and delivering sales training programs in multiple industries and have produced amazing results. We have helped sales teams achieve, increased sales revenues, increased team moral, happier customers, higher close rates and created winning team cultures.</p>
      <p>Our unique approach blends the latest in learning and development practices and cutting edge sales modelling to create interactive, immersive and fun training programs that make sales people want to achieve!</p>
      <nuxt-link to="/courses">
        <div class="ctaButton">View our Courses</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Styles */
.ctaSection {
  width: 100vw;
  padding: var(--space-xxlg);
  background: url('@/static/images/section-bg.webp') center center no-repeat;
  background-size: cover;
  box-shadow: 4000px 4000px inset
    rgba(var(--colour-primary-rgb), var(--alpha-70));
  clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
  color: var(--colour-light);
}
.ctaSection h2 {
  padding: var(--space-md);
}
.ctaButton {
  padding: var(--space-md);
  background: var(--colour-secondary);
  color: var(--colour-light);
}
</style>
