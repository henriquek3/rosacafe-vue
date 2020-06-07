<template>
    <div class="row">
        <div class="col-md-12">
            <ValidationObserver v-slot="{invalid}">
                <div class="tile">

                    <div class="tile-title-w-btn line-head">
                        <template v-if="id">
                            <h3 class="title">Editar Marca</h3>
                            <button class="btn btn-primary btn-sm shadow-sm ripple" @click="newResource()">
                                <i class="fa fa-plus mr-0"></i>
                            </button>
                        </template>
                        <h3 class="title" v-else>Nova Marca</h3>
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
                                           placeholder="Nome da Marca"
                                           v-model="resource.nome"
                                           type="text"
                                    >
                                    <span class="invalid-feedback">{{errors[0]}}</span>
                                </ValidationProvider>
                            </div>

                            <div class="form-group col-xl-6">
                                <div class="row">
                                    <div class="col-xl-8">
                                        <label class="control-label">Imagem</label>
                                        <input class="form-control-file" type="file" name="image" id="file"
                                               accept="image/*" @change="onFileSelected">
                                    </div>
                                    <div class="col-xl-4" title="Imagem da Marca">
                                        <a :href="`/storage/marca/${resource.image}`" target="_blank">
                                            <img class="img-thumbnail"
                                                 :href="`/storage/marca/${resource.image}`"
                                                 alt="Imagem da Campanha" style="max-height: 100px;">
                                        </a>
                                    </div>
                                </div>
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
        name: "MarcaFormComponent",
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
                urlApi: '/marca',
                urlCallback: '/cadastro/marca',
                selectedFile: null
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
            onFileSelected(event) {
                this.selectedFile = event.target.files[0]
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