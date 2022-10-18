<template>
  <header class="pages-header bg-img valign parallaxie" data-background="/img/pg1.jpg" data-overlay-dark="5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="cont text-center">
            <h1>Sobre nosotros</h1>
            <div class="path">
              <NuxtLink to="/home1-light">Inicio</NuxtLink><span>/</span><NuxtLink to="/about" class="active">Sobre nosotros</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import parallaxie from "../../common/parallaxie";

export default {
  name: "About-Header",
  mounted() {
    parallaxie('.pages-header.bg-img.parallaxie');
  }
}
</script>
