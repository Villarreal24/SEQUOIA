<template>
  <div class="brands bg-gray">
    <div class="container box-top wow fadeInUp" data-wow-delay=".3s">
      <div class="row">
        <div class="col-lg col-md-3 col-sm-6" v-for="brand, idx in brands" :key="idx">
          <div class="item">
            <div class="img">
              <img :src="brand" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrandsData from "../../data/home2-light-barnds.json";

export default {
  name: "Home2-Light-Brands",
  data() {
    return {
      brands: BrandsData,
    };
  }
}
</script>
