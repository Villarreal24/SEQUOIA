<template>
  <header class="slider slider-mov">
    <swiper ref="Swiper" :options="swiperOptions" @ready="handleSwiperReadied" class="parallax-slider">
      <swiper-slide v-for="slide, idx in slides" :key="idx">
        <div class="bg-img valign" :style="`background-image:url('${slide.background}')`" data-overlay-dark="3">
          <div class="container">
            <div class="row">
              <div class="col-lg-10">
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
    <div class="setone top">
      <div class="swiper-button-next swiper-nav-ctrl next-ctrl">
        <i class="fas fa-chevron-right"></i>
      </div>
      <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl">
        <i class="fas fa-chevron-left"></i>
      </div>
    </div>
  </header>
</template>

<script>
import slides from "../../data/home3-header.json";

export default {
  name: "Home3-Header",
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
    this.swiper.$el[0].appendChild(document.querySelector('.setone.top'));
  }
}
</script>
