<template>
  <section class="services section-padding pb-0">
    <div class="container">
      <div class="section-head">
        <h3>Services</h3>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="service, idx in servicesData" :key="idx">
          <div :class="`item ${idx !== servicesData.length - 1 ? 'md-mb50':''}`">
            <span :class="`icon flaticon-${service.icon}`"></span>
            <h6>{{ service.title }}</h6>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home1ServicesData from "../../data/home1-services.json";

export default {
  name: "Home1-Services",
  data() {
    return {
      servicesData: Home1ServicesData
    }
  }
}
</script>