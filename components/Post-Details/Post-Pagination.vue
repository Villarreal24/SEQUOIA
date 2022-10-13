<template>
  <div class="pagination">
    <span>
      <NuxtLink to="#0">Prev Post</NuxtLink>
    </span>
    <span class="icon">
      <NuxtLink to="#0"><i class="fas fa-th-large"></i></NuxtLink>
    </span>
    <span class="text-right">
      <NuxtLink to="#0">Next Post</NuxtLink>
    </span>
  </div>
</template>

<script>
export default {
  name: "Post-Pagination"
}
</script>
