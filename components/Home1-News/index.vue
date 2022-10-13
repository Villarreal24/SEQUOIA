<template>
  <section class="blog-grid section-padding">
    <div class="container">
      <div class="section-head">
        <h3>News</h3>
      </div>
      <div class="row">

        <div class="col-lg-4" v-for="blog, idx in newsData" :key="blog.id">
          <div
            :class="`item bg-img ${idx !== newsData.length - 1 ? 'md-mb50':''} ${idx === 1 ? 'active':''} wow fadeInUp`"
            data-wow-delay=".3s"
            :style="`background-image: url('${blog.image}')`"
          >
            <div class="cont">
              <NuxtLink to="#0" class="date">
                <span><i>{{ blog.date.day }}</i> {{ blog.date.month }}</span>
              </NuxtLink>
              <div class="info">
                <NuxtLink to="#0" class="author">
                  <span>{{ blog.author }}</span>
                </NuxtLink>
                <NuxtLink to="#0" class="tag">
                  <span>{{ blog.tag }}</span>
                </NuxtLink>
              </div>
              <h6>
                <NuxtLink to="#0">{{ blog.title }}</NuxtLink>
              </h6>
              <div class="btn-more">
                <NuxtLink to="#0" class="simple-btn">Read More</NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Home1NewsData from '../../data/home1-news.json';

export default {
  name: 'Home1-News',
  data() {
    return {
      newsData: Home1NewsData
    }
  }
}
</script>
