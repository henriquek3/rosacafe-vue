<template>
    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fas fa-ruler"></i> Cadastro de Tamanhos</h1>
                <p> Cadastro e edição dos tamanhos dos produtos, comumente chamado de Guia de Medidas</p>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item">Cadastro</li>
                <li class="breadcrumb-item">
                    <router-link to="/cadastro/tamanho">Tamanhos</router-link>
                </li>
            </ul>
        </div>
        <router-view/>
    </main>
</template>

<script>
    export default {
        name: "TamanhoPage",
    }
</script>

<style scoped>

</style>