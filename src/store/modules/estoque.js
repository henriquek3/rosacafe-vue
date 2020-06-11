// initial state
const state = {
    estoque: [],
    loanding: true
}

// getters
const getters = {
    estoques: state => {
        return state.estoque;
    }
}

// actions
const actions = {
    clearEstoque(context) {
        context.commit('delete')
    },
    getData(context) {
        this._vm.$http.get('produto/estoque?with[]=tamanho&with[]=cor')
            .then(response => {
                context.commit('update', response.data.data)
            })
            .catch(err => {
                console.log(err.message)
                window.iziToast.show({
                    title: 'Atenção!',
                    message: 'Houve um problema para para carregar os estoques!',
                    color: 'red',
                    position: 'topCenter',
                    timeout: 10000,
                });
            })
        ;
    }
}

// mutations
const mutations = {
    delete(state) {
        state.dataTable = []
    },
    update(state, payload) {
        state.estoque = payload
    },
    push(state, payload) {
        state.estoque.push(payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}