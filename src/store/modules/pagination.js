import Vue from "vue";

// initial state
const state = () => ({
    dataTable: {
        data: []
    },
    loadingTable: true
})

// getters
const getters = {
    dadosTabela: state => {
        return state.dataTable;
    }
}

// actions
const actions = {
    clearDataTable(context) {
        context.commit('updateDataTable', [])
    },

    getDataTable(context, config) {
        if (!config.page) {
            config.page = 1
        }
        if (!config.limit) {
            config.limit = 5
        }
        if (!config.with) {
            config.with = ''
        }
        const url = '/' + config.resource
            + '?limit=' + config.limit
            + '&page=' + config.page
            + '&with=' + config.with
        ;
        return Vue.prototype.$http.get(url)
            .then(response => {
                context.commit('updateDataTable', response.data)
            })
            .then(() => {
                context.commit('updateLoading', false)
            }).then(response=>{return response})
        ;
    }
}

// mutations
const mutations = {
    updateDataTable(state, data) {
        state.dataTable = data
    },
    updateLoading(state, data) {
        state.loadingTable = data
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}