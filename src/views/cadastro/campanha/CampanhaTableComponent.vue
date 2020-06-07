<template>
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-title-w-btn line-head">
                    <h3 class="title">Campanhas</h3>
                    <router-link class="btn btn-primary btn-sm ripple" to="/cadastro/campanha/novo">
                        <i class="fa fa-plus mr-0"></i>
                    </router-link>
                </div>
                <div class="tile-body">
                    <table class="table table-striped" id="table" width="100%">
                        <thead>
                        <tr>
                            <th style="width:7%">#</th>
                            <th>Código</th>
                            <th>Nome</th>
                            <th style="width:10%">Ação</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <td colspan="4">&nbsp;</td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="tile-footer"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "CampanhaTableComponent",
        data: function () {
            return {
                error: false,
                datatableAjaxUrl: 'http://localhost:8000/api/campanha',
                table: '#table',
                columns: [
                    {
                        data: 'codigo', name: 'codigo', defaultContent: '--', className: 'text-white',
                        render: {},
                        createdCell: function (td, cellData) {
                            let imgUrl = 'brand.jpg'
                            if (cellData) {
                                imgUrl = cellData
                            }
                            return `<img src="/storage/campanha/${imgUrl}"
                                         alt="Campanha"
                                         style="max-height: 64px;max-width: 64px;">`
                        },
                    },
                    {data: 'nome', name: 'nome', defaultContent: '--', className: ''},
                    {data: 'data_inicio', name: 'data_inicio', defaultContent: '--', className: ''},
                    {data: 'data_fim', name: 'data_fim', defaultContent: '--', className: ''},
                ]
            }
        },
        computed: {},
        mounted() {
            this.initDatatable(this)
            this.resetRegistro()
        },
        methods: {
            ...mapActions({
                resetRegistro: 'forms/resetRegistro',
                loadResource: 'forms/loadResource',
                initDatatable: 'datatables/initDatatables',
            }),
        },
    }
</script>

<style scoped>

</style>