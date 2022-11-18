<template>
  <section class="blog-pg section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="posts">
            <div :class="`item ${idx !== bloogs.length - 1 ? 'mb-80':''}`" v-for="blog, idx in bloogs" :key="idx">
              <div class="img">
                <NuxtLink to="/blog-details">
                  <img :src="blog.image" alt="" class="thumparallax">
                </NuxtLink>
              </div>
              <div class="content">
                <!-- <div class="date">
                  <h5>
                    <NuxtLink to="#0">
                      <span class="num">{{ blog.date.day }}</span>
                      <span>{{ blog.date.month }} {{ blog.date.year }}</span>
                    </NuxtLink>
                  </h5>
                </div> -->
                <div class="cont">
                  <div class="tags">
                    <NuxtLink to="#0" v-for="tag, i in blog.tags" :key="i">{{ tag }}</NuxtLink>
                  </div>
                  <h4 class="title" @click="setBlogSelected(blog)">
                    <NuxtLink to="/blog-details">{{ blog.title }}</NuxtLink>
                  </h4>
                  <p>
                    {{ blog.subtitle }}
                  </p>
                  <NuxtLink to="/blog-details" class="more" @click="setBlogSelected(blog)">Leer más</NuxtLink>
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

export default {
  name: "Blogs-Blogs",
  computed: {
    bloogs() {
      return this.$store.state.blogs.dataBlogs
    }
  },
  methods: {
    async getBlogs() {
      let arrBlogs = []
      const ref = this.$fire.firestore.collection('blog')
      await ref.get().then(snap => {
        snap.forEach(element => {
          const data = element.data()
          if (data.title) {
            arrBlogs.push(data)
          }
        });
      })
      this.$store.commit('blogs/setBlogs', arrBlogs)
    },
    setBlogSelected(blog) {
      this.$store.commit('blogs/setBlogDetails', blog)
    },
  },
  mounted() {
    this.getBlogs()
    thumparallaxUp();
  }
}
</script>
