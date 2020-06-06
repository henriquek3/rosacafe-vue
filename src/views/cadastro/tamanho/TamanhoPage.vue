<template>
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fas fa-ruler"></i> Cadastro de Tamanhos</h1>
                <p> Cadastro e edição dos Tamanhos dos produtos</p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item">Tamanhos</li>
                <li class="breadcrumb-item"><a href="#">Ver Todos</a></li>
            </ul>
        </div>
        <transition enter-active-class="animate__animated animate__zoomIn animate__faster"
                    leave-active-class="animate__animated animate__zoomIn animate__faster" mode="out-in">
            <router-view/>
        </transition>
    </main>
</template>

<script>
    export default {
        name: "TamanhoPage",
    }
</script>

<style scoped>

</style>