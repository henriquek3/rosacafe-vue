<template>
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-title-w-btn line-head">
                    <h3 class="title">Cidades</h3>
                    <!--<a class="btn btn-primary btn-sm shadow-sm ripple" ><i
                        class="fa fa-plus"></i></a>-->
                    <router-link class="btn btn-primary btn-sm ripple" to="/cadastro/cidade/novo">
                        <i class="fa fa-plus mr-0"></i>
                    </router-link>
                    <!--<div class="btn-group">

                    </div>-->
                </div>
                <div class="tile-body">
                    <form action="" class="row">
                        <div class="form-group col-md-10">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                                </div>
                                <input class="form-control" placeholder="Pesquisar..." type="text">
                                <!--<div class="input-group-append">
                                    <button class="btn btn-sm btn-primary">Pesquisar</button>
                                </div>-->
                            </div>
                        </div>
                        <div class="form-group col-md-2" data-toggle="tooltip" data-placement="top" title=""
                             data-original-title="Registros por página">
                            <select name="per_page" id="per_page" class="form-control">
                                <option value="">5</option>
                                <option value="">15</option>
                                <option value="">25</option>
                                <option value="">50</option>
                            </select>
                        </div>
                    </form>
                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                            <caption>Mostrando 0 até 0 de 0 registros</caption>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Estado</th>
                                <th style="width:10%">Ação</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="loanding">
                                <td colspan="4">
                                    <div class="text-center">
                                        <div class="spinner-border text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr :key="r.id" class="animated fadeIn" v-else v-for="r in cidade">
                                <td>{{r.id}}</td>
                                <td>{{r.nome}}</td>
                                <td>{{r.estado.nome}}</td>
                                <td>
                                    <router-link :to="`/cadastro/cidade/${r.id}`"
                                                 class="btn btn-primary btn-sm shadow-sm ripple">
                                        <i class="fas fa-pen"></i>
                                    </router-link>
                                </td>
                            </tr>
                            <tr :class="{'table-danger': error}" class="" v-if="!cidade.length && !loanding">
                                <td colspan="4">
                                    Nenhum Registro encontrado..
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tile-footer">
                    <PaginationTableComponent totalPerPage="25" resource="cidade"></PaginationTableComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PaginationTableComponent from "../../../components/table/PaginationTableComponent";

    export default {
        name: "CidadeTableComponent",
        components: {
            PaginationTableComponent
        },
        data: function () {
            return {
                loanding: true,
                error: false,
                /*resource: {
                    data: []
                }*/
            }
        },
        computed: {
            cidade () {
                return this.$store.state.getList
            }
        },
        mounted() {
            /*this.$http.get('/cidade')
                .then(response => {
                    this.resource = response.data
                })
                .catch((err) => {
                    this.error = true;
                    console.error(err.message)
                    window.iziToast.show({
                        title: 'Atenção',
                        message: 'Recurso inacessível neste momento!',
                        color: 'red',
                        timeout: 10000
                    });
                })
                .finally(() => this.loanding = false)
            ;*/
            window.$('.bs-component [data-toggle="popover"]').popover();
            window.$('[data-toggle="tooltip"]').tooltip();

        }
    }
</script>

<style scoped>

</style>