<template>
  <header class="slider text-center">
    <swiper class="parallax-slider">
      <swiper-slide >
        <div class="bg-img valign" :style="`background-image:url('/img/slid/x1.jpg')`" :data-overlay-dark="7">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-9">
                <div class="caption center">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </header>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
    }
  },

}
</script>
