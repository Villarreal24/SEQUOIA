<template>
  <section class="services-grid section-padding mt-100">
    <div class="container">
      <div class="main-header text-center">
        <h3>Best Features.</h3>
        <div class="tex-bg">Services</div>
      </div>
      <div class="row">
        <div :class="`col-lg-4 ${idx !== services.length - 1 ? 'md-mb50':''}`" v-for="service, idx in services" :key="idx">
          <div class="item-bx bg-img wow fadeInUp" :data-wow-delay="`${0.3 + idx * 0.2}s`" :style="`background-image:url('${service.background}')`">
            <span :class="`icon flaticon-${service.icon}`"></span>
            <h6 class="mb-20">{{ service.title }}</h6>
            <p>{{ service.description }}</p>
            <NuxtLink to="#0" class="more mt-30">Read More</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home3ServicesData from "../../data/home3-services.json";

export default {
  name: "Home3-Services",
  data() {
    return {
      services: Home3ServicesData
    }
  }
}
</script>
