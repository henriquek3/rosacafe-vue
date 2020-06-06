import Vue from 'vue'
import router from "../../router";

// initial state
const state = {
    formResource: {
        nome: 'Jean',
        municipio_codigo: 344
    }
}

// getters
const getters = {
    getFormResource: state => {
        return state.formResource;
    }
}

// actions
const actions = {
    loadResource({commit}, payload) {
        commit('setFormResource', payload);
        router.push(`${payload.path}/${payload.id}`);
    },
    putResource({commit, state}) {
        return Vue.prototype.$http.put(`/${state.formResource.resource}/${state.formResource.id}`, state.formResource)
            .then(() => {
                commit('setFormResource', state.formResource);
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
                commit('deleteFormResource');
                router.push({name: data.resource})
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
    },
}

// mutations
const mutations = {
    setFormResource(state, payload) {
        state.formResource = payload;
    },
    deleteFormResource(state) {
        state.formResource = [];
    },
    clearFormResource(state) {
        state.formResource = [];
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}