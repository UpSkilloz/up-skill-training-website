<template>
  <div class="carouselWrapper">
    <div class="container">
      <h2>Our Clients:</h2>
    </div>
    <VueSlickCarousel
      :arrows="true"
      :dots="false"
      :infinite="true"
      :speed="2500"
      :autoplay="true"
      :autoplay-speed="500"
      :slide-to-show="3"
      :slide-to-scroll="2"
    >
      <div>
        <img src="@/static/images/companies/image1.jpg" alt="" class="m-auto" />
      </div>
      <div>
        <img src="@/static/images/companies/image2.jpg" alt="" class="m-auto" />
      </div>
      <div>
        <img src="@/static/images/companies/image3.jpg" alt="" class="m-auto" />
      </div>
      <div>
        <img src="@/static/images/companies/image4.jpg" alt="" class="m-auto" />
      </div>
      <div>
        <img src="@/static/images/companies/image5.jpg" alt="" class="m-auto" />
      </div>
      <div>
        <img src="@/static/images/companies/image6.jpg" alt="" class="m-auto" />
      </div>
      <div>
        <img src="@/static/images/companies/image7.jpg" alt="" class="m-auto" />
      </div>
      <div>
        <img src="@/static/images/companies/image8.jpg" alt="" class="m-auto" />
      </div>
      <div>
        <img src="@/static/images/companies/image9.jpg" alt="" class="m-auto" />
      </div>
      <div>
        <img
          src="@/static/images/companies/image10.jpg"
          alt=""
          class="m-auto"
        />
      </div>
      <div>
        <img
          src="@/static/images/companies/image11.jpg"
          alt=""
          class="m-auto"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows and dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Carousel',
  components: {
    VueSlickCarousel,
  },
}
</script>

<style scoped>
/* styles */
.carouselWrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 30px 0;
}
</style>
