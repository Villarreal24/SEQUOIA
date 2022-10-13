<template>
  <div>
    <Navbar ref="navbar" :showLogo="showLogo" />
    <Home4-Header />
    <div class="main-content">
      <Home4-About />
      <Home4-Services />
      <Home4-Works />
      <Home4-Testimonials />
      <Home4-Pricing />
      <Home4-Team />
      <Home4-Video />
      <Home4-News />
      <Home4-Brands />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home4',
  layout: "dark",
  head() {
    return {
      titleTemplate: "%s - Architecture Studio"
    }
  },
  data() {
    return {
      showLogo: false
    }
  },
  mounted() {
    document.body.classList.add('index4');
    document.body.classList.remove('index2');
    document.body.classList.remove('index3');

    var navbar = this.$refs.navbar.$el;

    if (window.pageYOffset > 300) {
      this.showLogo = true;
      navbar.classList.add("nav-scroll");
    } else {
      this.showLogo = false;
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        this.showLogo = true;
        navbar.classList.add("nav-scroll");
      } else {
        this.showLogo = false;
        navbar.classList.remove("nav-scroll");
      }
    });
  }
}
</script>
