<template>
    <div class="app sidebar-mini">
        <!-- Navbar-->
        <Header v-if="isAuthenticated"></Header>
        <!-- Sidebar menu-->
        <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
        <Sidebar v-if="isAuthenticated"></Sidebar>
        <router-view/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Sidebar from '@/components/template/Sidebar.vue';
    import Header from "./components/template/Header";

    export default {
        name: 'Home',
        components: {
            Sidebar,
            Header
        },
        computed: {
            isAuthenticated() {
                return this.$store.state.auth.check;
            }
        },
        mounted() {
            require('vali-admin/docs/js/main');
        }
    }
</script>

<style lang="scss">
    @import "./components/sass/app";
</style>
