<template>
    <div class="row">
        <div class="col-md-12">
            <ValidationObserver v-slot="{invalid}">
                <div class="tile">

                    <div class="tile-title-w-btn line-head">
                        <template v-if="id">
                            <h3 class="title">Editar Produto</h3>
                            <button class="btn btn-primary btn-sm shadow-sm ripple" @click="newResource()">
                                <i class="fa fa-plus mr-0"></i>
                            </button>
                        </template>
                        <h3 class="title" v-else>Novo Produto</h3>
                    </div>

                    <div class="tile-body">

                        <form action="" class="row" id="formResource" method="post"
                              @submit.prevent="saveData(resource)">

                            <div class="form-group col-md-6">
                                <ValidationProvider name="Nome" v-slot="{valid, errors,classes}"
                                                    rules="required|min:4|alpha_spaces|max:100">
                                    <label>Nome</label>
                                    <input class="form-control"
                                           name="nome"
                                           :class="classes"
                                           placeholder="Nome da Produto"
                                           v-model="resource.nome"
                                           type="text"
                                    >
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>


                            <div class="form-group col-xl-3">
                                <ValidationProvider name="Marca" v-slot="{valid, errors,classes}"
                                                    rules="required">
                                    <label for="marca_id">Marca</label>
                                    <select name="marca_id"
                                            id="marca_id"
                                            class="form-control"
                                            :class="classes"
                                            v-model="resource.marca_id"
                                    >
                                        <option v-for="m in marca" :key="m.id" :value="m.id">{{m.nome}}</option>
                                    </select>
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-3">
                                <ValidationProvider name="Grupo" v-slot="{valid, errors,classes}"
                                                    rules="required">
                                    <label for="grupo_id">Grupo</label>
                                    <select name="grupo_id"
                                            id="grupo_id"
                                            class="form-control"
                                            :class="classes"
                                            v-model="resource.grupo_id"
                                    >
                                        <option v-for="m in grupo" :key="m.id" :value="m.id">{{m.nome}}</option>
                                    </select>
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-6">
                                <ValidationProvider name="Tamanho" v-slot="{valid, errors,classes}"
                                                    rules="required">
                                    <label for="tamanho_id">Tamanho</label>
                                    <select name="tamanho_id[]"
                                            id="tamanho_id"
                                            class="form-control"
                                            multiple
                                            :class="classes"
                                            v-model="resource.tamanho_id"
                                    >
                                        <option v-for="m in tamanho" :key="m.id" :value="m.id">{{m.nome}}</option>
                                    </select>
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-6">
                                <ValidationProvider name="Cor" v-slot="{valid, errors,classes}"
                                                    rules="required">
                                    <label for="cor_id">Cor</label>
                                    <select name="cor_id[]"
                                            id="cor_id"
                                            class="form-control"
                                            multiple
                                            :class="classes"
                                            v-model="resource.cor_id"
                                    >
                                        <option v-for="m in cor" :key="m.id" :value="m.id">{{m.nome}}</option>
                                    </select>
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-3">
                                <ValidationProvider name="Ciclo" v-slot="{valid, errors,classes}"
                                                    rules="required">
                                    <label for="ciclo_id">Ciclo</label>
                                    <select name="ciclo_id"
                                            id="ciclo_id"
                                            class="form-control"
                                            :class="classes"
                                            v-model="resource.ciclo_id"
                                    >
                                        <option v-for="m in ciclo" :key="m.id" :value="m.id">{{m.nome}}</option>
                                    </select>
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-3">
                                <ValidationProvider name="Composição" v-slot="{valid, errors,classes}"
                                                    rules="required">
                                    <label for="composicao_id">Composição</label>
                                    <select name="composicao_id"
                                            id="composicao_id"
                                            class="form-control"
                                            :class="classes"
                                            v-model="resource.composicao_id"
                                    >
                                        <option v-for="m in composicao" :key="m.id" :value="m.id">{{m.nome}}</option>
                                    </select>
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-3">
                                <ValidationProvider name="Campanha" v-slot="{valid, errors,classes}"
                                                    rules="required">
                                    <label for="campanha_id">Campanha</label>
                                    <select name="campanha_id"
                                            id="campanha_id"
                                            class="form-control"
                                            :class="classes"
                                            v-model="resource.campanha_id"
                                    >
                                        <option v-for="m in campanha" :key="m.id" :value="m.id">{{m.nome}}</option>
                                    </select>
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>

                            <div class="form-group col-md-6" data-title="Stock Keeping Unit" data-toggle="tooltip">
                                <ValidationProvider name="Código" v-slot="{valid, errors,classes}"
                                                    rules="required|min:3|max:10|alpha_num">
                                    <label>Código SKU</label>
                                    <input class="form-control"
                                           name="sku"
                                           placeholder="Código do Produto"
                                           v-model="resource.sku"
                                           :class="classes"
                                           type="text"
                                    >
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-3" data-title="Utilize o ponto ao invés da virgula"
                                 data-toggle="tooptip">
                                <ValidationProvider name="Valor" v-slot="{valid, errors,classes}"
                                                    rules="required">
                                    <label class="control-label" for="valor">Valor</label>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend"><span class="input-group-text">R$</span>
                                            </div>
                                            <input class="form-control"
                                                   id="valor"
                                                   type="text"
                                                   placeholder="0,00"
                                                   name="valor"
                                                   v-model="resource.valor"
                                                   :class="classes"
                                            >
                                            <span class="invalid-feedback">{{errors[0]}}</span>
                                        </div>
                                    </div>
                                </ValidationProvider>
                            </div>

                        </form>
                    </div>

                    <div class="tile-footer text-center">
                        <button class="btn btn-primary shadow-sm ripple mr-2" form="formResource" type="submit"
                                :disabled="invalid">
                            <i class="fa fa-fw fa-lg fa-check-circle"></i>Salvar
                        </button>
                        <button class="btn btn-danger shadow-sm ripple mr-2" type="submit" v-if="id"
                                @click="deleteData(resource)">
                            <i class="fa fa-fw fa-lg fa-minus-circle"></i>Excluir
                        </button>
                        <router-link class="btn btn-secondary shadow-sm ripple" :to="urlCallback">
                            <i class="fa fa-fw fa-lg fa-times-circle"></i>Cancelar
                        </router-link>
                    </div>

                </div>
            </ValidationObserver>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "ProdutoFormComponent",
        props: ['id'],
        computed: {
            resource: {
                get() {
                    return this.$store.getters['forms/getRegistro']
                },
                set(value) {
                    this.$store.commit('forms/setRegistro', value)
                }
            },
            marca() {
                return this.$http.get('/marca').then(response => {
                    return response.data
                })
            },
            grupo() {
                return this.$http.get('/grupo').then(response => {
                    return response.data
                })
            },
            tamanho() {
                return this.$http.get('/tamanho').then(response => {
                    return response.data
                })
            },
            cor() {
                return this.$http.get('/cor').then(response => {
                    return response.data
                })
            },
            ciclo() {
                return this.$http.get('/ciclo').then(response => {
                    return response.data
                })
            },
            composicao() {
                return this.$http.get('/composicao').then(response => {
                    return response.data
                })
            },
            campanha() {
                return this.$http.get('/campanha').then(response => {
                    return response.data
                })
            },
        },
        data() {
            return {
                urlApi: '/produto',
                urlCallback: '/cadastro/produto'
            }
        },
        mounted() {
            this.setUrl(this.urlApi)
            this.setCallbackUrl(this.urlCallback)
            if (this.id) {
                this.getResource().then(res => this.resource = res)
            }
        },
        methods: {
            saveData(payload) {
                if (this.id) {
                    this.requestPut(payload);
                } else {
                    this.requestCreate(payload)
                }
            },
            newResource() {
                this.resetRegistro()
                this.$router.push(`${this.urlCallback}/novo`)
            },
            ...mapActions({
                getResource: 'forms/getSessionStorageRegistro',
                setUrl: 'forms/setUrl',
                setCallbackUrl: 'forms/setCallbackUrl',
                requestCreate: 'forms/requestCreate',
                requestPut: 'forms/requestPut',
                deleteData: 'forms/requestDelete',
                resetRegistro: 'forms/resetRegistro',
            })
        }
    }
</script>

<style scoped>

</style>