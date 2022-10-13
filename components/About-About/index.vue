<template>
  <section class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="numbers">
            <div class="row">
              <div class="col-sm-6" v-for="number, idx in about.numbers" :key="idx">
                <div :class="`item ${[0,1].indexOf(idx) !== -1?'mb-50':''}`">
                  <h3><span class="nbr custom-font">{{ number.number }}</span><i v-if="number.operator">{{ number.operator }}</i></h3>
                  <h6>{{ number.title }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="txt-cont">
            <p class="mb-20">
              {{ about.text1 }}
            </p>
            <p>
              {{ about.text2 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AboutData from "../../data/about-info.json";

export default {
  name: "About-About",
  data() {
    return {
      about: AboutData
    }
  }
}
</script>
