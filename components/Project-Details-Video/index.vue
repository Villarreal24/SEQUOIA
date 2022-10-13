<template>
  <section>
    <div class="container-fluid">
      <div class="video-wrapper section-padding bg-img parallaxie valign" data-background="/img/portfolio/project1/vid.jpg" data-overlay-dark="4">
        <div class="full-width text-center">
          <div class="vid" @click="openVideo" style="cursor:pointer">
            <div class="vid-butn">
              <span class="icon">
                <i class="fas fa-play"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalVideo
      :channel="projectDetailsData.video.channel"
      :videoId="projectDetailsData.video.id"
      :isOpen.sync="videoIsOpen"
    />
  </section>
</template>

<script>
import parallaxie from "../../common/parallaxie";
import projectDetailsData from "../../data/project-details.json";

export default {
  name: 'Home4-Video',
  data() {
    return {
      videoIsOpen: false,
      projectDetailsData
    }
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    }
  },
  mounted() {
    parallaxie('.video-wrapper.bg-img.parallaxie');
  }
}
</script>