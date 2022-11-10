<template>
    <div class="container profile-content">
        <div class="profile-group">
            <h5>Políticas para vender con SEQUOIA</h5>
        </div>

        <!-- =====================================
                    CARTA DE INTENCION
        ===================================== -->
        <div class="profile-group">
            <div class="row col-12 justify-content-between">
                <b-col sm="8">
                    <h6>Carta de intención</h6>
                </b-col>
                <b-col sm="2">
                    <b-button
                        variant="info"
                        v-if="existFileIntentionLetter"
                        @click="downloadFile(fileIntentionLetter)"
                        >Ver y descargar
                    </b-button>
                    <b-button
                        :disabled="!sendIntention"
                        variant="info"
                        v-if="!existFileIntentionLetter"
                        @click="uploadFileIntentionLetter"
                    >Guardar archivo</b-button>
                </b-col>
            </div>

            <b-col md="12">
                <p>Válida por 90 días naturales a partir de la validación de documento.</p>
            </b-col>

            <div class="col-12 col-lg-10 mt-4" v-if="!existFileIntentionLetter">
                <b-form-file
                    v-model="fileIntentionLetter"
                    :state="Boolean(fileIntentionLetter)"
                    accept=".pdf"
                    placeholder="Escoge el archivo o sueltalo aquí..."
                    drop-placeholder="Suelta el archivo aquí..."
                    @change="onChangeFileIntentionLetter">
                </b-form-file>
            </div>

            <div class="row justify-content-between col-12" v-if="existFileIntentionLetter">
                <b-col sm="8">
                    <p class="mt-1">Dias restantes de la carta de intención: 
                        <span style="color: #252531;">{{ diasRestantesIntencion }}</span>
                    </p>
                </b-col>
                <b-col sm="1">
                    <p class="h2">
                        <b-icon icon="check-lg" variant="success" aria-label="Help"></b-icon>
                    </p>
                </b-col>
            </div>
        </div>
        <hr>
        <!-- =====================================
                        ESCRITURAS
        ===================================== -->
        <div class="profile-group">
            <div class="row col-12 justify-content-between mb-3">
                <b-col sm="8">
                    <h6>Escrituras</h6>
                </b-col>
                <b-col sm="2">
                    <b-button
                        variant="info"
                        v-if="existFileScriptures"
                        @click="downloadFile(fileScriptures)"
                        >Ver y descargar
                    </b-button>
                    <b-button
                        :disabled="!sendScriptures"
                        variant="info"
                        v-if="!existFileScriptures"
                        @click="uploadFileScriptures"
                    >Guardar archivo</b-button>
                </b-col>
            </div>

            <div class="row justify-content-between col-12">
                <b-col sm="8">
                    <p>Revisa nuestros Términos y Condiciones, así como las Políticas de Privacidad.</p>
                </b-col>
                <b-col sm="1">
                    <p class="h2" v-if="existFileScriptures">
                        <b-icon icon="check-lg" variant="success" aria-label="Help"></b-icon>
                    </p>
                </b-col>
            </div>

            <div class="col-12 col-lg-10 mt-4" v-if="!existFileScriptures">
                <b-form-file
                    v-model="fileScriptures"
                    :state="Boolean(fileScriptures)"
                    accept=".pdf"
                    placeholder="Escoge el archivo o sueltalo aquí..."
                    drop-placeholder="Suelta el archivo aquí..."
                    @change="onChangeFileScriptures">
                </b-form-file>
            </div>
        </div>
        <hr>
        <!-- =====================================
                    LIBERTAD DE GRAVAMEN
        ===================================== -->
        <div class="profile-group">
            <div class="row col-12 justify-content-between mb-3">
                <b-col sm="8">
                    <h6>Libertad de Gravamen</h6>
                </b-col>
                <b-col sm=2>
                    <b-button 
                        variant="info"
                        v-if="existFileAssessment"
                        @click="downloadFile(fileAssessment)"
                        >Ver y descargar
                    </b-button>
                    <b-button
                        v-if="!existFileAssessment"
                        :disabled="!sendAssessment"
                        variant="info"
                        @click="uploadFileAssessment"
                    >Guardar archivo</b-button>
                </b-col>
            </div>
            <div class="row justify-content-between col-12">
                <b-col sm="8">
                    <p>Revisa nuestros Términos y Condiciones, asi como las Políticas de Privacidad.</p>
                </b-col>
                <b-col sm="1">
                    <p class="h2" v-if="existFileAssessment">
                        <b-icon icon="check-lg" variant="success" aria-label="Help"></b-icon>
                    </p>
                </b-col>
            </div>

            <div class="col-12 col-lg-10 mt-4" v-if="!existFileAssessment">
                <b-form-file
                    v-model="fileAssessment"
                    :state="Boolean(fileAssessment)"
                    accept=".pdf"
                    placeholder="Escoge el archivo o sueltalo aquí..."
                    drop-placeholder="Suelta el archivo aquí..."
                    @change="onChangeFileAssessment">
                </b-form-file>
            </div>
        </div>
    </div>
