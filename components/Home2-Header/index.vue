<template>
  <header class="header bg-img valign" style="background-image: url('/img/slid/x1.jpg')" data-overlay-dark="7">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="caption hmone">
            <h1 data-splitting>
              <NuxtLink to="#0">
                Elegant & Unique Design
              </NuxtLink>
              <div class="bord"></div>
            </h1>
            <p class="mt-10">Right design and right ideas matter a lot of in interior design business. <br> a style that makes a statement.</p>
            <NuxtLink to="#0" class="btn-curve btn-bord btn-lit mt-30">
              <span>Read More</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Home2-Header",
  mounted() {
    setTimeout(() => {
      Splitting({ target: "[data-splitting]" });
    });
  }
}
</script>