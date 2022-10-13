<template>
  <div class="showX">
    <div id="preloader">
      <div class="loading-text">Loading</div>
    </div>
  </div>
</template>

<script>
import loadingPace from "../../common/loadingPace";
export default {
  mounted() {
    if (window.Pace) {
      loadingPace();
    }
  },
};
</script>

<style scoped>
</style>