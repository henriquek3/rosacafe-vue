<template>
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fas fa-tachometer-alt"></i> Dashboard</h1>
                <p>Informações estatísticas sobre a gestao dos pedidos</p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fas fa-home fa-lg"></i></li>
                <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <ClienteWidgetCount v-bind:value="dashboard.cliente"></ClienteWidgetCount>
            </div>
            <div class="col-md-6 col-lg-3">
                <CampanhaWidgetCount v-bind:value="dashboard.campanha"></CampanhaWidgetCount>
            </div>
            <div class="col-md-6 col-lg-3">
                <PedidoWidgetCount v-bind:value="dashboard.pedido"></PedidoWidgetCount>
            </div>
            <div class="col-md-6 col-lg-3">
                <ProdutoWidgetCount v-bind:value="dashboard.produto"></ProdutoWidgetCount>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="tile">
                    <h3 class="tile-title">Gráfico de Exemplo</h3>
                    <div class="embed-responsive embed-responsive-16by9">
                        <BarChartExample class="embed-responsive-item"></BarChartExample>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="tile">
                    <h3 class="tile-title">Gráfico de Exemplo</h3>
                    <div class="embed-responsive embed-responsive-16by9">
                        <LineChartExample class="embed-responsive-item"></LineChartExample>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import BarChartExample from "../components/chart/BarChartExample";
    import LineChartExample from "../components/chart/LineChartExample";
    import ClienteWidgetCount from "../components/dashboard/widget/ClienteWidgetCount";
    import CampanhaWidgetCount from "../components/dashboard/widget/CampanhaWidgetCount";
    import PedidoWidgetCount from "../components/dashboard/widget/PedidoWidgetCount";
    import ProdutoWidgetCount from "../components/dashboard/widget/ProdutoWidgetCount";
    export default {
        name: "DashboardPage",
        components: {
            BarChartExample,
            LineChartExample,
            ClienteWidgetCount,
            CampanhaWidgetCount,
            PedidoWidgetCount,
            ProdutoWidgetCount
        },
        data() {
            return {
                dashboard: {
                    cliente: 0,
                    campanha: 0,
                    pedido: 0,
                    produto: 0,
                }
            }
        },
        computed: {},
        methods: {
            getData() {
                return this.$http.get('/dashboard').then(response => {
                    this.dashboard = response.data;
                    // this.dashboard.cliente = response.data.cliente;
                    // this.dashboard.campanha = response.data.campanha;
                    // this.dashboard.pedido = response.data.pedido;
                    // this.dashboard.produto = response.data.produto;
                });
            },
        },
        mounted() {
            this.getData();
            if (this.$route.name === 'Welcome') {
                window.iziToast.show({
                    title: 'Bem vindo!',
                    message: '',
                    color: 'blue',
                });
            }
        }
    }
</script>

<style scoped>

</style>