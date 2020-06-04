import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
//import pagination from "./modules/pagination";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        formEditResource: {}
    },
    mutations: {
        updateFormEditResource(state, data) {
            state.formEditResource = data
        },
    },
    actions: {
        getResourceById(context, config) {
            return Vue.prototype.$http.get('/' + config.resource + '/' + config.id)
                .then(response => {
                    context.commit('updateFormEditResource', response.data)
                })
            ;
        }
    },
    modules: {
        login,
        //pagination: pagination
    }
})
