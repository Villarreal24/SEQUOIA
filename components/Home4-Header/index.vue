<template>
  <header class="slider slider-slide">
    <swiper ref="Swiper" :options="swiperOptions" @ready="handleSwiperReadied" class="parallax-slider">
      <swiper-slide v-for="slide, idx in slides" :key="idx">
        <div class="bg-img valign" :style="`background-image:url('${slide.background}')`" data-overlay-dark="6">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <div class="caption hmone">
                <h1 data-splitting>
                  <NuxtLink to="#0">
                    <template v-for="chunk, index in slide.tags">
                      <template>{{ chunk }}</template>
                      <br v-if="index !== slide.tags.length - 1" :key="index" />
                    </template>
                  </NuxtLink>
                </h1>
                  <p class="mt-10">
                    <template v-for="chunk, index in slide.title">
                      <template>{{ chunk }}</template>
                      <br v-if="index !== slide.title.length - 1" :key="index" />
                    </template>
                  </p>
                  <NuxtLink to="#0" class="btn-curve btn-bord btn-lit mt-30">
                    <span>Read More</span>
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

    <div class="side">
      <div class="logo-icon">
        <NuxtLink class="logo" to="#">
          <img src="img/logo-light.png" alt="logo">
        </NuxtLink>
      </div>

      <div class="swiper-pagination"></div>

      <div class="social">
        <a href="#0"><i class="fab fa-facebook-f"></i></a>
        <a href="#0"><i class="fab fa-twitter"></i></a>
        <a href="#0"><i class="fab fa-instagram"></i></a>
        <a href="#0"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  </header>
</template>

<script>
import removeSlashFromPagination from '../../common/removeSlashFromPagination';
import slides from "../../data/home4-header.json";

export default {
  name: "Home4-Header",
  data() {
    return {
      slides,
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
    this.swiper.$el[0].appendChild(document.querySelector('.slider .side'));
  }
}
</script>
