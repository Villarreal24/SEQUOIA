<template>
  <section class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 valign">
          <div class="exp-content nopat wow fadeInUp" data-wow-delay=".3s">
            <h6 class="sub-title">About Us</h6>
            <h2 class="mb-20 playfont">
              <template v-for="word, idx in about.title">
                {{ word }}
                <br v-if="idx !== about.title.lenght - 1" :key="idx">
              </template>
            </h2>
            <p>
              {{ about.text }}
            </p>
            <ul>
              <li v-for="service, idx in about.services" :key="idx">{{ service }}</li>
            </ul>
            <NuxtLink to="#0" class="btn-curve btn-color mt-30">
              <span>Read More</span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="ab-exp">
            <div class="row">
              <div class="col-md-4 mb-20">
                <div class="pattern bg-img bg-repeat" :style="`background-image:url('${about.background}')`"></div>
              </div>
              <div class="col-md-8 wow fadeInUp" data-wow-delay=".3s">
                <div class="img mb-20 wow imago">
                  <img src="img/ab1.jpg" alt="">
                </div>
              </div>
              <div class="col-md-7 wow fadeInUp" data-wow-delay=".3s">
                <div class="img wow imago">
                  <img src="img/ab2.jpg" alt="">
                </div>
              </div>
              <div class="col-md-5">
                <div class="years-exp">
                  <div class="exp-text">
                    <h2 class="custom-font">{{ about.years }}</h2>
                    <h6>Years Of Experience</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home2LightAbout from '../../data/home2-light-about.json';

export default {
  name: "Home2-Light-About",
  data() {
    return {
      about: Home2LightAbout
    }
  }
}
</script>