</template>

<script>
import { saveAs } from 'file-saver';
var FileSaver = require('file-saver');

export default {
    name: "Perfil-Config-Vender",
    data() {
        return {
            fileIntentionLetter: '',
            fileScriptures: '',
            fileAssessment: '',
            diasRestantesIntencion: '',
            existFileIntentionLetter: false,
            existFileScriptures: false,
            existFileAssessment: false,
            sendIntention: false,
            sendScriptures: false,
            sendAssessment: false,
        }
    },
    methods: {
        downloadFile(file) {
            FileSaver.saveAs(file);
        },
        // ===========================================
        //       FUNCTIONS FILE INTENTION LETTER
        // ===========================================
        async getFileIntentionLetter() {
            const user = this.$store.state.authUser.uid;
            const ref = this.$fire.firestore.collection('users').doc(user)
                .collection('vende').doc('cartaIntencion')

            await ref.get().then(snap => {
                if(snap.exists) {
                    this.existFileIntentionLetter = true;
                    const data = snap.data();
                    this.fileIntentionLetter = data.carta;
                    this.diasRestantesIntencion = data.dias;
                }
            })
        },
        onChangeFileIntentionLetter() {
            setTimeout(() => {
                if (this.fileIntentionLetter !== '') {
                    this.sendIntention = true
                }
            }, 1000);
        },
        async uploadFileIntentionLetter() {
            const user = this.$store.state.authUser.uid;
            const refFirestore = this.$fire.firestore.collection('users').doc(user)
                .collection('vende').doc('cartaIntencion')
            const refStorage = await this.$fire.storage.ref().child('users')
                .child('vende').child(this.fileIntentionLetter.name);
            await refStorage.put(this.fileIntentionLetter)
            const urlDownload = await refStorage.getDownloadURL()
            await refFirestore.set({
                carta: urlDownload,
                dias: 90
            }).then(() => {
                this.sendIntention = false
                this.existFileIntentionLetter = true
                this.diasRestantesIntencion = 90
            })
        },
        // =========================================
        //         FUNCTIONS FILE SCRIPTURES
        // =========================================
        async getFileScriptures() {
            const user = this.$store.state.authUser.uid;
            const ref = this.$fire.firestore.collection('users').doc(user)
                .collection('vende').doc('escrituras')

            await ref.get().then(snap => {
                if(snap.exists) {
                    this.existFileScriptures = true;
                    const data = snap.data();
                    this.fileScriptures = data.escritura;
                }
            })
        },
        onChangeFileScriptures() {
            setTimeout(() => {
                if (this.fileScriptures !== '') {
                    this.sendScriptures = true
                }
            }, 1000);
        },
        async uploadFileScriptures() {
            const user = this.$store.state.authUser.uid;
            const refFirestore = this.$fire.firestore.collection('users').doc(user)
                .collection('vende').doc('escrituras')
            const refStorage = await this.$fire.storage.ref().child('users')
                .child('vende').child(this.fileScriptures.name);
            await refStorage.put(this.fileScriptures)
            const urlDownload = await refStorage.getDownloadURL()
            await refFirestore.set({
                escritura: urlDownload,
            }).then(() => {
                this.sendScriptures = false
                this.existFileScriptures = true
            })
        },
        // =========================================
        //         FUNCTIONS FILE ASSESSMENT
        // =========================================
        async getFileAssessment() {
            const user = this.$store.state.authUser.uid;
            const ref = this.$fire.firestore.collection('users').doc(user)
                .collection('vende').doc('gravamen')

            await ref.get().then(snap => {
                if(snap.exists) {
                    this.existFileAssessment = true;
                    const data = snap.data();
                    this.fileAssessment = data.gravamen;
                }
            })
        },
        onChangeFileAssessment() {
            setTimeout(() => {
                if (this.fileAssessment !== '') {
                    this.sendAssessment = true
                }
            }, 1000);
        },
        async uploadFileAssessment() {
            const user = this.$store.state.authUser.uid;
            const refFirestore = this.$fire.firestore.collection('users').doc(user)
                .collection('vende').doc('gravamen')
            const refStorage = await this.$fire.storage.ref().child('users')
                .child('vende').child(this.fileAssessment.name);
            await refStorage.put(this.fileAssessment)
            const urlDownload = await refStorage.getDownloadURL()
            await refFirestore.set({
                gravamen: urlDownload,
            }).then(() => {
                this.sendAssessment = false
                this.existFileAssessment = true
            })
        },
    },
    created() {
        this.getFileIntentionLetter();
        this.getFileScriptures();
        this.getFileAssessment();
    },
}
</script>