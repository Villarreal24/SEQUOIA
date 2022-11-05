<template>
  <div>
    <Navbar ref="navbar" theme="dark" />
    <Home1-Light-Header />
    <Home1-Light-About />
    <Home1-Light-Services />
    <Home1-Light-Works />
    <Home1-Light-Skills />
    <Home1-Light-Testimonials />
    <Home1-Light-Team />
    <Home1-Light-News />
    <Home1-Light-Contact />
    <Footer class="mt-30" />
  </div>
</template>

<script>
export default {
  name: 'Home1-Light',
  layout: "light",
  head() {
    return {
      titleTemplate: "%s - Home Light",
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