import Vue from 'vue'
import router from "../../router";

// initial state
const state = {
    registro: {}
}

// getters
const getters = {
    getRegistro: () => {
        console.log('getRegistros')
        return JSON.parse(sessionStorage.getItem('registro'));
    },
}

// actions
const actions = {
    loadResource({commit}, payload) {
        console.log('loadResource')
        commit('setRegistro', payload);
        router.push(`${payload.path}/${payload.id}`);
    },
    requestPut({commit, state}) {
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
    requestDelete({commit}, data) {
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
    setRegistro(state, payload) {
        console.log('setRegistro')
        state.registro = payload;
        sessionStorage.setItem('registro', JSON.stringify(payload));
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}