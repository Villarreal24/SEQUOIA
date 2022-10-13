<template>
  <section class="work-carousel metro section-padding dark">
    <div class="container-fluid">
      <div class="container">
        <div class="section-head text-center">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8 col-sm-10">
              <h6 class="custom-font wow fadeInDown" data-wow-delay=".3s">Best Works</h6>
              <h4 class="playfont wow flipInX" data-wow-delay=".5s">Our Portfolio</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 no-padding">
          <swiper :options="swiperOptions">
            <swiper-slide v-for="work, idx in works" :key="idx">
              <div class="content wow fadeInUp" data-wow-delay=".3s">
                <div class="item-img bg-img wow imago" :style="`background-image:url('${work.image}')`"></div>
                <div class="cont">
                  <h6><NuxtLink to="#0">{{ work.title }}</NuxtLink></h6>
                  <h4><NuxtLink to="#0">{{ work.text }}</NuxtLink></h4>
                </div>
              </div>
            </swiper-slide>
          </swiper>

          <!-- slider setting -->
          <div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
            <i class="ion-ios-arrow-right"></i>
          </div>
          <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
            <i class="ion-ios-arrow-left"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home3LightWorksData from "../../data/home3-light-works.json";

export default {
  name: "Home3-Light-Works",
  data() {
    return {
      works: Home3LightWorksData,
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 1000,
        centeredSlides: true,
        loop: true,
        autoplay: true,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 0
          }
        }
      }
    }
  }
}
</script>
