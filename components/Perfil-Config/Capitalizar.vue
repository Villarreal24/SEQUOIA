<template>
    <div class="container profile-content">
        <div class="profile-group">
            <h5>Venta con Arrendamiento Posterior SEQUOIA</h5>
        </div>

        <!-- <ValidationObserver> -->
            <form @submit.prevent="onSubmit">
                <div class="profile-group">
                    <div class="row col-12 justify-content-between">
                        <div class="col-md-10">
                            <h6 class="mb-3">Número de Hectáreas</h6>
                            <h6 class="col pb-2">¿Cuál es el tamaño total del Inmueble?</h6>
                            <b-col sm="8">
                                <ValidationProvider
                                    rules="required">
                                    <b-form-input
                                        name="Size Property"
                                        id="input-none"
                                        required
                                        v-model="form.sizeProperty"
                                        placeholder="Ingresa el tamaño">
                                    </b-form-input>
                                </ValidationProvider>
                            </b-col>
                        </div>
                    </div>
                </div>
                <hr>
                
                <div class="profile-group">
                    <div class="row col-12 justify-content-between">
                        <div class="col-12 col-md-10">
                            <h6 class="mb-3">Hectáreas Cultivables</h6>
                            <h6 class="col pb-2">¿Cuántas hectáreas del total son cultivables?</h6>
                            <b-col sm="8">
                                <ValidationProvider
                                    rules="required">
                                    <b-form-input
                                        name="Size Arable"
                                        id="size-arable"
                                        required
                                        v-model="form.sizeArable"
                                        placeholder="Ingresa hectáreas">
                                    </b-form-input>
                                </ValidationProvider>
                            </b-col>
                        </div>
                    </div>
                </div>
                <hr>

                <div class="profile-group">
                    <div class="row">
                        <div class="row col-12 col-lg-9">
                            <b-col sm="4">
                                <h6 class="mb-3">Municipio</h6>
                                <ValidationProvider
                                    rules="required">
                                    <b-form-input
                                        id="input-none"
                                        required
                                        v-model="form.municipality">
                                    </b-form-input>
                                </ValidationProvider>
                            </b-col>
                            <b-col sm="4">
                                <h6 class="mb-3">Estado</h6>
                                <ValidationProvider
                                    rules="required">
                                    <b-form-input
                                        id="input-none"
                                        required
                                        v-model="form.state">
                                    </b-form-input>
                                </ValidationProvider>
                            </b-col>
                            <b-col sm="4">
                                <h6 class="mb-3">Coordenadas</h6>
                                <ValidationProvider
                                    rules="required">
                                    <b-form-input
                                        id="input-none"
                                        required
                                        v-model="form.coordinate">
                                    </b-form-input>
                                </ValidationProvider>
                            </b-col>
                            <b-col class="pt-45" sm="9">
                                <h6>Veamos si tu propiedad califica para nuestro programa de Venta
                                    con arrendamiento posterio.</h6>
                            </b-col>
                            <b-col class="pt-45" sm="3">
                                <b-button type="submit" variant="info">Califíquenme!</b-button>
                            </b-col>
                        </div>
                        <div class="col-12 col-lg-3">
                            <p class="profile-text-terminos pb-3">
                                Al hacer click en "Califíquenmme", acepta nuestros
                                <span class="text-terminos-negrita">Términos y Condiciones de servicio
                                    y Política de privacidad.</span>
                            </p>
                            <p class="profile-text-terminos">
                                Programa actualmente disponible en Sonora y Jalisco.
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        <!-- </ValidationObserver> -->
    </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
    name: "Perfil-Config-Capitalizar",
    components: {
        ValidationProvider,
    },
    data() {
        return {
            form: {
                sizeProperty: '',
                sizeArable: '',
                municipality: '',
                state: '',
                coordinate: ''
            },
        }
    },
    methods: {
        onSubmit() {
            const user = this.$store.state.authUser;
            console.log(user)
        },
    }
}
</script>