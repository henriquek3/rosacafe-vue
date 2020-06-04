import Vue from 'vue'
import Vuex from 'vuex'
import {AuthService} from "../services/AuthService";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        auth: {
            check: sessionStorage.getItem('token') !== null,
        },

        // Paginate
        getList: [],
    },
    mutations: {
        authenticated(state) {
            state.auth.check = true;
        },
        unauthenticated(state) {
            state.auth.check = false;
            sessionStorage.removeItem('token');
        },

        // Paginate
        updateList(state, data) {
            state.getList = data
        },
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
        },

        // Paginate
        clearRegistries(context, config) {
            console.log(config, 'store/index@clearRegistries')
            context.commit('updateList', [])
        },
        getRegistries(context, config) {
            if (!config.page) {
                config.page = 1
            }
            if (!config.limit) {
                config.limit = 200
            }
            Vue.prototype.$http.get('/' + config.resource + '?limit=' + config.limit + '&page=' + config.page)
                .then(response => {
                context.commit('updateList', response.data)
            })
        }
    },
    modules: {}
})
