<template>
  <div>
    <Navbar ref="navbar" theme="light" />
    <Home3-Light-Header />
    <!-- <Home3-Light-Services /> -->
    <!-- <Home3-Light-Works /> -->
    <Works-Works2 />
    <!-- <Home3-Light-About /> -->
    <!-- <Home3-Light-Slider /> -->
    <!-- <Home3-Light-Numbers /> -->
    <!-- <Home1-Light-Team /> -->
    <!-- <Home3-Light-Testimonials /> -->
    <!-- <Home2-Light-News /> -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Home3-Light',
  layout: "light",
  head() {
    return {
      titleTemplate: "%s - Architecture Light",
    }
  },
  mounted() {
    document.body.classList.remove('index2');
    document.body.classList.remove('index3');
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