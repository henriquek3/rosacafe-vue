<template>
    <div class="row">
        <div class="col-xl-12">
            <div class="tile">
                <div class="tile-title-w-btn line-head">
                    <template v-if="id">
                        <h3 class="title">Editar cidade</h3>
                        <router-link class="btn btn-primary btn-sm shadow-sm ripple" to="/cadastro/cidade/novo">
                            <i class="fa fa-plus mr-0"></i>
                        </router-link>
                    </template>
                    <h3 class="title" v-else>Novo cidade</h3>
                </div>
                <div class="tile-body">
                    <form action="" class="row" id="formResource" method="post">
                        <div class="form-group col-xl-6">
                            <label class="control-label">Nome</label>
                            <input class="form-control" maxlength="255" name="nome" placeholder="Nome do cidade"
                                   required
                                   type="text" value="">
                        </div>
                        <div class="form-group col-xl-6">
                            <label class="control-label">Apelido</label>
                            <input class="form-control" maxlength="10" name="apelido" placeholder="Apelido do cidade"
                                   required
                                   type="text" value="">
                        </div>
                    </form>
                </div>

                <div class="tile-footer text-center">
                    <button class="btn btn-primary shadow-sm ripple mr-2" form="formResource" type="submit"><i
                            class="fa fa-fw fa-lg fa-check-circle"></i>Salvar
                    </button>
                    <button class="btn btn-danger shadow-sm ripple mr-2" type="submit" v-if="id">
                        <i class="fa fa-fw fa-lg fa-minus-circle"></i>Excluir
                    </button>
                    <router-link class="btn btn-secondary shadow-sm ripple" to="/cadastro/cidade">
                        <i class="fa fa-fw fa-lg fa-times-circle"></i>Cancelar
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CidadeFormComponent",
        props: ['id']
    }
</script>

<style scoped>

</style>