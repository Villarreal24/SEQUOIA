<template>
  <div>
    <LoginHeader show="login" />
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: "light",
  head() {
    return {
      titleTemplate: "%s - Architecture Light",
    }
  },
}
</script>