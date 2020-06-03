<template>
    <div class="widget-small warning coloured-icon">
        <i class="icon fas fa-file fa-3x shadow-sm animate__animated animate__fadeIn"></i>
        <div class="info">
            <h4>Pedidos</h4>
            <p><b>{{tweeningValue}}</b></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PedidoWidgetCount",
        props: {
            value: {
                type: Number,
                required: true
            }
        },
        data: function () {
            return {
                tweeningValue: 0
            }
        },
        watch: {
            value: function (newValue, oldValue) {
                this.tween(oldValue, newValue)
            }
        },
        mounted: function () {
            this.tween(0, this.value)
        },
        methods: {
            tween: function (startValue, endValue) {
                var vm = this

                function animate() {
                    if (window.TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }

                new window.TWEEN.Tween({tweeningValue: startValue})
                    .to({tweeningValue: endValue}, 1500)
                    .onUpdate(function () {
                        vm.tweeningValue = this._object.tweeningValue.toFixed(0)
                    })
                    .start()
                animate()
            }
        }
    }
</script>

<style scoped>

</style>