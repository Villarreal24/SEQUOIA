<template>
  <section class="video bg-img parallaxie" data-background="/img/bg-vid.jpg">
    <div class="vid valign" @click="openVideo" style="cursor:pointer">
      <div class="vid-butn">
        <span class="icon">
          <i class="pe-7s-play"></i>
        </span>
      </div>
    </div>
    <div class="container">
      <div class="stauts">
        <div class="item" v-for="stat, idx in videoData.stats" :key="idx">
          <h4>{{ stat.number }}<span>{{ stat.operator }}</span> +</h4>
          <h6>{{ stat.title }}</h6>
        </div>
      </div>
    </div>
    <ModalVideo
      :channel="videoData.video.channel"
      :videoId="videoData.video.id"
      :isOpen.sync="videoIsOpen"
    />
  </section>
</template>

<script>
import parallaxie from "../../common/parallaxie";
import Home1VideoData from "../../data/home1-video.json";

export default {
  name: "Home1-Video",
  data() {
    return {
      videoData: Home1VideoData,
      videoIsOpen: false
    }
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    }
  },
  mounted() {
    parallaxie('.video.bg-img.parallaxie');
  }
}
</script>