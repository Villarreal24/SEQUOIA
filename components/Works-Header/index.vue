<template>
  <header class="work-header bg-img valign" style="background-image:url('/img/patern.png')">
    <div class="container">
      <div class="row" :class="{'justify-content-center': center}">
        <div class="col-lg-9">
          <div class="cont" :class="{'text-center': center}">
            <h2>
              Architecture is a visual art, <br>
              and the building speak for themeselves
            </h2>
            <p>
              Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Works-Header",
  props: ['center']
}
</script>
