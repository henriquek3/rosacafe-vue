<template>
    <div class="row">
        <div class="col-md-12">
            <div class="tile">
                <div class="tile-title-w-btn line-head">
                    <h3 class="title">Tamanhos</h3>
                    <!--<a class="btn btn-primary btn-sm shadow-sm ripple" ><i
                        class="fa fa-plus"></i></a>-->
                    <router-link class="btn btn-primary btn-sm ripple" to="/cadastro/tamanho/novo">
                        <i class="fa fa-plus mr-0"></i>
                    </router-link>
                    <!--<div class="btn-group">

                    </div>-->
                </div>
                <div class="tile-body">
                    <form action="" class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fas fa-search"></i></span>
                            </div>
                            <input class="form-control" placeholder="Pesquisar..." type="text">
                            <!--<div class="input-group-append">
                                <button class="btn btn-sm btn-primary">Pesquisar</button>
                            </div>-->
                        </div>
                    </form>
                    <table class="table table-striped table-sm table-responsive-xl">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Apelido</th>
                            <th>Nome</th>
                            <th style="width:10%"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="loanding">
                            <td colspan="4">
                                <div class="text-center">
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr :key="l.id" class="animated fadeIn" v-else v-for="l in lista">
                            <td>{{l.id}}</td>
                            <td>{{l.apelido}}</td>
                            <td>{{l.nome}}</td>
                            <td>
                                <router-link :to="`/cadastro/tamanho/${l.id}`"
                                             class="btn btn-primary btn-sm shadow-sm ripple">
                                    <i class="fas fa-pen"></i>
                                </router-link>
                            </td>
                        </tr>
                        <tr :class="{'table-danger': error}" class="" v-if="!lista.length && !loanding">
                            <td colspan="4">
                                Nenhum Registro encontrado..
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TamanhoTableComponent",
        data: function () {
            return {
                loanding: true,
                error: false,
                lista: []
            }
        },
        mounted() {
            this.$http.get('/tamanho')
                .then(response => {
                    console.log('lista ok')
                    this.lista = response.data
                })
                .catch(() => {
                    this.error = true;
                    //console.error(error.message)
                    window.iziToast.show({
                        title: 'Atenção',
                        message: 'Recurso inacessível neste momento!',
                        color: 'red',
                        timeout: 10000
                    });
                })
                .finally(() => this.loanding = false)
            ;
        }
    }
</script>

<style scoped>

</style>