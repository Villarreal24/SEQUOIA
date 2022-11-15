<template>
    <div class="container profile-content mt-4">
        <div class="profile-group">
            <h6>Nombre</h6>
            <p>{{ authUser.name }}</p>
        </div>
        <hr>
        <div class="profile-group" v-if="authUser.provider">
            <h6>Inicio sesion por </h6>
            <p class="profile-subtitle">{{ authUser.provider }}</p>
        </div>
        <hr>
        <div class="profile-group">
            <h6>Correo electronico</h6>
            <p>{{ authUser.email }}</p>
        </div>
        <div v-if="authUser.provider === 'Correo electrónico'">
            <hr>
            <div class="row profile-group">
                <b-col sm="7" md="9">
                    <h6>Contraseña</h6>
                    <p>**********</p>
                </b-col>
                <b-col sm="5" md="3">
                    <b-button variant="warning">Cambiar contraseña</b-button>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "Perfil-Config-Cuenta",
    computed: {
        ...mapState(['authUser', 'provider'])
    }
}
</script>