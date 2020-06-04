import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import pagination from "./modules/pagination";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        login,
        pagination: pagination
    }
})
