<template>
    <article>
        <div class="row">
            <div class="col-md-12">
                <div class="tile">
                    <div class="tile-title-w-btn line-head">
                        <h3 class="title">Controle do Produto</h3>
                        <button class="btn btn-primary btn-sm shadow-sm ripple" type="button" id="openModalEstoque">
                            <i class="fa fa-plus mr-0"></i>
                        </button>
                    </div>
                    <div class="tile-body">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">Tamanho</th>
                                <th scope="col">Cor</th>
                                <th scope="col">Estoque</th>
                                <th scope="col" width="10%" class="text-center">Ação</th>
                            </tr>
                            </thead>
                            <tbody v-if="estoques.length">
                            <tr v-for="estoque in estoques" :key="estoque.id">
                                <td>{{estoque.tamanho.nome}}</td>
                                <td><span :style="{backgroundColor: estoque.cor.codigo ? estoque.cor.codigo : ''}" style="color:white" class="badge">{{estoque.cor.codigo}}</span>
                                    {{estoque.cor.nome}}
                                </td>
                                <td>{{estoque.quantidade}}</td>
                                <td class="text-center">
                                    <button class='btn btn-sm btn-primary shadow-sm ripple'><i class='fas fa-pen mr-0'></i></button>
                                </td>
                            </tr>
                            </tbody>
                            <tbody v-else>
                            <tr>
                                <td colspan="4">Nenhum estoque cadastrado para este produto.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tile-footer"></div>
                </div>
            </div>
        </div>

        <div class="modal animate__animated animate__backInDown" tabindex="-1" role="dialog" id="modalEstoque">
            <div class="modal-dialog">
                <ValidationObserver v-slot="{invalid}">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Controle de Produto</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="" class="row" id="formEstoque" @submit.prevent="saveData()">
                                <div class="form-group col-md-12">
                                    <ValidationProvider name="Tamanho" v-slot="{valid, errors,classes}"
                                                        rules="required">
                                        <label for="tamanho_id">Tamanho</label>
                                        <select name="tamanho_id"
                                                id="tamanho_id"
                                                class="form-control"
                                                :class="classes"
                                                v-model="resource.tamanho_id"
                                                v-if="tamanho.length"
                                        >
                                            <option v-for="t in tamanho" :key="t.id" :value="t.id">
                                                {{ t.apelido }} - {{t.nome}}
                                            </option>
                                        </select>
                                        <div class="form-control text-right" v-else>
                                           <span class="spinner-border spinner-border-sm text-primary" role="status"
                                                 aria-hidden="true"></span>
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                        <span class="invalid-feedback">{{errors[0]}}</span>
                                    </ValidationProvider>
                                </div>

                                <div class="form-group col-md-12">
                                    <ValidationProvider name="Cor" v-slot="{valid, errors,classes}"
                                                        rules="required">
                                        <label for="cor_id">Cor</label>
                                        <select name="cor_id"
                                                id="cor_id"
                                                class="form-control select2"
                                                :class="classes"
                                                v-model="resource.cor_id"
                                                v-if="cor.length"
                                        >
                                            <option v-for="c in cor" :key="c.id" :value="c.id">{{ c.codigo }} - {{c.nome}}</option>
                                        </select>
                                        <div class="form-control text-right" v-else>
                                           <span class="spinner-border spinner-border-sm text-primary" role="status"
                                                 aria-hidden="true"></span>
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                        <span class="invalid-feedback">{{errors[0]}}</span>
                                    </ValidationProvider>
                                </div>

                                <div class="form-group col-md-12">
                                    <ValidationProvider name="Quantidade" v-slot="{valid, errors,classes}"
                                                        rules="required|numeric|min:0|max:9999">
                                        <label for="cor_id">Quantidade</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                <i class="fas fa-tshirt"></i>
                                            </span>
                                            </div>
                                            <input class="form-control"
                                                   type="number"
                                                   placeholder="0"
                                                   name="quantidade"
                                                   v-model.number="resource.quantidade"
                                                   :class="classes"
                                            >
                                            <span class="invalid-feedback">{{errors[0]}}</span>
                                        </div>
                                    </ValidationProvider>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="submit" class="btn btn-primary" form="formEstoque" :disabled="invalid"><i class="fas fa-save"></i> Salvar</button>
                        </div>
                    </div>
                </ValidationObserver>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "ProdutoTamanhoCorEstoqueComponent",
        props: ['produtoId'],
        computed: {
            estoques: {
                get() {
                    return this.$store.getters["estoque/estoques"];
                },
                set(value) {
                    this.$store.commit('estoque/push', value);
                }
            },
        },
        data() {
            return {
                resource: {
                    produto_id: null,
                    cor_id: null,
                    tamanho_id: null,
                    quantidade: null,
                },
                cor: [],
                tamanho: [],
            }
        },
        methods: {
            getTamanho() {
                return this.$http.get('/tamanho').then(response => {
                    this.tamanho = response.data.data;
                }).catch(err => this.showFormErrors(err));
            },
            getCor() {
                return this.$http.get('/cor').then(response => {
                    this.cor = response.data.data;
                }).catch(err => this.showFormErrors(err))
            },
            saveData() {
                this.resource.produto_id = this.produtoId;
                this.$http.post('/produto/estoque', this.resource)
                    .then((response) => {
                        window.iziToast.show({
                            title: 'Sucesso!',
                            message: 'O registro foi atualizado com sucesso!',
                            color: 'green',
                            position: 'topCenter',
                        });
                        response.data.cor = {nome: window.$('#cor_id option:selected').text()}
                        response.data.tamanho = {nome: window.$('#tamanho_id option:selected').text()}
                        this.estoques = response.data;
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
                    });
            },
        },
        mounted() {
            window.k = this
            this.getTamanho()
            this.getCor()
            window.$('#openModalEstoque').click(() => {
                this.resource.produto_id = null;
                this.resource.cor_id = null;
                this.resource.tamanho_id = null;
                this.resource.quantidade = null;
                window.$('#modalEstoque').modal('show')
            });
            this.$store.dispatch('estoque/getData');
        }
    }
</script>

<style scoped>

</style>