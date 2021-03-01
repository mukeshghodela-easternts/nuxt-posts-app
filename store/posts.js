export const state = () => ({
    loadedPosts: []
})

export const mutations = {
    setPosts(state, payload) {
        state.loadedPosts = payload
    },
}

export const actions = {
    setPosts({ commit }, posts) {
        commit('setPosts', posts);
    },
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts;
    }
}