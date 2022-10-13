<template>
  <section class="services">
    <div class="feat-top">
      <div class="notfull bg-gray wow"></div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4" v-for="service, idx in services" :key="idx">
            <div class="item-sm wow fadeInUp" :data-wow-delay="`1.${idx}s`">
              <div class="box">
                <h6 class="mb-20"><span class="custom-font numb">{{ service.id }}</span> {{ service.title }}</h6>
                <p>{{ service.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home2LightServices from '../../data/home2-light-services.json';

export default {
  name: "Home2-Light-Services",
  data() {
    return {
      services: Home2LightServices
    }
  },
}
</script>
