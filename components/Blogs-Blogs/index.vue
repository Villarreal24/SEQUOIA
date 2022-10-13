<template>
  <section class="blog-pg section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="posts">
            <div :class="`item ${idx !== BlogsData.length - 1 ? 'mb-80':''}`" v-for="blog, idx in BlogsData" :key="idx">
              <div class="img">
                <NuxtLink to="/blog-details">
                  <img :src="blog.image" alt="" class="thumparallax">
                </NuxtLink>
              </div>
              <div class="content">
                <div class="date">
                  <h5>
                    <NuxtLink to="#0">
                      <span class="num">{{ blog.date.day }}</span>
                      <span>{{ blog.date.month }} {{ blog.date.year }}</span>
                    </NuxtLink>
                  </h5>
                </div>
                <div class="cont">
                  <div class="tags">
                    <NuxtLink to="#0" v-for="tag, i in blog.tags" :key="i">{{ tag }}</NuxtLink>
                  </div>
                  <h4 class="title">
                    <NuxtLink to="/blog-details">{{ blog.title }}</NuxtLink>
                  </h4>
                  <p>
                    {{ blog.description }}
                  </p>
                  <NuxtLink to="/blog-details" class="more">Read More</NuxtLink>
                </div>
              </div>
            </div>

            <div class="pagination">
              <span class="active">
                <NuxtLink to="#0">1</NuxtLink>
              </span>
              <span>
                <NuxtLink to="#0">2</NuxtLink>
              </span>
              <span>
                <NuxtLink to="#0"><i class="fas fa-angle-right"></i></NuxtLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import thumparallaxUp from "../../common/thumparallaxUp";
import BlogsData from "../../data/blogs.json";

export default {
  name: "Blogs-Blogs",
  data() {
    return {
      BlogsData
    }
  },
  mounted() {
    thumparallaxUp();
  }
}
</script>
