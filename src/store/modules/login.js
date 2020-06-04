import {AuthService} from "../../services/AuthService";

// initial state
const state = () => ({
    auth: {
        check: sessionStorage.getItem('token') !== null,
    },
})

// getters
const getters = {}

// actions
const actions = {
    login(context, {email, password}) {
        return AuthService.auth(email, password).then(response => {
            context.commit('authenticated');
            return response;
        });
    },
    logout(context) {
        context.commit('unauthenticated')
    },
}

// mutations
const mutations = {
    authenticated(state) {
        state.auth.check = true;
    },
    unauthenticated(state) {
        state.auth.check = false;
        sessionStorage.removeItem('token');
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}