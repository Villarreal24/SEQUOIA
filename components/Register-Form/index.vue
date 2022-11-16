<template>
    <b-card class="col-12 col-lg-6 col-xl-5 mx-auto p-4">
        <div class="text-center" data-wow-delay=".3s">
            <div class="login-head">
                <h4>Registro en SEQUOIA</h4>
            </div>
            <b-form @submit.prevent="register">
            <div class="register-form text-center">
                <ValidationProvider class="col-12 p-0" rules="required">
                    <b-form-group>
                        <h6 class="text-register-form">Nombre completo</h6>
                        <b-form-input
                            id="input-name"
                            class="mb-2 mr-sm-2 mb-sm-0"
                            v-model="form.name"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required>
                        </b-form-input>
                    </b-form-group>
                </ValidationProvider>
                <ValidationProvider class="col-12 p-0" rules="required">
                    <b-form-group>
                        <h6 class="text-register-form">Correo electrónico</h6>
                        <b-form-input
                            id="input-email"
                            class="mb-2 mr-sm-2 mb-sm-0"
                            v-model="form.email"
                            type="email"
                            placeholder="sequoia@gmail.com"
                            required>
                        </b-form-input>
                    </b-form-group>
                </ValidationProvider>
                <ValidationProvider class="col-12 p-0 mb-4" rules="required">
                    <b-form-group>
                        <h6 class="text-register-form">Contraseña</h6>
                        <b-form-input
                            id="input-password"
                            v-model="form.password"
                            type="password"
                            placeholder="*******"
                            required>
                        </b-form-input>
                    </b-form-group>
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
                        >Crear cuenta
                    </b-button>
                </div>
                </div>
            </b-form>
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
        name: '',
        email: '',
        password: '',
      },
      errMessage: ''
    }
  },
  methods: {
    register() {
        const email = this.form.email
        const password = this.form.password
        const name = this.form.name
        this.$fire.auth.createUserWithEmailAndPassword(email, password)
            .then(async userCredential => {
                await this.$fire.auth.currentUser.updateProfile({
                    displayName: name
                })
                const userUid = userCredential.user.uid
                await this.$fire.firestore.collection('users').doc(userUid)
                    .set({
                        name: this.form.name,
                        email: this.form.email
                    })
                    // .then(async() => {
                    //     await this.$fire.auth.currentUser.sendEmailVerification()
                    //         .then(() => {
                    //             console.log("Se envio la verificación")
                    //         })
                    //     }).catch(err => {
                    //         console.log(err)
                    //         console.log("Algo salio mal")
                    //     })
            })
            .catch(err => {
                this.errMessage = err.message
                if(err.message === 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).') {
                    this.errMessage = "Este correo electrónico ya se encuentra registrado."
                }
            })
    }
  }
}
</script>