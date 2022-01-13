<template>
  <div>
    <section class="page-hero">
      <div class="container">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Styles */
.page-hero {
  width: 100%;
  height: auto;
  padding: var(--space-md) 0;
  background: var(--colour-grey-dark);
  color: var(--colour-light);
  text-transform: uppercase;
  font-weight: 800;
}
</style>
