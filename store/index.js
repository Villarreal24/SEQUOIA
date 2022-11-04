export const state = () => ({
    authUser: {}
})

export const mutations = {
    updateUser(state, payload) {
        state.user = payload;
        console.log(payload);
        this.$router.push('/compra')
    },
    RESET_STORE: (state) => {
        state.authUser = null
        // Object.assign(state, initialState())
    },

    SET_AUTH_USER: (state, authUser) => {
        state.authUser = {
            uid: authUser.uid,
            email: authUser.email,
            name: authUser.displayName
        }
    }
}

export const actions = {
    // async nuxtServerInit({ dispatch }, ctx) {
    //     if (this.$fire.auth === null) {
    //         throw 'nuxtServerInit Example not working - this.$fire.auth cannot be accessed.'
    //     }

    //     if (ctx.$fire.auth === null) {
    //         throw 'nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.'
    //     }

    //     if (ctx.app.$fire.auth === null) {
    //         throw 'nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.'
    //     }

    //     // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'

    //     /** Get the VERIFIED authUser from the server */
    //     if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
    //         const { allClaims: claims, ...authUser } = ctx.res.locals.user

    //         console.info(
    //             'Auth User verified on server-side. User: ',
    //             authUser,
    //             'Claims:',
    //             claims
    //         )

    //         await dispatch('onAuthStateChanged', {
    //             authUser,
    //             claims,
    //         })
    //     }
    // },

    onAuthStateChanged({ commit }, { authUser, claims }) {
        if (!authUser) {
            console.log("No hay usuario");
            commit('RESET_STORE')
            return
        }
        // console.log('AuthStateChangedAction', authUser)
        commit('SET_AUTH_USER', authUser)
    },
}

export const getters = {
    isLoggedIn: (state) => {
        try {
            return state.authUser.id !== null
        } catch {
            return false
        }
    }
}
