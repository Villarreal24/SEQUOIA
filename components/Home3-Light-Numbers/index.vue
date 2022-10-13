<template>
  <div class="numbers section-padding pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="number, idx in numbers" :key="idx">
          <div class="item">
            <h3><span class="nbr custom-font">{{ number.number }}</span><i v-if="number.operator">{{ number.operator }}</i></h3>
            <h6>{{ number.title }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home3LightNumbersData from "../../data/home3-light-numbers.json";

export default {
  name: "Home3-Light-Numbers",
  data() {
    return {
      numbers: Home3LightNumbersData
    }
  }
}
</script>
