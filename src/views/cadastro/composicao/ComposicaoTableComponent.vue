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
        name: "ComposicaoTableComponent",
        data: function () {
            return {
                error: false,
                datatableAjaxUrl: 'http://localhost:8000/api/composicao',
                table: '#table',
                columns: [
                    {data: 'nome', name: 'nome', defaultContent: '--', className: 'text-capitalize'},
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