<template>
  <section class="about2 section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="main-tit">
            <h2 class="wow" data-splitting>We Are The Leader <br> In The Architectural</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="content">
            <p class="wow txt" data-splitting>
              {{ aboutData.text }}
            </p>
            <div class="exp">
              <h3 class="">{{ aboutData.years }}</h3>
              <h5 class=" valign">
                <span class="wow" data-splitting>years <br> Of Experiences</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid office">
      <div class="row">
        <div :class="`col-lg-${idx === 1 ? '6':'3'} lg-padding`" v-for="image, idx in aboutData.images" :key="idx">
          <div class="item bg-img wow imago" :style="`background-image:url('${image}')`"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home4AboutData from '../../data/home4-about.json';

export default {
  name: "Home4-About",
  data() {
    return {
      aboutData: Home4AboutData
    }
  },
}
</script>
