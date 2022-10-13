<template>
  <section class="video bg-img parallaxie" data-background="/img/bg-vid.jpg">
    <div class="vid valign" @click="openVideo" style="cursor:pointer">
      <div class="vid-butn">
        <span class="icon">
          <i class="pe-7s-play"></i>
        </span>
      </div>
    </div>
    <ModalVideo
      channel="vimeo"
      videoId="127203262"
      :isOpen.sync="videoIsOpen"
    />
  </section>
</template>

<script>
import parallaxie from "../../common/parallaxie";

export default {
  name: 'Home4-Video',
  data() {
    return {
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
