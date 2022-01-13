<template>
  <div
    class="ctaSection d-flex flex-column justify-content-center align-items-center"
  >
    <h2>Call to Action Section:</h2>
    <div class="ctaButton">Call to Action</div>
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
    rgba(var(--colour-primary-rgb), var(--alpha-60));
  clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);
}
.ctaSection h2 {
  color: var(--colour-light);
  padding: var(--space-md);
}
.ctaButton {
  padding: var(--space-md);
  background: var(--colour-secondary);
  color: var(--colour-light);
}
</style>
