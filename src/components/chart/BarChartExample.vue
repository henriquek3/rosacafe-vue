<script>
    import {Bar} from 'vue-chartjs'

    export default {
        name: "BarChartExample",
        extends: Bar,
        data() {
            return {
                chartdata: {
                    labels: ["January", "February", "March", "April", "May"],
                    datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: '#f87979',
                            data: [65, 59, 80, 81, 56]
                        },
                        {
                            label: "My Second dataset",
                            backgroundColor: '#798ef8',
                            data: [28, 48, 40, 19, 86]
                        }
                    ]
                },
                options: {responsive: true, maintainAspectRatio: false},
            }
        },
        mounted() {
            this.renderChart(this.chartdata, this.options)
        }
    }
</script>

<style scoped>

</style>