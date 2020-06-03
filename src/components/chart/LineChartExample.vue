<script>
    import {Line} from 'vue-chartjs'

    export default {
        name: "LineChartExample",
        extends: Line,
        data() {
            return {
                chartdata: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#6574cd',
                            data: [40, 39, 10, 40, 39, 80, 40]
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