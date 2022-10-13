<template>
  <div>
    <Navbar ref="navbar" />
    <Works-Header />
    <Works-Works1 />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Works1',
  layout: "dark",
  head() {
    return {
      titleTemplate: "%s - Portfolio Two Column",
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