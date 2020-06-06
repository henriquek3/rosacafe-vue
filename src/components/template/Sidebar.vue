<template>
    <aside class="app-sidebar">
        <div class="app-sidebar__user">
            <img class="app-sidebar__user-avatar animate__animated animate__fadeIn"
                 src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg"
                 alt="User Image">
            <div>
                <p class="app-sidebar__user-name">Administrador</p>
                <p class="app-sidebar__user-designation">Administrador</p>
            </div>
        </div>
        <ul class="app-menu">
            <li>
                <router-link class="app-menu__item ripple" exact-active-class="active" to="/dashboard">
                    <i class="app-menu__icon fas fa-tachometer-alt"></i>
                    <span class="app-menu__label">Dashboard</span>
                </router-link>
            </li>
            <li :class="{'is-expanded': $route.fullPath.split('/')[1] === 'cadastro'}" class="treeview"
                id="ui-elements">
                <a class="app-menu__item ripple" data-toggle="treeview" @click.prevent="treeviewToggle()" href="#">
                    <i class="app-menu__icon far fa-folder"></i>
                    <span class="app-menu__label">Cadastros</span>
                    <i class="treeview-indicator fas fa-angle-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li>
                        <router-link active-class="active" class="treeview-item ripple" to="/cadastro/tamanho">
                            <i class="icon fas fa-ruler"></i> Tamanhos
                        </router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item ripple" active-class="active" to="/cadastro/cor">
                            <i class="icon fas fa-fill-drip"></i>
                            Cores
                        </router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item ripple" active-class="active" to="/cadastro/grupo">
                            <i class="icon fas fa-cubes"></i>
                            Grupos
                        </router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item ripple" active-class="active" to="/cadastro/campanha">
                            <i class="icon fas fa-drafting-compass"></i>
                            Campanhas
                        </router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item ripple" active-class="active" to="/cadastro/ciclo">
                            <i class="icon fas fa-people-arrows"></i>
                            Ciclos
                        </router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item ripple" active-class="active" to="/cadastro/composicao">
                            <i class="icon fas fa-sliders-h"></i>
                            Composições
                        </router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item ripple" exact-active-class="active" to="/cadastro/marca">
                            <i class="icon far fa-copyright"></i>
                            Marcas
                        </router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item ripple" active-class="active" to="/cadastro/produto">
                            <i class="icon fas fa-tshirt"></i>
                            Produtos
                        </router-link>
                    </li>
                    <hr class="mt-2 mb-1" style="width: 200px;">
                    <li>
                        <router-link class="treeview-item ripple" active-class="active" to="/cadastro/cidade">
                            <i class="icon fas fa-map-marker-alt"></i>
                            Cidades
                        </router-link>
                    </li>
                </ul>
            </li>
            <hr class="mt-2 mb-1" style="width: 200px;"><!-- Módulo Cliente -->
            <li class="app-menu__item__label">Módulo Cliente</li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar",
        mounted() {
            // Set initial active toggle
            window.$("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

            // Toggle Sidebar
            window.$('[data-toggle="sidebar"]').click(function (event) {
                event.preventDefault();
                window.$('.app').toggleClass('sidenav-toggled');
            });
        },
        methods: {
            // Activate sidebar treeview toggle
            treeviewToggle() {
                if (!window.$("[data-toggle='treeview']").parent().hasClass('is-expanded')) {
                    window.$('.app-menu').find("[data-toggle='treeview']").parent().removeClass('is-expanded');
                }
                window.$("[data-toggle='treeview']").parent().toggleClass('is-expanded');
            },
        },
    }
</script>

<style scoped>

</style>