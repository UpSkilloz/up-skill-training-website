import Vue from 'vue'
import { Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay } from 'swiper/js/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// import style
import 'swiper/css/swiper.min.css'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))