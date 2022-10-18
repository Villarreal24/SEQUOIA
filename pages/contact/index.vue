<template>
  <div>
    <Navbar ref="navbar" />
    <Header2 bg="/img/pg2.jpg" :title="title" :fullPath="fullPath" />
    <Contact-Sections />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Contact',
  layout: "light",
  head() {
    return {
      titleTemplate: "%s - Contact",
    }
  },
  data() {
    return {
      title: "Contact Us",
      fullPath: [
        { title: 'Contact Us', link: "/contact" }
      ]
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