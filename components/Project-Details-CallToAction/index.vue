<template>
  <section class="call-action nogif next">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="content text-center">
            <NuxtLink to="/project-details">
              <h6 class="wow" data-splitting>Next Project</h6>
              <h2 class="wow" data-splitting><b> Luxury </b> Furniture</h2>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="nxt-img bg-img" style="background-image:url('/img/portfolio/project1/bg.jpg')"></div>
  </section>
</template>

<script>
export default {
  name: "Project-Details-CallToAction"
}
</script>
