<template>
  <section class="contact">
    <ContactInfo :info="contactData" />
    <div class="container-fluid">
      <div class="row">
        <ContactMap :map="contactData.map" />
        <div class="col-lg-6 form">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contactData from "../../data/contact.json";

export default {
  name: "Contact",
  data() {
    return {
      contactData
    }
  }
}
</script>
