<template>
  <section class="cls-blog section-padding position-re">
    <div class="container">
      <div class="main-header text-center">
        <h3>Interesting articles.</h3>
        <div class="tex-bg">Blog</div>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="blog, idx in blogs" :key="blog.id">
          <div :class="`item ${idx !== blogs.length - 1 ? 'md-mb50':''}`">
            <div class="img">
              <img :src="blog.image" alt="">
              <div class="tag">
                <NuxtLink to="#0">{{ blog.tag }}</NuxtLink>
              </div>
            </div>
            <div class="cont">
              <div class="info">
                <h6>By {{ blog.author }} <span>{{ blog.date }}</span></h6>
              </div>
              <h5><NuxtLink to="#0">{{ blog.title }}</NuxtLink></h5>
              <NuxtLink to="#0" class="more">Read More</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home3BlogData from "../../data/home3-news.json";

export default {
  name: "Home3-News",
  data() {
    return {
      blogs: Home3BlogData
    }
  }
}
</script>
