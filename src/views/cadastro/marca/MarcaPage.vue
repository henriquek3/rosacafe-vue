<template>
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fas fa-fill-drip"></i> Cadastro de Cores</h1>
                <p> Cadastro e edição das Cores dos produtos</p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item">Cadastro</li>
                <li class="breadcrumb-item">
                    <router-link to="/cadastro/cor">Cores</router-link>
                </li>
            </ul>
        </div>
        <transition enter-active-class="animate__animated animate__zoomIn animate__faster"
                    leave-active-class="animate__animated animate__zoomOut animate__faster" mode="out-in">
            <router-view/>
        </transition>
    </main>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "MarcaPage",
        data: function () {
            return {
                error: false,
                datatableAjaxUrl: 'http://localhost:8000/api/cor',
                table: '#table',
                columns: [
                    {
                        data: 'codigo', name: 'codigo', defaultContent: '--', className: 'text-white',
                        render: {},
                        createdCell: function(td, cellData){
                            window.$(td).css('backgroundColor', cellData)
                        },
                    },
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