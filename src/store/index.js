import Vue from 'vue'
import Vuex from 'vuex'
import {AuthService} from "../services/AuthService";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        auth: {
            check: sessionStorage.getItem('token') !== null,
        }
    },
    mutations: {
        authenticated(state) {
            state.auth.check = true;
        },
        unauthenticated(state) {
            state.auth.check = false;
            sessionStorage.removeItem('token');
        }
    },
    actions: {
        login(context, {email, password}) {
            return AuthService.auth(email, password).then(response => {
                context.commit('authenticated');
                return response;
            });
        },
        logout(context) {
            context.commit('unauthenticated')
        }
    },
    modules: {}
})
