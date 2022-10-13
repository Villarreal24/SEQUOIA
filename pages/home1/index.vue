<template>
  <div>
    <Navbar ref="navbar" />
    <Home1-Header />
    <Home1-About />
    <Home1-Services />
    <Home1-Works />
    <Home1-Video />
    <Home1-Team />
    <Home1-Testimonials />
    <Home1-News />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Home1',
  layout: "dark",
  head() {
    return {
      titleTemplate: "%s - Home Default",
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