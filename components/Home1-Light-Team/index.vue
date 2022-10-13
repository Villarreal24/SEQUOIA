<template>
  <section class="team section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="tit">
            <h6 class="custom-font mb-10 wow fadeInDown" data-wow-delay=".3s">Some thoughts from Us</h6>
            <h3 class="wow flipInX" data-wow-delay=".5s">Our Employees</h3>
            <p class="wow fadeInUp" data-wow-delay=".3s">
              We feel proud for our expert team members beatae ipsum dolor sit amet, consectetur adipisicing elit mauris vitae consequat nibh, vitae interdum mi.
            </p>
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
        <div class="col-lg-7">
          <div class="team-container">
            <VueSlickCarousel v-bind="slickOptions" ref="slick" class="slick-dotted">
              <div class="item wow fadeInUp" data-wow-delay=".3s" v-for="teamMember, idx in team" :key="idx">
                <div class="img wow imago">
                  <img :src="teamMember.image" alt="">
                  <div class="social">
                    <a href="#0"><i class="fab fa-facebook-f"></i></a>
                    <a href="#0"><i class="fab fa-twitter"></i></a>
                    <a href="#0"><i class="fab fa-behance"></i></a>
                    <a href="#0"><i class="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div class="info">
                  <h5>{{ teamMember.name }}</h5>
                  <span>{{ teamMember.position }}</span>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
    <div class="dots-half bg-img bg-repeat" style="background-image:url('/img/dots.png')"></div>
  </section>
</template>

<script>
import Home1LightTeamData from '../../data/home1-light-team.json';

export default {
  name: "Home1-Light-Team",
  data() {
    return {
      team: Home1LightTeamData,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
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
