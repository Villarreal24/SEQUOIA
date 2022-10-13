<template>
  <section class="works section-padding">
    <div class="container">
      <div class="row gallery">
        <div class="col-md-6 items mt-0">
          <div class="main-header mb-0">
            <h3>Works.</h3>
          </div>
        </div>
        <div class="col-md-6 items" v-for="work, idx in works" :key="idx">
          <div class="item">
            <div class="img">
              <img :src="work.image" alt="">
            </div>
            <div class="cont vis">
              <span v-for="tag, i in work.tags" :key="i">{{ tag }}</span>
              <h5><NuxtLink to="#0">{{ work.title }}</NuxtLink></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import initIsotope from "../../common/initIsotope";
import Home4WorksData from '../../data/home4-works.json';

export default {
  name: "Home4-Works",
  data() {
    return {
      works: Home4WorksData
    }
  },
  mounted() {
    setTimeout(() => {
     initIsotope();
    });
  }
}
</script>
