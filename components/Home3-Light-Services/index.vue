<template>
  <section class="services section-padding bg-gray">
    <div class="container">
      <div class="section-head text-center">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-10">
            <h6 class="custom-font wow fadeInDown" data-wow-delay=".3s">Best Features</h6>
            <h4 class="playfont wow flipInX" data-wow-delay=".5s">Our Services</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="service, idx in services" :key="idx">
          <div class="item-bx bg-img wow fadeInUp" :data-wow-delay="`${0.3 + idx * 0.2}s`" :style="`background-image:url('${service.image}')`">
            <span :class="`icon flaticon-${service.icon}`"></span>
            <h6 class="mb-20">{{ service.title }}</h6>
            <p>{{ service.description }}</p>
            <NuxtLink to="#0" class="more custom-font mt-30">Read More</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home3LightServicesData from "../../data/home3-light-services.json";

export default {
  name: "Home3-Light-Services",
  data() {
    return {
      services: Home3LightServicesData
    }
  }
}
</script>
