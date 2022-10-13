<template>
  <section class="blog-grid section-padding mb-50">
    <div class="container">
      <div class="section-head text-center">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-10">
            <h6 class="custom-font wow fadeInDown" data-wow-delay=".3s">Latest News</h6>
            <h4 class="playfont wow flipInX" data-wow-delay=".5s">Our Blogs</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4" v-for="blog, idx in blogs" :key="idx">
          <div :class="`item wow fadeInUp ${idx !== blogs.length-1 ? 'md-mb50':''}`" data-wow-delay=".3s">
            <div class="post-img">
              <div class="img">
                <img :src="blog.image" alt="">
              </div>
            </div>
            <div class="cont">
              <div class="info">
                <NuxtLink to="#0">{{ blog.author }}</NuxtLink>
                <NuxtLink to="#0">{{ blog.date }}</NuxtLink>
              </div>
              <h5 class="playfont">
                <NuxtLink to="#0">{{ blog.title }}</NuxtLink>
              </h5>
              <NuxtLink to="/blog-details" class="more">
                <span class="custom-font">Read More</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home1LightNews from '../../data/home1-light-news.json';

export default {
  name: "Home1-Light-News",
  data() {
    return {
      blogs: Home1LightNews
    }
  }
}
</script>
