
// const state = {}
// const getters = {}
const actions = {
    initDatatables(context,payload){
        window.$(payload.table).DataTable({
            processing: true,
            serverSide: true,
            ajax: payload.datatableAjaxUrl,
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
                    data.path = payload.$route.path;
                    payload.loadResource(data);
                })
            },
        });
    },
}
// const mutations = {}

export default {
    namespaced: true,
    actions
}