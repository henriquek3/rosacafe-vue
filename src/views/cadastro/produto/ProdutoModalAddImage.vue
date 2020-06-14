<template>
    <div class="modal animate__animated animate__backInDown animate__faster"
         tabindex="-1"
         role="dialog"
         id="modal-add-imagem"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="far fa-file-image fa-fw fa-lg"></i> Adicionar Imagem
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="formAddImagem" name="formAddImagem" class="row" ref="form" @submit.prevent="sendRequest">
                        <div class="form-group col-xl-12">
                            <label class="control-label">Imagem</label>
                            <input class="form-control-file" type="file" name="image" id="file"
                                   accept="image/*">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary pr-4 pl-4" data-dismiss="modal"> Cancelar
                    </button>
                    <button type="submit" form="formAddImagem" class="btn btn-primary"><i
                            class="fas fa-fw fa-lg fa-upload"></i> Fazer Upload
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProdutoModalAddImage",
        props: [
            'produtoId',
            'image',
        ],
        data() {
            return {}
        },
        methods: {
            sendRequest() {
                let resource = new FormData();
                resource.append('image', this.$refs.form.image.files[0], this.$refs.form.image.files[0].fileName);
                resource.append('produto_id', this.produtoId);

                this.$http.post('/produto/imagem', resource, {
                    'accept': 'application/json',
                    'Content-Type': `multipart/form-data;`,
                }).then(response => {
                    this.$emit('addArrayImage', response.data)
                    window.$('.modal').modal('hide');
                    this.$swal({
                        title: "Sucesso!",
                        text: "A foto do produto foi adicionada com sucesso!",
                        icon: "success",
                    });
                }).catch(err => {
                    if (err.response.data.errors) {
                        window.$_app.$refs.form.setErrors(
                            err.response.data.errors
                        );
                    }
                    console.log(err.message)
                    window.iziToast.show({
                        title: 'Atenção!',
                        message: 'Houve um problema para processar sua requisição!',
                        color: 'red',
                        position: 'topCenter',
                        timeout: 10000,
                    });
                })
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>