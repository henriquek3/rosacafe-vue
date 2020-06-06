import router from "../../router";

// initial state
const state = {
    registro: {},
    url: ''
}

// getters
const getters = {
    getRegistro: state => {
        return state.registro;
    },
}

// actions
const actions = {
    loadResource({commit}, payload) {
        commit('setRegistro', payload);
        sessionStorage.setItem('registro', JSON.stringify(payload))
        router.push(`${payload.path}/${payload.id}`);
    },
    requestPut({commit, state}) {
        return this._vm.$http.put(`${state.url}/${state.registro.id}`, state.registro)
            .then(() => {
                commit('setRegistro', state.registro);
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
    requestDelete({commit, state}, payload) {
        return this._vm.$http.delete(`${state.url}/${payload.id}`)
            .then(() => {
                router.push(`${payload.path}`)
                commit('setNullRegistro');
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
    resetRegistro({commit}) {
        commit('setNullRegistro')
    },
    getSessionStorageRegistro() {
        return JSON.parse(sessionStorage.getItem('registro'))
    },
    setUrl({commit}, payload) {
        commit('setUrl', payload);
    }
}

// mutations
const mutations = {
    setRegistro(state, payload) {
        state.registro = payload;
    },
    setNullRegistro(state) {
        state.registro = {}
    },
    setUrl(state, payload) {
        state.url = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}