import router from "../../router";

// initial state
const state = {
    registro: {},
    url: '',
    callbackUrl: '',
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
        router.push(`${payload.path}/${payload.id}`);
    },
    requestCreate({commit, state}, payload) {
        return this._vm.$http.post(`${state.url}`, payload)
            .then((response) => {
                commit('setRegistro', payload);
                router.push(`${state.callbackUrl}/${response.data.id}`);
            }).then(() => {
                window.iziToast.show({
                    title: 'Sucesso!',
                    message: 'O registro foi atualizado com sucesso!',
                    color: 'green',
                    position: 'topCenter',
                });

            })
            .catch(err => {
                console.log(err.message)
                window.iziToast.show({
                    title: 'Atenção!',
                    message: 'Houve um problema para processar sua requisição!',
                    color: 'red',
                    position: 'topCenter',
                    timeout: 10000,
                });

                // Messagem de ambiente de desenvolvimetno
                window.iziToast.show({
                    title: `Código: ${err.code}`,
                    message: `Mensagem: ${err.message}`,
                    color: 'red',
                    position: 'bottomCenter',
                    timeout: 20000
                });
            });
    },
    requestPut({commit, state}, payload) {
        return this._vm.$http.put(`${state.url}/${state.registro.id}`, payload)
            .then(() => {
                commit('setRegistro', payload);
            }).then(() => {
                window.iziToast.show({
                    title: 'Sucesso!',
                    message: 'O registro foi atualizado com sucesso!',
                    color: 'green',
                    position: 'topCenter',
                });

            })
            .catch(err => {
                console.log(err.message)
                window.iziToast.show({
                    title: 'Atenção!',
                    message: 'Houve um problema para processar sua requisição!',
                    color: 'red',
                    position: 'topCenter',
                    timeout: 10000,
                });

                // Messagem de ambiente de desenvolvimetno
                window.iziToast.show({
                    title: `Código: ${err.code}`,
                    message: `Mensagem: ${err.message}`,
                    color: 'red',
                    position: 'bottomCenter',
                    timeout: 20000
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
                console.log(err.message)
                window.iziToast.show({
                    title: 'Atenção!',
                    message: 'Houve um problema para processar sua requisição!',
                    color: 'red',
                    position: 'topCenter',
                    timeout: 10000,
                });

                // Messagem de ambiente de desenvolvimetno
                window.iziToast.show({
                    title: `Código: ${err.code}`,
                    message: `Mensagem: ${err.message}`,
                    color: 'red',
                    position: 'bottomCenter',
                    timeout: 20000
                });
            });
    },
    resetRegistro({commit}) {
        commit('setNullRegistro');
        sessionStorage.removeItem('registro');
    },
    getSessionStorageRegistro() {
        return JSON.parse(sessionStorage.getItem('registro'))
    },
    setUrl({commit}, payload) {
        commit('setUrl', payload);
    },
    setCallbackUrl({commit}, payload) {
        commit('setCallbackUrl', payload);
    },
    showFormErrors(payload) {
        window.iziToast.show({
            title: 'Atenção!',
            message: 'Houve um problema para processar sua requisição!',
            color: 'red',
            position: 'topCenter',
            timeout: 10000,
        });

        // Messagem de ambiente de desenvolvimetno
        window.iziToast.show({
            title: `Código: ${payload.code}`,
            message: `Mensagem: ${payload.message}`,
            color: 'red',
            position: 'bottomCenter',
            timeout: 20000
        });
    },
}

// mutations
const mutations = {
    setRegistro(state, payload) {
        sessionStorage.setItem('registro', JSON.stringify(payload))
        state.registro = payload;
    },
    setNullRegistro(state) {
        state.registro = {}
    },
    setUrl(state, payload) {
        state.url = payload;
    },
    setCallbackUrl(state, payload) {
        state.callbackUrl = payload;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}