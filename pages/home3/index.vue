<template>
  <div>
    <Navbar ref="navbar" />
    <Home3-Header />
    <Home3-Services />
    <Home3-Works />
    <Home3-About />
    <Home3-Video />
    <Home3-Team />
    <Home3-Testimonials />
    <Home3-News />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Home3',
  layout: "dark",
  head() {
    return {
      titleTemplate: "%s - Creative Arch",
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
