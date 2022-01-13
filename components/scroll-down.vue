<template>
  <div>
    <nuxt-link
      to="#introduction"
      class="scroll-down-button d-flex justify-content-center align-items-center"
    >
      <img src="@/static/images/icons/double-arrow-white.svg" alt="" />
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Styles */
.scroll-down-button {
  width: 100px;
  height: 100px;
}
.scroll-down-button img {
  rotate: 180deg;
}
</style>
