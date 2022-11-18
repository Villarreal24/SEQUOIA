<template>
  <div>
    <div class="title-head">
      <h2>{{ postData.title }}</h2>
      <!-- <div class="info">
        <p><NuxtLink to="#0">{{ postData.info.author }}</NuxtLink>/<NuxtLink to="#0">{{ postData.info.date }}</NuxtLink>/<NuxtLink to="#0">{{ postData.info.tag }}</NuxtLink></p>
      </div> -->
    </div>
    <div class="img main-img" v-if="postData.image">
      <img :src="postData.image" alt="" class="thumparallax">
    </div>
  </div>
</template>

<script>
import thumparallaxUp from "../../common/thumparallaxUp";

export default {
  name: "Post-Head",
  computed: {
    postData() {
      return this.$store.state.blogs.blogDetails;
    }
  },
  mounted() {
    thumparallaxUp();
  }
}
</script>
