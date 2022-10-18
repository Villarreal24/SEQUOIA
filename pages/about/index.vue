<template>
  <div>
    <Navbar ref="navbar" />
    <About-Header />
    <About-About />
    <!-- <Home3-Services /> -->
    <!-- <Home1-Testimonials /> -->
    <!-- <Home3-Team /> -->
    <Home1-Light-Team />
    <About-Skills />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'About',
  layout: "light",
  head() {
    return {
      titleTemplate: "%s - About",
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