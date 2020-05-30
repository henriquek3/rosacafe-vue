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
                <a class="app-menu__item" href="/dashboard"><i
                        class="app-menu__icon fas fa-tachometer-alt"></i><span
                        class="app-menu__label">Dashboard</span></a>
            </li>
            <li class="treeview cadastro" id="ui-elements">
                <a class="app-menu__item" href="#" data-toggle="treeview">
                    <i class="app-menu__icon far fa-folder"></i>
                    <span class="app-menu__label">Cadastros</span>
                    <i class="treeview-indicator fa fa-angle-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li>
                        <a class="treeview-item" href="/cadastro/tamanho">
                            <i class="icon fas fa-ruler"></i>
                            Tamanhos
                        </a>
                    </li>
                    <li>
                        <a class="treeview-item" href="/cadastro/cor">
                            <i class="icon fas fa-fill-drip"></i>
                            Cores
                        </a>
                    </li>
                    <li>
                        <a class="treeview-item" href="/cadastro/grupo">
                            <i class="icon fas fa-cubes"></i>
                            Grupos
                        </a>
                    </li>
                    <li>
                        <a class="treeview-item" href="/cadastro/campanha">
                            <i class="icon fas fa-drafting-compass"></i>
                            Campanhas
                        </a>
                    </li>
                    <li>
                        <a class="treeview-item" href="/cadastro/ciclo">
                            <i class="icon fas fa-people-arrows"></i>
                            Ciclos
                        </a>
                    </li>
                    <li>
                        <a class="treeview-item" href="/cadastro/composicao">
                            <i class="icon fas fa-sliders-h"></i>
                            Composições
                        </a>
                    </li>
                    <li>
                        <a class="treeview-item" href="/cadastro/marca">
                            <i class="icon far fa-copyright"></i>
                            Marcas
                        </a>
                    </li>
                    <li>
                        <a class="treeview-item" href="/cadastro/produto">
                            <i class="icon fas fa-tshirt"></i>
                            Produtos
                        </a>
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