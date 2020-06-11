import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import forms from "./modules/forms";
import datatables from "./modules/datatables";
import estoque from "./modules/estoque";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        login,
        forms,
        datatables,
        estoque
    }
})
