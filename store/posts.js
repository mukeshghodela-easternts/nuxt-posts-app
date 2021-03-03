import Cookie from "js-cookie";
export const state = () => ({
    loadedPosts: [],
    token: null
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

    setToken(state, token) {
        state.token = token;
    },
    clearToken(state) {
        state.token = null;
    }
}

export const actions = {
    setPosts({ commit }, posts) {
        commit('setPosts', posts);
    },
    addPost({ commit, state }, post) {
        return this.$axios.$post("/posts.json?auth=" + state.token, post)
            .then((res) => {
                commit('addPost', { ...post, id: res.name });
            })
            .catch((e) => console.log(e));
    },
    editPost({ commit, state }, post) {
        return this.$axios.$put(`/posts/${post.id}.json?auth=${state.token}`, post)
            .then(() => {
                commit('editPost', post);
            })
            .catch((e) => console.log(e));
    },
    authenticateUser({ commit, dispatch }, authData) {
        let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`;
        if (!authData.isLogin) {
            authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_API_KEY}`;
        }
        return this.$axios
            .$post(authUrl, {
                email: authData.email,
                password: authData.password,
                returnSecureToken: true
            })
            .then(result => {
                commit("setToken", result.idToken);
                localStorage.setItem("token", result.idToken);
                localStorage.setItem(
                    "tokenExpiration",
                    new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
                );
                Cookie.set("jwt", result.idToken);
                Cookie.set(
                    "expirationDate",
                    new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
                );
            })
            .catch(e => console.log(e));
    },
    initAuth({ commit, dispatch }, req) {
        let token;
        let expirationDate;
        if (req) {
            if (!req.headers.cookie) {
                return;
            }
            const jwtCookie = req.headers.cookie
                .split(";")
                .find(c => c.trim().startsWith("jwt="));
            if (!jwtCookie) {
                return;
            }
            token = jwtCookie.split("=")[1];
            expirationDate = req.headers.cookie
                .split(";")
                .find(c => c.trim().startsWith("expirationDate="))
                .split("=")[1];
            console.log(+expirationDate);
        } else {
            token = localStorage.getItem("token");
            expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date().getTime() > +expirationDate || !token) {
            console.log('No token or invalid token');
            dispatch('logout');
            return;
        }
        commit("setToken", token);
    },
    logout({ commit }) {
        commit('clearToken');
        Cookie.remove('jwt');
        Cookie.remove('expirationDate');
        if (process.client) {
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiration');
        }
    }
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts;
    },
    isAuthenticated(state) {
        return state.token != null;
    }
}