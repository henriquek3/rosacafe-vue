<template>
    <div class="row"><!--add campo busto, cintura e quadril-->
        <div class="col-md-12">
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
                    <form action="" class="row" id="formResource" method="post" @submit.prevent="saveData(resource)">
                        <div class="form-group col-md-6">
                            <label class="control-label">Nome</label>
                            <input class="form-control" maxlength="255" name="nome" placeholder="Nome do tamanho"
                                   required v-model="resource.nome"
                                   type="text" value="">
                        </div>
                        <div class="form-group col-md-6">
                            <label class="control-label">Apelido</label>
                            <input class="form-control" maxlength="10" name="apelido" placeholder="Apelido do Tamanho"
                                   required v-model="resource.apelido"
                                   type="text" value="">
                        </div>
                    </form>
                </div>

                <div class="tile-footer text-center">
                    <button class="btn btn-primary shadow-sm ripple mr-2" form="formResource" type="submit"><i
                            class="fa fa-fw fa-lg fa-check-circle"></i>Salvar
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
            console.log(this.id)
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