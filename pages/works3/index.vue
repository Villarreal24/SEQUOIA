<template>
  <div>
    <Navbar ref="navbar" />
    <Works-Header />
    <Works-Works3 />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Works3',
  layout: "dark",
  head() {
    return {
      titleTemplate: "%s - Portfolio Four Column",
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