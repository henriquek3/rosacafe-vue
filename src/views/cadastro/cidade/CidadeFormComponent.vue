<template>
    <div class="row">
        <div class="col-xl-12">
            <div class="tile">
                <div class="tile-title-w-btn line-head">
                    <template v-if="id">
                        <h3 class="title">Editar cidade</h3>
                        <router-link class="btn btn-primary btn-sm shadow-sm ripple" to="/cadastro/cidade/novo">
                            <i class="fa fa-plus mr-0"></i>
                        </router-link>
                    </template>
                    <h3 class="title" v-else>Novo cidade</h3>
                </div>
                <div class="tile-body">
                    <form action="" class="row" id="formulario" method="post" @submit.prevent="saveData()">
                        <div class="form-group col-xl-6">
                            <label class="control-label">Nome</label>
                            <input class="form-control" maxlength="255" name="nome" placeholder="Nome do cidade"
                                   required v-model="formResource.nome"
                                   type="text" value="">
                        </div>
                        <div class="form-group col-xl-6">
                            <label class="control-label">Código Município</label>
                            <input class="form-control" name="municipio_codigo" placeholder="Código de Município"
                                   required type="text" value="" v-model="formResource.municipio_codigo">
                        </div>
                    </form>
                </div>

                <div class="tile-footer text-center">
                    <button class="btn btn-primary shadow-sm ripple mr-2" form="formulario" type="submit">
                        <i class="fa fa-fw fa-lg fa-check-circle"></i>Salvar
                    </button>
                    <button class="btn btn-danger shadow-sm ripple mr-2" type="submit" v-if="id" @click="deleteData()">
                        <i class="fa fa-fw fa-lg fa-minus-circle"></i>Excluir
                    </button>
                    <router-link class="btn btn-secondary shadow-sm ripple" to="/cadastro/cidade">
                        <i class="fa fa-fw fa-lg fa-times-circle"></i>Cancelar
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CidadeFormComponent",
        props: ['id'],
        computed: {
            formResource: {
                get() {
                    return this.$store.state.forms.formResource;
                },
                set(value) {
                    this.$store.commit('forms/setFormResource', value)
                },
            }
        },
        data() {
            return {}
        },
        methods: {
            saveData() {
                this.$store.dispatch('forms/putResource')
            },
            deleteData() {
                this.$store.dispatch('forms/deleteResource', this.formResource)
            },
            getData() {
                this.resource = this.formData
            },
            clearForm() {
                this.resource.nome = '';
                this.resource.municipio_codigo = '';
            },
        },
        /*mounted() {
            this.clearForm()
            if (this.$route.params.id) {
                this.getData();
            }
        },
        updated() {
            this.clearForm();
            if (this.$route.params.id) {
                this.getData();
            }
        }*/
    }
</script>

<style scoped>

</style>