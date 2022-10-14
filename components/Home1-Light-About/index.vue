<template>
  <section class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="exp-img wow fadeInUp" data-wow-delay=".3s">
            <div class="img bg-img wow imago" style="background-image:url('/img/exp.jpg')">
              <div class="since custom-font">
                <span>Since</span>
                <span>{{ aboutData.since }}</span>
              </div>
              <div class="years custom-font">
                <h2>{{ aboutData.years }}</h2>
                <h5>Años de experiencia</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 valign">
          <div class="exp-content wow fadeInUp" data-wow-delay=".3s">
            <h6 class="sub-title">Sobre nosotros</h6>
            <h2 class="mb-20 playfont">Best Designers <br> Architectures for You.</h2>
            <p>
              {{ aboutData.text }}
            </p>
            <div class="numbers mt-50">
              <div class="row">
                <div class="col-md-4" v-for="number, idx in aboutData.numbers" :key="idx">
                  <div class="item">
                    <h3><span class="nbr custom-font">{{ number.value }}</span></h3>
                    <h6>{{ number.title }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home1LightAboutData from "../../data/home1-light-about.json";
import { db } from "~/plugins/firebase.js";

export default {
  name: "Home1-Light-About",
  data() {
    return {
      aboutData: Home1LightAboutData,
    }
  },
  async fetch() {
    await db.collection('Tareas').get()
    .then(query => {
      const tareas = []
      query.forEach(element => {
        tareas.push(element.data())
      });
      this.$store.commit('setTareas', tareas)
    })
    .catch(function(err) {
      console.log(err);
    })
  }
}
</script>
