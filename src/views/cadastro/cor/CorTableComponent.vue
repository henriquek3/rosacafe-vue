<template>
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-title-w-btn line-head">
                    <h3 class="title">Cores</h3>
                    <router-link class="btn btn-primary btn-sm ripple" to="/cadastro/cor/novo">
                        <i class="fa fa-plus mr-0"></i>
                    </router-link>
                </div>
                <div class="tile-body">
                    <table class="table table-striped" id="table" width="100%">
                        <thead>
                        <tr>
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
        name: "CorTableComponent",
        data() {
            return {
                datatableAjaxUrl: 'http://localhost:8000/api/cor',
                table: '#table',
                columns: [
                    {
                        data: 'codigo', name: 'codigo', defaultContent: '--', className: 'text-white',
                        createdCell: function (td, cellData) {
                            window.$(td).css('backgroundColor', cellData)
                        },
                    },
                    {data: 'nome', name: 'nome', defaultContent: '--', className: 'text-capitalize'},
                ]
            }
        },
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