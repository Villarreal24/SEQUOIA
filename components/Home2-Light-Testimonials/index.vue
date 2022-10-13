<template>
  <section class="testimonials grid section-padding bg-img parallaxie" data-overlay-dark="9" data-background="/img/001.jpg">
    <div class="container mb-50">
      <div class="section-head text-center">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-10">
            <h6 class="custom-font wow fadeInDown" data-wow-delay=".3s">Testimonials</h6>
            <h4 class="playfont wow flipInX" data-wow-delay=".5s">What People Says?</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="testim wow fadeInUp" data-wow-delay=".3s">
            <VueSlickCarousel v-bind="slickOptions" ref="slick" class="slick-dotted">
              <div class="item wow fadeInUp" data-wow-delay=".3s" v-for="testimonial, idx in testimonials" :key="idx">
                <span class="quote-icon"><img src="img/clients/quote.svg" alt=""></span>
                <div class="cont">
                  <p>{{ testimonial.quote }}</p>
                </div>
                <div class="info">
                  <div class="author">
                    <img :src="testimonial.image" alt="">
                  </div>
                  <h6>{{ testimonial.author }} <span>{{ testimonial.position }}</span> </h6>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
          <div class="navs mt-30 wow fadeInUp" data-wow-delay=".3s">
            <span class="prev" @click="$refs.slick.prev()">
              <i class="fas fa-long-arrow-alt-left"></i>
            </span>
            <span class="next" @click="$refs.slick.next()">
              <i class="fas fa-long-arrow-alt-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import parallaxie from "../../common/parallaxie";
import Home2LightTestimonialsData from "../../data/home2-light-testimonials.json";

export default {
  name: "Home2-Light-Testimonials",
  data() {
    return {
      testimonials: Home2LightTestimonialsData,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    parallaxie('.testimonials.parallaxie');
  }
}
</script>
