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
                    <table class="table table-striped" id="table">
                        <thead>
                        <tr>
                            <th style="width:7%">#</th>
                            <th>Nome</th>
                            <th>Estado</th>
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
    export default {
        name: "CidadeTableComponent",
        data: function () {
            return {
                error: false,
            }
        },
        computed: {},
        mounted() {
            const _this = this;

            window.$('#table').DataTable({
                processing: true,
                serverSide: true,
                ajax: 'http://localhost:8000/api/cidade?with=estado',
                order: [0, 'asc'],
                columns: [
                    {data: 'id', name: 'id', defaultContent: '--'},
                    {data: 'nome', name: 'nome', defaultContent: '--', className: 'text-capitalize'},
                    {data: 'estado.nome', name: 'estado.nome', className: 'text-center', defaultContent: '--'},
                    {
                        defaultContent: `<button class='btn btn-sm btn-primary ripple'><i class='fas fa-pen mr-0'></i></button>`,
                        className: 'text-center',
                    }
                ],
                language: {
                    "sEmptyTable": "Nenhum registro encontrado",
                    "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                    "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                    "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                    "sInfoPostFix": "",
                    "sInfoThousands": ".",
                    "sLengthMenu": "_MENU_ resultados por página",
                    "sLoadingRecords": "Carregando...",
                    "sProcessing": "Processando...",
                    "sZeroRecords": "Nenhum registro encontrado",
                    "sSearch": "Pesquisar ",
                    "oPaginate": {
                        "sNext": "Próximo",
                        "sPrevious": "Anterior",
                        "sFirst": "Primeiro",
                        "sLast": "Último"
                    },
                    "oAria": {
                        "sSortAscending": ": Ordenar colunas de forma ascendente",
                        "sSortDescending": ": Ordenar colunas de forma descendente"
                    }
                },
                rowCallback: function (row, data) {
                    window.$(row).on('click', 'button', function () {
                        //_this.$router.push(`/cadastro/cidade/${data.id}`);
                        _this.getResourceById(data.id);
                    })
                },
            });
        },
        methods: {
            getResourceById(id) {
                console.log('fn getResourceById')
                const config = {id: id, resource: 'cidade'};
                this.$store.dispatch('getResourceById', config).then(()=>{
                    this.$router.push(`/cadastro/cidade/${id}`)
                });
            }
        },
    }
</script>

<style scoped>

</style>