<template>
  <div>
    <Demos-Header />
    <div class="main-content">
      <Demos-Masonery />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demos',
  layout: "dark",
  head() {
    return {
      titleTemplate: "%s - Demos",
    }
  },
  mounted() {
    document.body.classList.add('index3');
    document.body.classList.remove('index2');
    document.body.classList.remove('index4');
  }
}
</script>

<style>
  .works-header {
    min-height: 85vh;
    position: relative;
  }

  .works-header:after {
    content: '';
    position: absolute;
    top: 50px;
    left: 50px;
    right: 50px;
    bottom: 50px;
    background: #999;
    opacity: .2;
  }

  .works-header:before {
    background: #000!important;
  }

  .masonery .container-fluid {
    padding: 0 80px;
  }

  .masonery .item-img {
    position: relative;
    box-shadow: 0px 5px 10px rgba(50, 50, 50, .2);
    background: #333;
    padding: 15px;
    border-radius: 5px;
  }

  .masonery .item-img img {
    border-radius: 10px;
    overflow: hidden;
  }

  .masonery .gallery .items {
    padding: 0 40px;
    margin-top: 80px;
    text-align: center;
  }

  .masonery .gallery .items h6 {
    margin: 25px 0 15px;
    font-size: 17px;
    font-weight: 400;
    font-family: 'Jost', sans-serif;
    text-align: center;
  }

  .masonery .item-img .new {
    padding: 10px 30px;
    background: #75dab4;
    position: absolute;
    top: 0;
    left: -60px;
    width: 200px;
    transform: rotate(-30deg);
    font-size: 13px;
  }
</style>
