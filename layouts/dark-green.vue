<template>
  <div class="dark-green">
    <MouseCursor />
    <ScrollToTop />
    <Loading />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'dark-green',
  // head() {
  //   return {
  //     link: [
  //       { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },
  //       { rel: 'stylesheet', type: 'text/css', href: '/css/skin-green.css' },
  //       { rel: 'stylesheet', type: 'text/css', href: '/css/globals.css' }
  //     ]
  //   }
  // },
  mounted() {
    setTimeout(() => {
      Splitting({ target: "[data-splitting]" });
    });
  },
};
</script>

<style>
  @import "@/assets/css/style.css";
  @import "@/assets/css/skin-green.css";
  @import "@/assets/css/globals.css";
</style>
