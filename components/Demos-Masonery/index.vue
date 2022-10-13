<template>
  <section class="masonery section-padding pt-50 sub-bg">
    <div class="container-fluid">
      <div class="row">
        <!-- gallery -->
        <div class="gallery full-width">
          <!-- gallery item -->
          <div class="col-lg-4 col-md-6 items" v-for="demo, idx in demos" :key="idx">
            <NuxtLink :to="demo.link" target="_blank">
              <div class="item-img wow fadeInUp" data-wow-delay=".4s">
                <img :src="demo.image" alt="image">
                <div class="cont">
                  <h6>{{ demo.title }}</h6>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- gallery item -->
          <div class="col-lg-4 col-md-6 items">
            <div class="item-img wow fadeInUp" data-wow-delay=".4s">
              <img src="demos/more.png" alt="image">
            </div>
          </div>

          <!-- gallery item -->
          <div class="col-lg-4 col-md-6 items">
            <div class="item-img wow fadeInUp" data-wow-delay=".4s">
              <img src="demos/more.png" alt="image">
            </div>
          </div>

          <!-- gallery item -->
          <div class="col-lg-4 col-md-6 items">
            <div class="item-img wow fadeInUp" data-wow-delay=".4s">
              <img src="demos/more.png" alt="image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import initIsotope from "../../common/initIsotope";
import demosData from "../../data/demos.json";

export default {
  name: "DemosMasonery",
  data() {
    return {
      demos: demosData
    }
  },
  mounted() {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }
}
</script>