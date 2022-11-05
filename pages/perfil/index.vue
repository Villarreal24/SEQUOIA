<template>
  <div>
    <Navbar ref="navbar" />
    <PerfilHeader />
    <PerfilConfig />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Perfil',
  layout: "light",
  middleware: 'auth',
  head() {
    return {
      titleTemplate: "%s - Blogs",
    }
  },
  data() {
    return {
      title: "Configuración de la cuenta"
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