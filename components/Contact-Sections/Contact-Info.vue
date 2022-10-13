<template>
  <div class="info pt-80 pb-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="item">
            <span class="icon pe-7s-phone"></span>
            <div class="cont">
              <h6 class="custom-font">Call Us</h6>
              <p v-for="number, idx in info.numbers" :key="idx">{{ number }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <span class="icon pe-7s-mail-open"></span>
            <div class="cont">
              <h6 class="custom-font">Email Us</h6>
              <p v-for="email, idx in info.emails" :key="idx">{{ email }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="item">
            <span class="icon pe-7s-map"></span>
            <div class="cont">
              <h6 class="custom-font">Address</h6>
              <p v-for="address, idx in info.addresses" :key="idx">{{ address }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact-Info",
  props: ['info']
}
</script>
