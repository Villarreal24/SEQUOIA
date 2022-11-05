<template>
    <div class="container profile-content">
        <div class="profile-group">
            <h5>Políticas para vender con SEQUOIA</h5>
        </div>

        <div class="profile-group">
            <div class="row col-12 justify-content-between">
                <h6>Carta de intención</h6>
                <b-button variant="info" v-show="true">Descargar</b-button>
                <b-button variant="info" v-show="false">Adjuntar</b-button>
            </div>
            <p>Válida por 90 días naturales a partir de la validación de documento.</p>
            <div class="row justify-content-between col-12">
                <p class="mt-1">Dias restantes de la carta de intención: <span style="color: #252531;">{{ diasRestantes }}</span> </p>
                <p class="h2">
                    <b-icon icon="check-lg" variant="success" aria-label="Help"></b-icon>
                </p>
            </div>
        </div>
        <hr>
        <div class="profile-group ">

        </div>
    </div>
</template>

<script>
export default {
    name: "Perfil-Config-Vender",
    data() {
        return {
            status: 'Comprobado',
            diasRestantes: 32
        }
    }
}
</script>