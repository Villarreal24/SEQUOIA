<template>
    <div class="container profile-content">
        <div class="profile-group">
            <h5>Políticas para comprar con SEQUOIA</h5>
        </div>

        <div class="profile-group">
            <div class="row col-12 justify-content-between">
                <h6>Carta de intención</h6>
                <b-button variant="info" v-show="true">Descargar</b-button>
                <b-button variant="info" v-show="false">Adjuntar</b-button>
            </div>
            <p>Válida por 60 días naturales a partir de la validación de documento.</p>
        </div>
        <hr>
        <div class="profile-group ">
            <div class="row justify-content-between col-12">
                <h6>Estatus de la carta</h6>
                <p class="h2">
                    <b-icon icon="check-lg" variant="success" aria-label="Help"></b-icon>
                </p>
            </div>
            <p>Dias restantes de la carta de intención: <span style="color: #252531;">{{diasRestantes}}</span> </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Perfil-Config-Comprar",
    data() {
        return {
            status: 'Comprobado',
            diasRestantes: 32
        }
    }
}
</script>