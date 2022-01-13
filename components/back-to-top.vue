<template>
  <client-only>
    <div v-show="isVisible" class="scrollup-button" @click="scrollToTop">
      <img
        src="~/static/images/icons/double-arrow-white.svg"
        alt="back to top"
      />
    </div>
  </client-only>
</template>
<script>
import { debounce } from 'vue-debounce'
export default {
  data() {
    return {
      scrollTop: null,
      isVisible: false,
      visibleDistance: 200,
    }
  },
  mounted() {
    window.addEventListener('scroll', debounce(this.scrollListener, 100), true)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener() {
      if (window.pageYOffset) {
        this.scrollTop = window.pageYOffset
      } else {
        this.scrollTop = 0
      }
      // control button display
      if (this.scrollTop > this.visibleDistance) {
        this.isVisible = true
      } else {
        this.isVisible = false
      }
    },
    scrollToTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 200)
      }, 10)
    },
  },
}
</script>
<style scoped>
.scrollup-button {
  position: fixed;
  bottom: 4rem;
  right: 2rem;
  cursor: pointer;
  background-color: var(--colour-dark);
  border-radius: 0.25rem;
  opacity: 0.6;
  padding: 0.5rem;
  z-index: 1000;
  transition: opacity 0.15s ease;
}
.scrollup-button:hover {
  opacity: 0.9;
}
.scrollup-button img {
  width: 2rem;
  height: 2rem;
}
</style>
