<template>
  <b-card class="col-12 col-lg-6 col-xl-5 mx-auto p-4">
    <div class="text-center" data-wow-delay=".3s">
      <b-form @submit="onSubmit">
        <div class="login-head">
          <h4>Continuar para iniciar sesión</h4>
        </div>
        <!-- <div class="messages" v-if="errMessage">{{ errMessage }}</div> -->
        <div class="text-center">
          <b-form-group id="input-group-1" label="Correo electrónico" label-for="input-1">
            <b-form-input id="input-1" v-model="email" type="email" placeholder="Ingresa email" required>
            </b-form-input>
          </b-form-group>
          <b-form-input v-model="password" placeholder="*******"></b-form-input>
          <div class="mt-4">
            <b-button block type="submit" variant="success" @click="onSubmit">Iniciar sesión</b-button>
            <!-- <button type="submit" class="btn-curve btn-color" @click="onSubmit"><span>Enviar mensaje</span></button> -->
          </div>
        </div>
      </b-form>
    </div>
    <div class="mt-4 text-center">
      <div class="login-subtitle">
        <h6 class="pb-3 text-extra-light-gray">O bien puedes</h6>
      </div>

      <div>
        <b-button class="d-flex justify-content-between align-items-center" 
          block variant="danger" @click="google()">
            <b-icon icon="google" aria-hidden="true"></b-icon>Continuar con Google
            <p></p>
        </b-button>
        <b-button class="d-flex justify-content-between align-items-center" 
          block variant="primary" @click="facebook()">
            <b-icon icon="facebook" aria-hidden="true"></b-icon>Continuar con Facebook
            <p></p>
        </b-button>
      </div>
    </div>
    <hr class="mt-35 mb-4" style="height:1.3px; border:none; background-color:#C8C8C8;">
    <div class="col-12 row login-help justify-content-between">
      <h6 class="col-12 col-sm-5">No puedes inicar sesion?</h6>
      <h6>▪</h6>
      <h6 class="col-12 col-sm-6">Registrate para obtener una nueva cuenta</h6>
    </div>
  </b-card>
</template>

<script>

export default {
  name: "Login-form",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    email() {
      console.log("Email");
    },
    google() {
      this.$store.dispatch('googleLogin');
    },
    facebook() {
      this.$store.dispatch('facebookLogin');
    },
    onSubmit(e) {
      e.preventDefault();

      const data = {
        email: this.email,
        password: this.password
      }

      if (!this.validateForm(data)) return;

      console.log(data);

      this.errMessage = '';
    },
    validateForm(contactData) {
      if (!contactData.password || !contactData.email) {
        this.errMessage = 'Please fill in all fields';
        return false;
      }
      if (contactData.password.length < 5) {
        this.errMessage = 'Name must be at least 5 characters';
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