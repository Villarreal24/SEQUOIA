import { db } from "~/plugins/firebase.js";

export const state = () => ({
    tareas: {}
})

export const mutations = {
    setTareas(state, payload) {
        state.tareas = payload
    }
}

export const actions = {
    async nuxtServerInit ({ commit }) {
        console.log("probando");
        await db.collection('Tareas').get()
            .then(query => {
                const tareas = []
                query.forEach(element => {
                    let tarea = element.data();
                    tarea.id = element.id;
                    tareas.push(tarea)
                });
                console.log(tareas);
                commit('setTareas', tareas);
            })
            .catch(function (err) {
                console.log(err);
            })
    }
}