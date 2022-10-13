<template>
  <header class="slider">
    <swiper ref="Swiper" :options="swiperOptions" @ready="handleSwiperReadied" class="parallax-slider">
      <swiper-slide v-for="slide, idx in slides" :key="idx">
        <div class="bg-img valign" :style="`background-image:url('${slide.background}')`" data-overlay-dark="6">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <div class="caption hmone">
                  <h5 class="thin custom-font">{{ slide.type }}</h5>
                  <h1 data-splitting><NuxtLink to="#0">{{ slide.title }}</NuxtLink></h1>
                  <p class="mt-10">0% de comisiones en cualquier tipo de movimiento. <br></p>
                  <NuxtLink to="#0" class="btn-curve btn-bord btn-lit mt-30">
                    <span>Leer mas</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- slider setting -->
    <div class="setone">
      <div class="swiper-button-next swiper-nav-ctrl next-ctrl">
        <i class="fas fa-chevron-right"></i>
      </div>
      <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl">
        <i class="fas fa-chevron-left"></i>
      </div>
    </div>
    <div class="swiper-pagination top custom-font"></div>
  </header>
</template>

<script>
import removeSlashFromPagination from '../../common/removeSlashFromPagination';
import Home1LightHeaderData from '../../data/home1-light-header.json';

export default {
  name: "Home1-Light-Header",
  data() {
    return {
      slides: Home1LightHeaderData,
      swiperOptions: {
        speed: 1000,
        parallax: true,
        loop: true,
        autoplay: true,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        pagination: {
          el: '.slider .swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.Swiper.$swiper;
    },
  },
  methods: {
    handleSwiperReadied: (swiper) => {
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
      });
    },
  },
  mounted() {
    setTimeout(() => {
      Splitting({ target: "[data-splitting]" });
    });
    removeSlashFromPagination();
    this.swiper.$el[0].appendChild(document.querySelector('.slider .setone'));
  }
}
</script>
