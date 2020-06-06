<template>
    <div class="app sidebar-mini">
        <!-- Navbar-->
        <Header v-if="isAuthenticated"></Header>
        <!-- Sidebar menu-->
        <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
        <Sidebar v-if="isAuthenticated"></Sidebar>
        <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
                    leave-active-class="animate__animated animate__fadeOut animate__faster" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Sidebar from './components/template/Sidebar.vue';
    import Header from "./components/template/Header";

    export default {
        name: 'Home',
        components: {
            Sidebar,
            Header
        },
        computed: {
            isAuthenticated() {
                return this.$store.state.login.auth.check;
            }
        },
        mounted() {
            //Activate bootstrip tooltips
            window.$("[data-toggle='tooltip']").tooltip();
            window.$('[data-toggle="popover"]').popover();
        },
        methods: {},
    }
</script>

<style lang="scss">
    @import "./components/sass/app";
</style>
