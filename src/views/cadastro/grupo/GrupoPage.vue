<template>
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fas fa-cubes"></i> Cadastro de Grupos</h1>
                <p> Cadastro e edição dos Grupos dos produtos</p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item">Cadastro</li>
                <li class="breadcrumb-item">
                    <router-link to="/cadastro/grupo">Grupos</router-link>
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
    export default {
        name: "GrupoPage"
    }
</script>

<style scoped>

</style>