<template>
    <ul class="pagination justify-content-center animate__animated animate__slower animate__fadeIn">

        <li class="page-item ripple disabled"><a class="page-link" href="#">Anterior</a></li>

        <li class="page-item ripple" :key="n" :class="{active: n === active}" v-for="n in parseInt(total)">
            <a class="page-link" href="#" @click.prevent="navigate(n)">{{n}}</a>
        </li>

        <li class="page-item ripple "><a class="page-link" href="#">Próximo</a></li>
    </ul>
    <!--<div>

        <p>Exibindo página {{active}} de {{total}}, total de {{totalRegistries}} registros.</p>
    </div>-->
</template>

<script>
    export default {
        name: "PaginationTableComponent",
        props: [
            'totalPerPage',
            'resource'
        ],
        data () {
            return {
                active: 1
            }
        },
        computed: {
            registries() {
                return this.$store.state.getList
            },
            total() {
                return this.registries.last_page || 0
            },
            totalRegistries() {
                return this.registries.total || 0
            }
        },
        methods: {
            navigate: function (n) {
                this.active = n
                let config = {
                    resource: this.resource,
                    limit: this.totalPerPage,
                    page: n
                }
                this.$store.dispatch('getRegistries', config)
            }
        },
        created() {
            this.$store.dispatch('getRegistries', {resource: this.resource, limit: this.totalPerPage})
        }
    }
</script>

<style scoped>

</style>