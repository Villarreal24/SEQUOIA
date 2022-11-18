export const state = () => ({
    dataBlogs: [],
    blogDetails: {},
})

export const mutations = {
    setBlogs(state, payload) {
        state.dataBlogs = payload
    },
    setBlogDetails(state, payload) {
        state.blogDetails = payload
    }
}