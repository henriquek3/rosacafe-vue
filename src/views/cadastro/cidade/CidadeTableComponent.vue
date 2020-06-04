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
                            <div class="input-group" data-toggle="tooltip" data-placement="top" title=""
                                 data-original-title="Digite para pesquisar">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                                </div>
                                <input class="form-control" placeholder="Pesquisar..." type="text"
                                       @input="myInfo($event.target.value)">
                                <!--<div class="input-group-append">
                                    <button class="btn btn-sm btn-primary">Pesquisar</button>
                                </div>-->
                            </div>
                        </div>
                        <div class="form-group col-md-2" data-toggle="tooltip" data-placement="top" title=""
                             data-original-title="Registros por página">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-list-ol"></i></span>
                                </div>
                                <select name="per_page" id="per_page" class="form-control"
                                        @change="getDataTable(1, $event.target.value)">
                                    <option value="5" selected>5</option>
                                    <option value="15">15</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                            <caption>Mostrando {{dataTable.from}} até {{dataTable.to}} de
                                {{dataTable.total}} registros
                            </caption>
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
                            <tr :key="resource.id" class="animated fadeIn" v-else v-for="resource in dataTable.data">
                                <td>{{resource.id}}</td>
                                <td>{{resource.nome}}</td>
                                <td>{{resource.estado.nome}}</td>
                                <td>
                                    <router-link :to="`/cadastro/cidade/${resource.id}`"
                                                 class="btn btn-primary btn-sm shadow-sm ripple">
                                        <i class="fas fa-pen"></i>
                                    </router-link>
                                </td>
                            </tr>
                            <tr :class="{'table-danger': error}" class="" v-if="!dataTable.data.length && !loanding">
                                <td colspan="4">
                                    Nenhum Registro encontrado..
                                </td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colspan="4">&nbsp;</td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div class="tile-footer">
                    <pagination class="animate__animated animate__slower animate__fadeIn" :data="dataTable"
                                @pagination-change-page="getDataTable" :limit="5" :align="'center'">
                        <span slot="prev-nav"><i class="fas fa-angle-left mr-1"></i> Anterior</span>
                        <span slot="next-nav">Próximo <i class="fas fa-angle-right ml-1"></i></span>
                    </pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CidadeTableComponent",
        components: {
            pagination: require('laravel-vue-pagination')
        },
        data: function () {
            return {
                loanding: true,
                error: false,
                dataTable: {data: []},
                payload: {
                    resource: 'cidade',
                    with: 'estado'
                }
            }
        },
        computed: {},
        mounted() {
            this.getDataTable();
        },
        methods: {
            myInfo(value) {
                if (value.length > 0) {
                    this.getDataTable(1, 5, value)
                }
            },
            getDataTable(page = 1, limit = 5, search = '') {
                this.loanding = true;
                const url = '/' + this.payload.resource + '?'
                    + 'page=' + page
                    + '&with=' + this.payload.with
                    + '&limit=' + limit
                    + '&search=' + search
                ;

                this.$http.get(url)
                    .then(response => {
                        this.dataTable = response.data
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
                ;
            }
        },
    }
</script>

<style scoped>

</style>