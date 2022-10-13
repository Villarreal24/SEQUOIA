<template>
  <div class="comments-area">
    <h5>Comments :</h5>
    <div class="item" :class="{relped: comment.relped}" v-for="comment, idx in comments" :key="idx">
      <div class="comment-img">
        <img :src="comment.image" alt="">
      </div>
      <div class="info">
        <h6>{{ comment.author }}<span> {{ comment.date }}</span></h6>
        <span class="replay"><NuxtLink to="#0">Replay <i class="fas fa-reply"></i></NuxtLink></span>
        <p>
          {{ comment.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post-Comments",
  props: ['comments']
}
</script>
