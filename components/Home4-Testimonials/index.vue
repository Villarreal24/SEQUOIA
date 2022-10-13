<template>
  <section class="testimonials2 bg-blc">
    <div class="container-fluid no-padding">
      <div class="row">
        <div class="col-lg-8 no-padding order2">
          <div class="box">
            
            <VueSlickCarousel v-bind="slickOptions" ref="slick" class="slick-dotted slic-item wow fadeInUp">
              <div class="item" v-for="testimonail, idx in testimonails" :key="idx">
                <div class="info">
                  <div class="author">
                    <div class="img-author">
                      <div class="img">
                        <img :src="testimonail.image" alt="">
                      </div>
                    </div>
                    <div class="cont">
                      <h6 class="author-name">{{ testimonail.name }}</h6>
                      <span class="author-details">{{ testimonail.position }}</span>
                    </div>
                  </div>
                </div>
                <p>
                  {{ testimonail.comment }}
                </p>
                <div class="qoute-img">
                  <img src="img/icons/quote-light.svg" alt="">
                </div>
              </div>
            </VueSlickCarousel>

            <div class="qoute-icon">
              <img src="img/icons/left-quote.svg" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1 order1">
          <div class="sec-head mt-80 mb-0">
            <h6 class="wow fadeIn" data-wow-delay=".5s">Testimonials</h6>
            <h3 class="wow" data-splitting>What <br> People <br> Says.</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home4TestimonialsData from '../../data/home4-testimonials.json';

export default {
  name: "Home4-Testimonials",
  data() {
    return {
      testimonails: Home4TestimonialsData,
      slickOptions: {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        responsive: [
          {
            breakpoint: 768,
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
