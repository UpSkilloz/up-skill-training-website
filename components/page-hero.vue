<template>
  <div>
    <section class="page-hero">
      <div class="container flex flex-row">
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
  background: var(--colour-primary);
  color: var(--colour-light);
  text-transform: uppercase;
  font-weight: 800;
}
</style>
