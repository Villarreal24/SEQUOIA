<template>
  <div>
    <MouseCursor />
    <ScrollToTop />
    <Loading />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'dark',
  // head() {
  //   return {
  //     link: [
  //       { rel: 'stylesheet', href: '/css/style.css' },
  //       { rel: 'stylesheet', href: '/css/globals.css' }
  //     ],
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
@import "@/assets/css/globals.css";
</style>