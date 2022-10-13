<template>
  <section class="works filter-img section-padding">
    <div class="container">
      <div class="row gallery">
        <div class="col-lg-6 items mt-0 interior theaters residential">
          <div class="section-head mb-0">
            <h3>Works</h3>
            <!-- filter links -->
            <div class="filtering mt-30">
              <div class="filter">
                <span v-for="filter, idx in worksData.filters" :key="idx" :data-filter='filter.operator' :class="{active: idx === 0}">
                  {{ filter.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-for="work, idx in worksData.works" :key="idx" :class="`col-lg-6 items ${work.filter}`">
          <div class="item">
            <div class="img">
              <img :src="work.image" alt="">
            </div>
            <div class="cont vis">
              <h5><NuxtLink to="#0">{{ work.title }}</NuxtLink></h5>
              <span v-for="tag, idx in work.tags" :key="idx">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import initIsotope from "../../common/initIsotope";
import worksData from "../../data/works1.json";

export default {
  name: "Works-Works1",
  data() {
    return {
      worksData
    }
  },
  mounted() {
    setTimeout(() => {
      initIsotope(); 
    });
  }
}
</script>
