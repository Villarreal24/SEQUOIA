<template>
  <section class="services-col section-padding">
    <div class="container">
      <div class="main-header text-center">
        <h3>Best Features.</h3>
        <div class="tex-bg">Services</div>
      </div>
      <div class="row bord-box wow fadeInUp">
        <div class="col-lg-3 col-md-6 item-bx" v-for="service in servicesData" :key="service.id">
          <span :class="`icon flaticon-${service.icon}`"></span>
          <h6 class="mb-20">{{ service.title }}</h6>
          <p>{{ service.content }}</p>
          <NuxtLink to="#0" class="more mt-30">Read More</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home4ServicesData from '../../data/home4-services.json';

export default {
  name: "Home4-Services",
  data() {
    return {
      servicesData: Home4ServicesData
    }
  }
}
</script>
