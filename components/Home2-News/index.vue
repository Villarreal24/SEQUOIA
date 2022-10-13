<template>
  <section class="blog section-padding">
    <div class="container">
      <div class="section-head">
        <h3>News</h3>
      </div>
      <div class="row">

        <div class="col-lg-6" v-for="blog in blogs" :key="blog.id">
          <div class="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
            <div class="img">
              <img :src="blog.image" alt="">
            </div>
            <div class="cont">
              <div>
                <div class="info">
                  <NuxtLink to="#0" class="date">
                    <span><i>{{ blog.date.day }}</i> {{ blog.date.month }}</span>
                  </NuxtLink>
                  <span>/</span>
                  <NuxtLink to="#0" class="tag">
                    <span>{{ blog.tag }}</span>
                  </NuxtLink>
                </div>
                <h5>
                  <NuxtLink to="#0">{{ blog.title }}</NuxtLink>
                </h5>
                <div class="btn-more">
                  <NuxtLink to="#0" class="simple-btn">Read More</NuxtLink>
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
import Home2NewsData from "../../data/home2-news.json";

export default {
  name: "Home2-News",
  data() {
    return {
      blogs: Home2NewsData
    }
  }
}
</script>
