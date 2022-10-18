<template>
  <section class="portfolio section-padding">
    <div class="container-fluid">
      <div class="container">
        <div class="section-head text-center">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8 col-sm-10">
              <h6 class="custom-font wow fadeInDown" data-wow-delay=".3s">Best Works</h6>
              <h4 class="playfont wow flipInX" data-wow-delay=".5s">Nuestro portafolio</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- filter links -->
        <div class="filtering text-center col-12 wow fadeInUp" data-wow-delay=".3s">
          <div class="filter bg-img bg-repeat" style="background-image:url('/img/line-pattern1.png')">
            <span v-for="filter, idx in works.filters" :key="idx" :data-filter='filter.operator'
              :class="{active: idx === 0}">
              {{ filter.name }}
            </span>
          </div>
        </div>
        <!-- gallery -->
        <div class="gallery twsty full-width">
          <!-- gallery item -->
          <div :class="`items ${work.filter} mt-50 wow fadeInUp`" data-wow-delay=".3s" v-for="work, idx in works.works"
            :key="idx">
            <div class="item-img bg-img wow imago" data-background="img/portfolio/mas/01.jpg"
              :style="`background-image:url('${work.image}')`">
              <NuxtLink to="#0">
                <div class="item-img-overlay"></div>
              </NuxtLink>
            </div>
            <div class="info mt-10">
              <h5>{{ work.title }}</h5>
              <span>{{ work.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import initIsotope from "../../common/initIsotope";
import Home1LightWorksData from '../../data/home1-light-works.json'

export default {
  name: "Home1-Light-Works",
  data() {
    return {
      works: Home1LightWorksData
    }
  },
  mounted() {
    setTimeout(() => {
      initIsotope();
    });
  }
}
</script>
