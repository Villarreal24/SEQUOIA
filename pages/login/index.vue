<template>
  <div>
    <!-- <Navbar ref="navbar" theme="light" /> -->
    <LoginHeader />
  </div>
</template>

<script>
export default {
  name: 'Renta',
  layout: "light",
  head() {
    return {
      titleTemplate: "%s - Architecture Light",
    }
  },
}
</script>