<template>
  <div>
    <Navbar ref="navbar" />
    <Header2 bg="/img/portfolio/project1/bg.jpg" :title="title" :fullPath="fullPath" />
    <Project-Details-Intro />
    <Project-Details-Projdtal1 />
    <Project-Details-Video />
    <Project-Details-Projdtal2 />
    <Project-Details-CallToAction />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Project-Details',
  layout: "dark",
  head() {
    return {
      titleTemplate: "%s - Single Project",
    }
  },
  data() {
    return {
      title: "Luxury Furniture",
      fullPath: [
        { title: 'Portfolio', link: "/works1" },
        { title: 'Luxury Furniture', link: "project-details" }
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