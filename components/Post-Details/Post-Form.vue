<template>
  <div class="comment-form">
    <h5>Add Comment :</h5>
    <div class="form">
      <form action="">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <textarea placeholder="Your Comment" v-model="comment"></textarea>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input type="text" placeholder="Your Name" v-model="name">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input type="email" placeholder="Your Email" v-model="email">
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <button class="btn-curve btn-blc btn-lg" @click="onSubmit">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post-Form",
  data() {
    return {
      name: '',
      email: '',
      comment: '',
      errMessage: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const commentData = {
        name: this.name,
        email: this.email,
        content: this.comment
      }

      if (!this.validateForm(commentData)) return;

      console.log(commentData);

      this.errMessage = '';
    },
    validateForm(commentData) {
      if (!commentData.name || !commentData.email || !commentData.content) {
        this.errMessage = 'Please fill in all fields';
        return false;
      }
      if (commentData.name.length < 5) {
        this.errMessage = 'Name must be at least 5 characters';
        return false;
      }
      if (commentData.content.length < 10) {
        this.errMessage = 'Content must be at least 10 characters';
        return false;
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(commentData.email)) {
        this.errMessage = 'Email address is invalid';
        return false;
      }
      return true;
    }
  }
}
</script>
