<template>
  <b-card class="col-12 col-lg-6 col-xl-5 mx-auto p-4">
    <div class="text-center" data-wow-delay=".3s">
      <b-form @submit.prevent="sendEmail">
        <div class="login-head">
          <h4>Continuar para iniciar sesión</h4>
        </div>
        <div class="text-center">
          <ValidationProvider class="col-12 p-0" rules="required">
          <b-form-group label="Correo electrónico">
            <b-form-input
              id="input-email"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="form.email"
              type="email"
              placeholder="Ingresa email"
              required>
            </b-form-input>
          </b-form-group>
          </ValidationProvider>
          <ValidationProvider class="col-12 p-0" rules="required">
            <b-form-input
              id="input-password"
              v-model="form.password"
              type="password"
              placeholder="*******"
              required>
            </b-form-input>
          </ValidationProvider>
          <!-- =========== SHOW ERROR ============= -->
          <div class="messages" v-if="errMessage">
            <p class="text-danger">{{ errMessage }}</p>
          </div>
          <div class="mt-4">
            <b-button
              block
              type="submit"
              variant="success"
              >Iniciar sesión
            </b-button>
          </div>
        </div>
      </b-form>
    </div>
    <div class="mt-4 text-center">
      <div class="login-subtitle">
        <h6 class="pb-3 text-extra-light-gray">O bien puedes</h6>
      </div>

      <div>
        <b-button
          class="d-flex justify-content-between align-items-center"
          block variant="danger"
          @click="google()">
            <b-icon icon="google" aria-hidden="true"></b-icon>Continuar con Google
            <p></p>
        </b-button>
        <b-button
          class="d-flex justify-content-between align-items-center"
          block variant="primary"
          @click="facebook()">
            <b-icon icon="facebook" aria-hidden="true"></b-icon>Continuar con Facebook
            <p></p>
        </b-button>
      </div>
    </div>

    <!-- Alert error -->
    <p class="text-danger" v-if="error">{{ error }}</p>

    <hr class="mt-35 mb-4" style="height:1.3px; border:none; background-color:#C8C8C8;">
    <div class="col-12 row login-help justify-content-between pr-0">
      <b-col class="p-0">
        <h6>No puedes inicar sesion?</h6>
      </b-col>
      <b-col class="p-0">
        <h6>▪</h6>
      </b-col>
      <b-col class="p-0">
        <b-link href="/register">
          <h6>Registrate para obtener una nueva cuenta</h6>
        </b-link>
      </b-col>
    </div>
  </b-card>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  name: "Login-form",
  components: {
    ValidationProvider,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errMessage: '',
      error: ''
    }
  },
  methods: {
    sendEmail() {
      const email = this.form.email
      const password = this.form.password
      this.$fire.auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          if (userCredential) {
            this.$nuxt.$options.router.push("/")
          }
        }).catch(err => {
          if (err.message === 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).') {
            this.errMessage = "Usuario o contraseña invalidos."
          } else if (err.message === 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).') {
            this.errMessage = "Usuario o contraseña invalidos."
          } else {
            this.errMessage = err.message
          }
        })
    },
    async google() {
      const provider = await new this.$fireModule.auth.GoogleAuthProvider();
      if (provider) {
        this.login(provider);
        this.$store.commit('setProvider', 'Google')
      }
    },
    async facebook() {
      const provider = await new this.$fireModule.auth.FacebookAuthProvider();
      if (provider) {
        this.login(provider);
        this.$store.commit('setProvider', 'Facebook')
      }
    },

    // ==============================================
    //              INICIO DE SESION
    // ==============================================
    async login(provider) {
      try {
        const result = await this.$fire.auth.signInWithPopup(provider);
        const user = result.user;
        // Colleccion usuarios
        const usuario = {
          uid: user.uid,
          nombre: user.displayName,
          email: user.email,
          foto: user.photoURL
        }

        // Guardar en Firestore
        await this.$fire.firestore.collection('users').doc(usuario.uid).set(usuario)
        this.$router.push('/compra')
      } catch (e) {
        e.message
        if (e.message = 'Firebase: An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address. (auth/account-exists-with-different-credential).') {
          this.error = "La cuenta ya existe pero con un provedor diferente."
        } else {
          this.error = error;
        }

      }
    }
  }
}
</script>