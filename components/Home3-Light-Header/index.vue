<template>
  <header class="slider text-center">
    <swiper ref="Swiper" :options="swiperOptions" @ready="handleSwiperReadied" class="parallax-slider">
      <swiper-slide v-for="slide, idx in slides" :key="idx">
        <div class="bg-img valign" :style="`background-image:url('${slide.background}')`" :data-overlay-dark="idx !== slides.length -1 ? 6:0">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7 col-md-9">
                <div class="caption center">
                  <h2 data-splitting class="playfont">
                    <NuxtLink to="#0">
                      <template v-for="tag, index in slide.tags">
                        {{ tag }}
                        <br v-if="index !== slide.tags.length - 1" :key="index" />
                      </template>
                    </NuxtLink>
                  </h2>
                  <p>{{ slide.title }} </p>
                  <NuxtLink to="#0" class="btn-curve btn-color mt-20">
                    <span>Ver mas detalles</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- slider setting -->
    <div class="setone setwo">
      <div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
        <i class="fas fa-chevron-right"></i>
      </div>
      <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
        <i class="fas fa-chevron-left"></i>
      </div>
    </div>

    <div class="swiper-pagination top botm custom-font"></div>

    <div class="social-icon">
      <a href="#0"><i class="fab fa-facebook-f"></i></a>
      <a href="#0"><i class="fab fa-twitter"></i></a>
      <a href="#0"><i class="fab fa-behance"></i></a>
      <a href="#0"><i class="fab fa-pinterest-p"></i></a>
    </div>
  </header>
</template>

<script>
import removeSlashFromPagination from '../../common/removeSlashFromPagination';
import Home3LightHeaderData from "../../data/home3-light-header.json";

export default {
  name: "Home2-Light-Testimonials",
  data() {
    return {
      slides: Home3LightHeaderData,
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
    this.swiper.$el[0].appendChild(document.querySelector('.setone.setwo'));
  }
}
</script>
