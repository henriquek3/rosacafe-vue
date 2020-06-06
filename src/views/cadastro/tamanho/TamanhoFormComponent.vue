<template>
    <div class="row"><!--add campo busto, cintura e quadril-->
        <div class="col-md-12">
            <ValidationObserver v-slot="{invalid}">
                <div class="tile">
                    <div class="tile-title-w-btn line-head">
                        <template v-if="id">
                            <h3 class="title">Editar Tamanho</h3>
                            <button class="btn btn-primary btn-sm shadow-sm ripple" @click="newResource()">
                                <i class="fa fa-plus mr-0"></i>
                            </button>
                        </template>
                        <h3 class="title" v-else>Novo Tamanho</h3>
                    </div>
                    <div class="tile-body">
                        <form action="" class="row" id="formResource" method="post"
                              @submit.prevent="saveData(resource)">
                            <div class="form-group col-md-6">
                                <ValidationProvider name="Nome" v-slot="{valid, errors, classes}"
                                                    rules="required|min:4|alpha_spaces|max:100">
                                    <label class="control-label">Nome</label>
                                    <input class="form-control" maxlength="255" name="nome"
                                           :class="classes"
                                           placeholder="Nome do tamanho"
                                           required v-model="resource.nome"
                                           type="text" value="">
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>
                            <div class="form-group col-md-6">
                                <ValidationProvider
                                        name="Apelido"
                                        v-slot="{valid, errors, classes}"
                                        rules="required|min:2|alpha_spaces|max:100"
                                >
                                    <label class="control-label">Apelido</label>
                                    <input
                                            class="form-control"
                                            name="apelido"
                                            :class="classes"
                                            placeholder="Apelido do tamanho"
                                            v-model="resource.apelido"
                                            type="text"
                                    >
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>
                            <div class="form-group col-md-4">
                                <ValidationProvider
                                        name="Medida do Busto"
                                        v-slot="{valid, errors, classes}"
                                        rules="required|min:2|numeric"
                                >
                                    <label class="control-label">Medida do Busto</label>
                                    <div class="input-group">
                                        <input
                                                class="form-control"
                                                name="busto"
                                                :class="classes"
                                                placeholder="Medida do Busto"
                                                v-model="resource.busto"
                                                type="text"
                                        >
                                        <div class="input-group-append">
                                            <span class="input-group-text" data-title="Medidas em Centímetros"
                                                  data-toggle="tooltip">cm</span>
                                        </div>
                                        <span class="invalid-feedback">{{errors[0]}}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div class="form-group col-md-4">
                                <ValidationProvider
                                        name="Medida da Cintura"
                                        v-slot="{valid, errors, classes}"
                                        rules="required|min:2|numeric"
                                >
                                    <label class="control-label">Medida da Cintura</label>
                                    <div class="input-group">
                                        <input
                                                class="form-control"
                                                name="cintura"
                                                :class="classes"
                                                placeholder="Medida da Cintura"
                                                v-model="resource.cintura"
                                                type="text"
                                        >
                                        <div class="input-group-append">
                                            <span class="input-group-text" data-title="Medidas em Centímetros"
                                                  data-toggle="tooltip">cm</span>
                                        </div>
                                        <span class="invalid-feedback">{{errors[0]}}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div class="form-group col-md-4">
                                <ValidationProvider
                                        name="Medida do Quadril"
                                        v-slot="{valid, errors, classes}"
                                        rules="required|min:2|numeric"
                                >
                                    <label class="control-label">Medida do Quadril</label>
                                    <div class="input-group">
                                        <input
                                                class="form-control"
                                                name="quadril"
                                                :class="classes"
                                                placeholder="Medida do Quadril"
                                                v-model="resource.quadril"
                                                type="text"
                                        >
                                        <div class="input-group-append">
                                            <span class="input-group-text" data-title="Medidas em Centímetros"
                                                  data-toggle="tooltip">cm</span>
                                        </div>
                                        <span class="invalid-feedback">{{errors[0]}}</span>
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
                        <router-link class="btn btn-secondary shadow-sm ripple" to="/cadastro/tamanho">
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
        name: "TamanhoFormComponent",
        props: ['id'],
        computed: {
            resource: {
                get() {
                    return this.$store.getters['forms/getRegistro']
                },
                set(value) {
                    this.$store.commit('forms/setRegistro', value)
                }
            }
        },
        data() {
            return {
                urlApi: '/tamanho',
                urlCallback: '/cadastro/tamanho'
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
                this.$router.push('/cadastro/tamanho/novo')
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