<template>
  <section class="testimonials grid section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="testim">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home3TestimonialsData from "../../data/home3-testimonials.json";

export default {
  name: "Home3-Testimonials",
  data() {
    return {
      testimonials: Home3TestimonialsData,
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
  }
}
</script>
