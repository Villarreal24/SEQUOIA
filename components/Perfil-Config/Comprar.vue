<template>
    <div class="container profile-content">
        <div class="profile-group">
            <h5>Políticas para comprar con SEQUOIA</h5>
        </div>

        <b-overlay :show="loading" rounded="sm">
            <div class="profile-group">
                <div class="row col-12 justify-content-between">
                    <b-col sm="8">
                        <h6>Carta de intención</h6>
                    </b-col>
                    <b-col sm="2">
                        <b-button variant="info" v-if="existFile" @click="downloadFile">Ver y Descargar</b-button>
                        <b-button
                            v-if="!existFile"
                            :disabled="!send"
                            variant="info"
                            @click="uploadFile"
                        >Guardar archivo</b-button>
                    </b-col>
                    <b-col md="12">
                        <p>Válida por 60 días naturales a partir de la validación de documento.</p>
                    </b-col>
                    
                    <div class="col-12 mt-4" v-if="!existFile">
                        <b-form-file
                            v-model="file"
                            :state="Boolean(file)"
                            accept=".pdf"
                            placeholder="Escoge el archivo o sueltalo aquí..."
                            drop-placeholder="Suelta el archivo aquí..."
                            @change="onChangeFile">
                        </b-form-file>
                    </div>
                    <b-col class="pt-3 mb-0" md="12" v-if="!send && !existFile">
                        <b-alert show variant="warning">Solo se pueden subir documentos .pdf</b-alert>
                    </b-col>
                </div>
            </div>
        </b-overlay>
        <hr>
        <div class="profile-group ">
            <div class="row justify-content-between col-12">
                <b-col sm="8">
                    <h6>Estatus de la carta</h6>
                </b-col>
                <b-col sm="1">
                    <p class="h2" v-if="existFile">
                        <b-icon icon="check-lg" variant="success" aria-label="Help"></b-icon>
                    </p>
                    <p class="h2" v-if="!existFile">
                        <b-icon icon="x-circle-fill" variant="danger" aria-label="Help"></b-icon>
                    </p>
                </b-col>
            </div>
            <b-col>
                <p>Dias restantes de la carta de intención:
                    <span v-if="daysLeft" style="color: #252531;">{{ daysLeft }}</span>
                </p>
            </b-col>
        </div>
    </div>
</template>

<script>
var FileSaver = require('file-saver');

export default {
    name: "Perfil-Config-Comprar",
    data() {
        return {
            loading: false,
            file: '',
            daysLeft: '',
            existFile: false,
            send: false
        }
    },
    methods: {
        async getFile() {
            const user = this.$store.state.authUser.uid;
            const ref = this.$fire.firestore.collection('users').doc(user)
                .collection('compra').doc('cartaIntencion')

            await ref.get().then(snap => {
                if(snap.exists) {
                    this.existFile = true;
                    const data = snap.data();
                    this.file = data.carta;
                    this.daysLeft = data.dias;
                }
            })
        },
        onChangeFile() {
            setTimeout(() => {
                if (this.file !== '') {
                    this.send = true
                }
            }, 1000);
        },
        async uploadFile() {
            const user = this.$store.state.authUser.uid;
            const refFirestore = this.$fire.firestore.collection('users').doc(user)
                .collection('compra').doc('cartaIntencion')
            const refStorage = await this.$fire.storage.ref().child('users')
                .child('compra').child(this.file.name);
            await refStorage.put(this.file)
            const urlDownload = await refStorage.getDownloadURL()
            await refFirestore.set({
                carta: urlDownload,
                dias: 60
            }).then(() => {
                this.send = false
                this.existFile = true
                this.daysLeft = 60
            })
        },
        downloadFile() {
            FileSaver.saveAs(this.file, "Carta intencion.pdf");
        },
    },
    created() {
        this.getFile();
    },
}
</script>