<template>
  <div>
    <Navbar ref="navbar" />
    <Header2 bg="/img/pg1.jpg" :title="title" :fullPath="fullPath" />
    <Post-Details />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'BlogDetails',
  layout: "light",
  head() {
    return {
      titleTemplate: "%s - Post Details",
    }
  },
  data() {
    return {
      title: "Post Details",
      fullPath: [
        { title: 'Blogs', link: "/blog" },
        { title: 'Post Details', link: "/blog-details" },
      ]
    }
  },
  mounted() {
    document.body.classList.add('index3');
    document.body.classList.remove('index2');
    document.body.classList.remove('index4');

    var navbar = this.$refs.navbar.$el;

    if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
      else navbar.classList.remove("nav-scroll");
    });
  }
}
</script>