<template>
    <article>
        <div class="row">
            <div class="col-md-12">
                <ValidationObserver ref="form" v-slot="{invalid}">
                    <div class="tile">

                        <div class="tile-title-w-btn line-head">
                            <template v-if="id">
                                <h3 class="title">Editar Produto</h3>
                                <div class="btn-group">
                                    <button class="btn btn-primary btn-sm shadow-sm ripple" @click="newResource()">
                                        <i class="fa fa-plus ml-1"></i>
                                    </button>
                                    <button type="button"
                                            class="btn btn-secondary shadow-sm ripple"
                                            data-toggle="modal"
                                            data-target="#modal-add-imagem"
                                    >
                                        <i class="fas fa-images"></i>
                                    </button>
                                </div>
                            </template>
                            <h3 class="title" v-else>Novo Produto</h3>
                        </div>

                        <div class="tile-body">

                            <form action="" class="row" id="formResource" method="post"
                                  @submit.prevent="saveData()">

                                <div class="form-group col-md-6">
                                    <ValidationProvider name="Nome" v-slot="{valid, errors,classes}"
                                                        rules="required|min:4|alpha_spaces|max:100">
                                        <label>Nome</label>
                                        <input class="form-control"
                                               name="nome"
                                               :class="classes"
                                               placeholder="Nome do Produto"
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

                                <div class="form-group col-xl-3">
                                    <ValidationProvider name="Ciclo" v-slot="{valid, errors,classes}"
                                                        rules="required">
                                        <label for="ciclo_id">Ciclo</label>
                                        <select name="ciclo_id"
                                                id="ciclo_id"
                                                class="form-control"
                                                :class="classes"
                                                v-model="resource.ciclo_id"
                                                v-if="ciclo.length"
                                        >
                                            <option v-for="m in ciclo" :key="m.id" :value="m.id">{{m.nome}}</option>
                                        </select>
                                        <div class="form-control text-right" v-else>
                                        <span class="spinner-border spinner-border-sm text-primary" role="status"
                                              aria-hidden="true"></span>
                                            <span class="sr-only">Loading...</span>
                                        </div>
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
                                                v-if="composicao.length"
                                        >
                                            <option v-for="m in composicao" :key="m.id" :value="m.id">{{m.nome}}</option>
                                        </select>
                                        <div class="form-control text-right" v-else>
                                        <span class="spinner-border spinner-border-sm text-primary" role="status"
                                              aria-hidden="true"></span>
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                        <span class="invalid-feedback">{{errors[0]}}</span>
                                    </ValidationProvider>
                                </div>

                                <div class="form-group col-xl-3">
                                    <ValidationProvider name="Campanha" v-slot="{valid, errors,classes}"
                                                        rules="required">
                                        <label for="campanha_id">Campanha</label>
                                        <select name="campanha_id"
                                                id="campanha_id"
                                                class="form-control select2"
                                                :class="classes"
                                                v-model="resource.campanha_id"
                                                v-if="campanha.length"
                                        >
                                            <option v-for="m in campanha" :key="m.id" :value="m.id">{{m.nome}}</option>
                                        </select>
                                        <div class="form-control text-right" v-else>
                                        <span class="spinner-border spinner-border-sm text-primary" role="status"
                                              aria-hidden="true"></span>
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                        <span class="invalid-feedback">{{errors[0]}}</span>
                                    </ValidationProvider>
                                </div>

                                <div class="form-group col-md-3" data-title="Stock Keeping Unit" data-toggle="tooltip">
                                    <ValidationProvider name="Código" v-slot="{valid, errors, classes}" vid="sku"
                                                        rules="required|min:3">
                                        <label for="sku">Código SKU</label>
                                        <input class="form-control"
                                               name="sku"
                                               id="sku"
                                               placeholder="Código do Produto"
                                               v-model="resource.sku"
                                               :class="classes"
                                               type="text"
                                        >
                                        <span class="invalid-feedback">{{errors[0]}}</span>
                                    </ValidationProvider>
                                </div>

                                <div class="form-group col-xl-3" data-title="Utilize o ponto ao invés da virgula"
                                     data-toggle="tooltip">
                                    <ValidationProvider name="Valor" v-slot="{valid, errors,classes}"
                                                        rules="required">
                                        <label class="control-label" for="valor">Valor</label>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend"><span class="input-group-text">R$</span>
                                                </div>
                                                <money class="form-control"
                                                       id="valor"
                                                       type="text"
                                                       placeholder="0,00"
                                                       name="valor"
                                                       v-model.lazy="resource.valor"
                                                       v-bind="money"
                                                       :class="classes"
                                                ></money>
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
        <ProdutoTamanhoCorEstoqueComponent :produtoId="id"></ProdutoTamanhoCorEstoqueComponent>
        <ProdutoModalAddImage :produtoId="id"></ProdutoModalAddImage>
        <ProdutoImageViewComponent :produtoId="id"></ProdutoImageViewComponent>
    </article>
</template>

<script>
    import {mapActions} from "vuex";
    import ProdutoTamanhoCorEstoqueComponent from "./ProdutoTamanhoCorEstoqueComponent";
    import {Money} from 'v-money'
    import ProdutoModalAddImage from "./ProdutoModalAddImage";
    import ProdutoImageViewComponent from "./ProdutoImageViewComponent";

    export default {
        name: "ProdutoFormComponent",
        components: {
            ProdutoTamanhoCorEstoqueComponent,
            Money,
            ProdutoModalAddImage,
            ProdutoImageViewComponent,
        },
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
        },
        data() {
            return {
                urlApi: '/produto',
                urlCallback: '/cadastro/produto',
                marca: [],
                grupo: [],
                ciclo: [],
                composicao: [],
                campanha: [],
                money: {
                    decimal: ',',
                    thousands: '.',
                    precision: 2,
                    masked: false /* doesn't work with directive */
                }
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
            getMarca() {
                return this.$http.get('/marca').then(response => {
                    this.marca = response.data.data;
                }).catch(err => this.showFormErrors(err))
            },
            getGrupo() {
                return this.$http.get('/grupo').then(response => {
                    this.grupo = response.data.data;
                }).catch(err => this.showFormErrors(err))
            },
            getCiclo() {
                return this.$http.get('/ciclo').then(response => {
                    this.ciclo = response.data.data;
                }).catch(err => this.showFormErrors(err))
            },
            getComposicao() {
                return this.$http.get('/composicao').then(response => {
                    this.composicao = response.data.data;
                }).catch(err => this.showFormErrors(err))
            },
            getCampanha() {
                return this.$http.get('/campanha').then(response => {
                    this.campanha = response.data.data;
                }).catch(err => this.showFormErrors(err))
            },
            saveData() {
                if (this.id) {
                    this.requestPut(this.resource);
                } else {
                    window.$_app = this;
                    this.requestCreate(this.resource)
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
                showFormErrors: 'forms/showFormErrors',
            })
        },
        created() {
            this.getMarca()
            this.getGrupo()
            this.getCiclo()
            this.getComposicao()
            this.getCampanha()
        },
    }
</script>

<style scoped>

</style>