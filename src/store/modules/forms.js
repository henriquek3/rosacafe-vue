import Vue from 'vue'
import router from "../../router";
// initial state
const state = () => ({
    formResource: {}
})

// getters
const getters = {
    data: state => {
        return state.formResource;
    }
}

// actions
const actions = {
    putResource({commit}, data) {
        return Vue.prototype.$http.put(`/${data.resource}/${data.id}`, data)
            .then(() => {
                commit('updateFormResource', data);
            }).then(() => {
                window.iziToast.show({
                    title: 'Sucesso!',
                    message: 'O registro foi atualizado com sucesso!',
                    color: 'green',
                    position: 'topCenter',
                });
            })
            .catch(err => {
                console.log(err)
                window.iziToast.show({
                    title: 'Atenção!',
                    message: 'Houve um problema para processar sua requisição!',
                    color: 'red',
                    position: 'topCenter',
                    timeout: 10000,
                });
            });
    },
    deleteResource({commit}, data) {
        return Vue.prototype.$http.delete(`/${data.resource}/${data.id}`)
            .then(() => {
                commit('deleteFormResource', data);
            })
            .then(() => {
                window.iziToast.show({
                    title: 'Sucesso!',
                    message: 'O registro foi deletado com sucesso!',
                    color: 'green',
                    position: 'topCenter',
                });
            })
            .catch(err => {
                console.log(err)
                window.iziToast.show({
                    title: 'Atenção!',
                    message: 'Houve um problema para processar sua requisição!',
                    color: 'red',
                    position: 'topCenter',
                    timeout: 10000,
                });
            });
    }
}

// mutations
const mutations = {
    updateFormResource(state, data) {
        state.formResource = data;
    },
    deleteFormResource(state, data) {
        state.formResource = [];
        router.push({name: data.resource})
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}