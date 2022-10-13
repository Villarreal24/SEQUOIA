<template>
  <div>
    <Navbar ref="navbar" />
    <Home2-Header />
    <Home2-About />
    <Home2-Works />
    <Home2-Process />
    <Home2-Services />
    <Home2-Video />
    <Home2-Circle theme="dark" />
    <Home2-News />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Home2',
  layout: "dark-green",
  head() {
    return {
      titleTemplate: "%s - Interior Agency",
    }
  },
  mounted() {
    document.body.classList.add('index2');
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
