<template>
  <section class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 exp">
          <div class="mb-50">
            <h6 class="fw-100 text-u ls10 main-color mb-10">About Us</h6>
            <h3 class="fw-400 text-u ls4">Our Comapny</h3>
          </div>
          <div class="box">
            <h2 class="fz-40 fw-600 ls1 mb-20">25 years <br> of Experience</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
          </div>
        </div>
        <div class="col-lg-7 img">
          <img src="img/about1.jpg" alt="">
          <div class="feat mt-30">
            <div class="item" v-for="item, idx in aboutData" :key="idx">
              <div>
                <h5>{{ item.id }}</h5>
                <h6>{{ item.title }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Home1AboutData from "../../data/home1-about.json";

export default {
  name: "Home1-About",
  data() {
    return {
      aboutData: Home1AboutData
    }
  }
}
</script>