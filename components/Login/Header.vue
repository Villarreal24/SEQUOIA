<template>
  <header class="slider text-center">
    <swiper class="parallax-slider">
      <swiper-slide>
        <div class="bg-img valign" :style="`background-image:url('/img/slid/x1.jpg')`" :data-overlay-dark="7">
          <div class="container">
            <div class="login">
              <NuxtLink class="logo" to="/">
                <img src="/img/logo-light.png" />
              </NuxtLink>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-9">
                <div class="caption center">
                  <LoginForm v-if="show === 'login'" />
                  <RegisterForm v-if="show === 'register'" />
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
  props: ["show"],
  data() {
    return {
      // show: 'register'
    }
  }
}
</script>
