<template>
  <section class="about-us section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 valign md-mb50">
          <div class="mb-50">
            <h6 class="fw-100 text-u ls10 main-color mb-10">About Us</h6>
            <h3 class="fw-600 text-u ls1 mb-30">Our Comapny</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <NuxtLink to="#0" class="btn-curve btn-bord btn-lit mt-30">
              <span>Read More</span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-7 img">
          <img src="/img/feat.jpg" alt="">
          <div class="stauts">
            <div class="item" v-for="stat, idx in aboutData" :key="idx">
              <h4>{{ stat.number }}<span>{{ stat.operator }}</span> +</h4>
              <h6>{{ stat.title }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home3AboutData from "../../data/home3-about.json";

export default {
  name: "Home3-About",
  data() {
    return {
      aboutData: Home3AboutData
    }
  }
}
</script>
