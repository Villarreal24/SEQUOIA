<template>
  <section class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="extra wow fadeInUp" data-wow-delay=".3s">
            <h2 class="mb-20 playfont fz-50">What we <br> actually do.</h2>
            <p>
              {{ about.text }}
            </p>
          </div>
        </div>
        <div class="col-lg-4 valign">
          <div class="specialty wow fadeInUp" data-wow-delay=".5s">
            <ul>
              <li v-for="service, idx in about.services" :key="idx">
                <span>{{ service.id }}.</span>{{ service.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-img pat valign text-center" style="background-image:url('/img/pat1.png')">
      <div class="play-button color vid wow fadeInUp" data-wow-delay=".7s" @click="openVideo" style="cursor:pointer">
        <svg class="circle-fill">
          <circle cx="43" cy="43" r="39" stroke="#b19777" stroke-width=".5"></circle>
        </svg>
        <svg class="circle-track">
          <circle cx="43" cy="43" r="39" stroke="none" stroke-width="1" fill="none"></circle>
        </svg>
        <span class="polygon">
          <i class="pe-7s-play"></i>
        </span>
      </div>
    </div>
    <ModalVideo
      :channel="about.video.channel"
      :videoId="about.video.id"
      :isOpen.sync="videoIsOpen"
    />
  </section>
</template>

<script>
import Home3LightAboutData from "../../data/home3-light-about.json";

export default {
  name: "Home3-Light-About",
  data() {
    return {
      about: Home3LightAboutData,
      videoIsOpen: false
    }
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    }
  },
}
</script>
