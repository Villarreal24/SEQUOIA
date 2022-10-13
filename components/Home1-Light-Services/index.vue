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
      <div class="row bord-box bg-img wow fadeInUp" data-wow-delay=".3s" style="background-image:url('/img/slid/2.jpg')">
        <div class="col-lg-3 col-md-6 item-bx" v-for="service, idx in servicesData" :key="idx">
          <h2 class="custom-font numb">{{ service.id }}</h2>
          <h6 class="mb-20">{{ service.title }}</h6>
          <p>{{ service.discription }}</p>
          <NuxtLink to="#0" class="more custom-font mt-30">Read More</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home1LightServicesData from "../../data/home1-light-services.json";

export default {
  name: "Home1-Light-Services",
  data() {
    return {
      servicesData: Home1LightServicesData
    }
  }
}
</script>
