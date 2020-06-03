<template>
    <aside class="app-sidebar">
        <div class="app-sidebar__user">
            <img class="app-sidebar__user-avatar"
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
                <a class="app-menu__item ripple" data-toggle="treeview" href="#">
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
                        <router-link class="treeview-item ripple" exact-active-class="active" to="/cadastro/cor">
                            <i class="icon fas fa-fill-drip"></i>
                            Cores
                        </router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item ripple" exact-active-class="active" to="/cadastro/grupo">
                            <i class="icon fas fa-cubes"></i>
                            Grupos
                        </router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item ripple" exact-active-class="active" to="/cadastro/campanha">
                            <i class="icon fas fa-drafting-compass"></i>
                            Campanhas
                        </router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item ripple" exact-active-class="active" to="/cadastro/ciclo">
                            <i class="icon fas fa-people-arrows"></i>
                            Ciclos
                        </router-link>
                    </li>
                    <li>
                        <router-link class="treeview-item ripple" exact-active-class="active" to="/cadastro/composicao">
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
                        <router-link class="treeview-item ripple" exact-active-class="active" to="/cadastro/produto">
                            <i class="icon fas fa-tshirt"></i>
                            Produtos
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar",
    }
</script>

<style scoped>

</style>