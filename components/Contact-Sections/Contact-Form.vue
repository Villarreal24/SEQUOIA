<template>
  <form id="contact-form" method="post" action="contact.php">
    <div class="messages" v-if="errMessage">{{ errMessage }}</div>
    <div class="controls">
      <div class="form-group">
        <input id="form_name" type="text" name="name" placeholder="Name" required="required" v-model="name">
      </div>
      <div class="form-group">
        <input id="form_email" type="email" name="email" placeholder="Email" required="required" v-model="email">
      </div>
      <div class="form-group">
        <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required" v-model="message"></textarea>
      </div>
      <button type="submit" class="btn-curve btn-color" @click="onSubmit">
        <span>Send Message</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Contact-Form",
  data() {
    return {
      name: '',
      email: '',
      message: '',
      errMessage: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const contactData = {
        name: this.name,
        email: this.email,
        message: this.message
      }

      if (!this.validateForm(contactData)) return;

      console.log(contactData);

      this.errMessage = '';
    },
    validateForm(contactData) {
      if (!contactData.name || !contactData.email || !contactData.message) {
        this.errMessage = 'Please fill in all fields';
        return false;
      }
      if (contactData.name.length < 5) {
        this.errMessage = 'Name must be at least 5 characters';
        return false;
      }
      if (contactData.message.length < 10) {
        this.errMessage = 'Message must be at least 10 characters';
        return false;
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contactData.email)) {
        this.errMessage = 'Email address is invalid';
        return false;
      }
      return true;
    }
  }
}
</script>
