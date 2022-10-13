<template>
  <section class="services-feat section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="img md-mb50">
            <img src="/img/feat.jpg" alt="">
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="cont">
            <div class="item" v-for="service in services" :key="service.id">
              <span :class="`icon flaticon-${service.icon}`"></span>
              <div>
                <h5>{{ service.title }}</h5>
                <p>{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home2ServicesData from "../../data/home2-services.json";

export default {
  name: "Home2-Services",
  data() {
    return {
      services: Home2ServicesData,
    }
  }
}
</script>