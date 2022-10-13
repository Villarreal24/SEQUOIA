<template>
  <section class="after-before section-padding">
    <div class="background bg-img parallaxie" data-overlay-dark="7"></div>
    <div class="container ontop">
      <div class="section-head text-center wow fadeInUp" data-wow-delay=".3s">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <h6 class="custom-font">Best Works</h6>
            <h4 class="playfont">Drag the Slider to See the Transformation One of the Interior</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="dotsbg wow fadeInUp" data-wow-delay=".3s">
            <TwentyTwenty
              class="wow imago"
              before="/img/before.jpg"
              after="/img/after.jpg"
              afterLabel="After"
              beforeLabel="Before"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home3-Light-Slider",
  mounted() {
    let videoBg = document.querySelector('.background.bg-img.parallaxie');

    let position = videoBg.getBoundingClientRect().top * 0.77;

    videoBg.style.backgroundImage = 'url("/img/04.jpg")';
    videoBg.style.backgroundSize = 'cover';
    videoBg.style.backgroundRepeat = 'no-repeat';
    videoBg.style.backgroundAttachment = 'fixed';
    videoBg.style.backgroundPosition = `center ${position}px`;

    window.onscroll = () => {
      position = videoBg.getBoundingClientRect().top * 0.77;
      videoBg.style.backgroundPosition = `center ${position}px`;
    }
  },
}
</script>
