<template>
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fas fa-map-marker-alt"></i> Cadastro de Cidades</h1>
                <p> Cadastro e edição das Cidades</p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item">Cidades</li>
                <li class="breadcrumb-item"><a href="#">Ver Todas</a></li>
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
        name: "CidadePage"
    }
</script>

<style scoped>

</style>