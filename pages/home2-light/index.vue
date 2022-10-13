<template>
  <div>
    <Navbar ref="navbar" theme="light" />
    <Home2-Light-Header />
    <Home2-Light-Services />
    <Home2-Light-About />
    <Home2-Light-Works />
    <Home2-Light-Process />
    <Home1-Light-Team />
    <Home2-Light-Testimonials />
    <Home2-Light-Brands />
    <Home2-Light-News />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Home2-Light',
  layout: "light",
  head() {
    return {
      titleTemplate: "%s - Interior Light",
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