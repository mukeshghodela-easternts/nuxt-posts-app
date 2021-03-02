export const state = () => ({
    loadedPosts: []
})

export const mutations = {
    setPosts(state, payload) {
        state.loadedPosts = payload
    },
    addPost(state, payload) {
        state.loadedPosts.push(payload);
    },
    editPost(state, payload) {
        var foundIndex = state.loadedPosts.findIndex(x => x.id == payload.id);

        if (foundIndex !== -1) {
            state.loadedPosts[foundIndex] = payload;
        }
    },
    authenticateUser(state, payload) {

    }
}

export const actions = {
    setPosts({ commit }, posts) {
        commit('setPosts', posts);
    },
    addPost({ commit }, post) {
        return this.$axios.$post("/posts.json", post)
            .then((res) => {
                commit('addPost', { ...post, id: res.name });
            })
            .catch((e) => console.log(e));
    },
    editPost({ commit }, post) {
        return this.$axios.$put(`/posts/${post.id}.json`, post)
            .then((res) => {
                commit('editPost', post);
            })
            .catch((e) => console.log(e));
    },
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts;
    }
}