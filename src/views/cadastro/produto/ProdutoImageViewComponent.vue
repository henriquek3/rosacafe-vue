<template>
    <div class="row">
        <div class="col-md-4 mb-3" v-for="(img, index) of images" :key="img.id">
            <div class="card border-primary shadow h-100">
                <img class="card-img-top"
                     loading="lazy"
                     data-toggle="tooltip"
                     :data-title="img.nome_original"
                     :src="`http://localhost:8000/storage/produto/${img.image}`"
                     :alt="img.nome_original"
                >
                <div class="card-body text-center">
                    <div class="card-title">{{img.nome_original}}</div>
                </div>
                <div class="card-footer text-center">
                    <button class="btn btn-danger shadow-sm ripple mr-2"
                            @click="removeImage(img.id,index)"
                    >
                        <i class=" fa fa-fw fa-lg fa-trash"></i>Excluir
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProdutoImageViewComponent",
        props: [
            'produtoId',
            'image',
        ],
        data() {
            return {
                images: []
            }
        },
        watch: {
            image: 'updateImages'
        },
        methods: {
            getImages() {
                this.$http.get(`produto/imagem/${this.produtoId}`)
                    .then(response => this.images = response.data)
                    .catch(() => {
                        window.iziToast.show({
                            title: 'Atenção!',
                            message: 'Houve um problema para carregar as imagens!',
                            color: 'red',
                            position: 'topCenter',
                            timeout: 10000,
                        });
                    })
                ;
            },
            removeImage(id, index) {
                this.$http.delete(`/produto/imagem/${id}`)
                    .then(() => {
                        this.$delete(this.images, index)
                        window.iziToast.show({
                            title: 'Sucesso!',
                            message: 'Imagem apagada com sucesso!',
                            color: 'green',
                            position: 'topCenter',
                        });
                    })
                    .catch((err) => {
                        console.log(err)
                        window.iziToast.show({
                            title: 'Atenção!',
                            message: 'Houve um problema para carregar as imagens!',
                            color: 'red',
                            position: 'topCenter',
                            timeout: 10000,
                        });
                    })
                ;
            },
            updateImages() {
                this.images.push(this.image)
            },
        },
        mounted() {
            this.getImages()
        }
    }
</script>

<style scoped>

</style>