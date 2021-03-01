export const state = () => ({
    counter: 0
})

export const actions = {
    async nuxtServerInit({ commit }, { $axios, error }) {
        const res = await $axios.$get('/posts.json');
        let postsArray = [];
        for (const key in res) {
            postsArray.push({ ...res[key], id: key });
        }
        commit('posts/setPosts', postsArray, { root: true });

        // if(!process.client) {
        //     console.log("CLIENT_RENDERING");
        // }
    }
}