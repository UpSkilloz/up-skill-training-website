<template>
  <div class="section indexIndustries">
    <div class="container">
      <h2>Industries helped so far</h2>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Security industry. Selling security systems.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Residential and business solar sales.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Education Software sales.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Therapeutic furniture sales.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Educational toys sales.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Retail Jewellery sales.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Home improvement sales.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Double glazing sales.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Direct sales party plan.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">
              Business development for the Employment Services Sector.
            </h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Direct Sales security equipment.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Trade show sales.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Shopping centre kiosk sales.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Telemarketing sales.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">First Aid courses sales (Telephone).</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Call Centre customer service.</h5>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel__item">
          <div class="carousel__item-head">
            <img src="@/static/images/logo_icon.svg" alt="" />
          </div>
          <div class="carousel__item-body">
            <h5 class="title">Call centre sales.</h5>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="ctaButton d-flex justify-content-center align-items-center">
      Call to Action
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-vertical',
  title: 'Vertical slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    }
  },
}
</script>

<style scoped>
/* Styles */
.indexIndustries {
  background: var(--colour-light);
}
.indexIndustries h2 {
  color: var(--colour-primary);
}
.swiper {
  width: 100%;
  height: 300px;
}
.swiper-slide {
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.carousel__item {
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
}
.carousel__item-head {
  border-radius: 50%;
  background-color: var(--colour-grey-light);
  width: 90px;
  height: 90px;
  padding: 14px;
  position: relative;
  margin-right: -45px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}
.carousel__item-body {
  width: 100%;
  height: 150px;
  color: var(--colour-light);
  background-color: var(--colour-primary);
  border-radius: 8px;
  padding: 16px 20px 16px 70px;
  display: flex;
  align-items: center;
}
</style>
