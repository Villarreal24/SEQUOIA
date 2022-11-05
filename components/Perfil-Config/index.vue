<template>
    <div class="container mb-4">
        <div class="profile">
            <h2>Configuración de la cuenta</h2>
        </div>
        <div>
            <b-tabs content-class="mt-3" fill>
                <b-tab title="Cuenta" active>
                    <Perfil-Config-Cuenta />
                </b-tab>
                <b-tab title="Comprar">
                    <Perfil-Config-Comprar />
                </b-tab>
                <b-tab title="Vender">
                    <Perfil-Config-Vender />
                </b-tab>
                <b-tab title="Capitalizar">
                    <Perfil-Config-Capitalizar />
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name: "Perfil-Config",
}
</script>