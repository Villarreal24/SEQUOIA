<template>
  <section class="projdtal">
    <div class="justified-gallery row">
      <a :href="image" v-for="image, idx in projectDetailsData.details2" :key="idx" class="col-lg-6 col-12 mb-20">
        <img alt="" :src="image" />
      </a>
    </div>
  </section>
</template>

<script>
import projectDetailsData from "../../data/project-details.json";

export default {
  name: "Project-Details-Projdtal2",
  data() {
    return {
      projectDetailsData
    }
  }
}
</script>
