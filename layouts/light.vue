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
  name: 'light',
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/style-light.css' },
        { rel: 'stylesheet', href: '/css/globals.css' }
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      Splitting({ target: "[data-splitting]" });
    });
  },
};
</script>

<style>
@import "@/assets/css/style-light.css";
@import "@/assets/css/globals.css";
</style>