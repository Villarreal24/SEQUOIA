import { db } from "~/plugins/firebase.js";

export const state = () => ({
    tareas: {}
})

export const mutations = {
    setTareas(state, payload) {
        state.tareas = payload
        console.log(state.tareas);
    }
}

export const actions = {}