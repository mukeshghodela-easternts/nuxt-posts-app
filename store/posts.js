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
    nuxtServerInit({ commit }, payload) {
        commit('setPosts', [
            {
                id: "1",
                title: "First Post",
                previewText: "This is our first post!",
                thumbnail:
                    "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
            },
            {
                id: "2",
                title: "Second Post",
                previewText: "This is our second post!",
                thumbnail:
                    "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
            }
        ])
    }
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts;
    }
}