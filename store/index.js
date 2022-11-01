import { db, auth, firebase } from "~/plugins/firebase.js";

export const state = () => ({
    user: {}
})

export const mutations = {
    updateUser(state, payload) {
        state.user = payload
    }
}

export const actions = {
    // ==============================================
    //          INICIO DE SESION POR GOOGLE
    // ==============================================
    async googleLogin({ commit }) {
        const provider = await new firebase.auth.GoogleAuthProvider();
        firebase.auth().lenguageCode = 'es';

        try {
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;

            // Colleccion usuarios
            const usuario = {
                uid: user.uid,
                nombre: user.displayName,
                email: user.email,
                foto: user.photoURL
            }

            commit('updateUser', usuario)

            // Guardar en Firestore
            await db.collection('users').doc(usuario.uid).set(usuario)

        } catch (error) {
            console.log(error.message);
        }
    },
    // ==============================================
    //          INICIO DE SESION POR FACEBOOK
    // ==============================================
    async facebookLogin({ state, commit }) {
        const provider = await new firebase.auth.FacebookAuthProvider();

        try {
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;
            console.log(user);

            // Colleccion usuarios
            const usuario = {
                uid: user.uid,
                nombre: user.displayName,
                email: user.email,
                foto: user.photoURL
            }

            commit('updateUser', usuario)

            // Guardar en Firestore
            await db.collection('users').doc(usuario.uid).set(usuario)

        } catch (error) {
            console.log(error.message);
        }
    }
}

export const modules = {

}