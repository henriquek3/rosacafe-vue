<template>
    <main>
        <section class="material-half-bg">
            <div class="cover"></div>
        </section>
        <section class="login-content">
            <div class="logo animate__animated animate__fadeInDown">
                <h1>Rosa Café App</h1>
            </div>
            <div class="login-box animate__animated animate__fadeIn animate__slower">
                <form @submit.prevent="login()" class="login-form" method="post">
                    <h3 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i>Login</h3>
                    <div class="form-group">
                        <label class="control-label">E-Mail</label>
                        <input autofocus class="form-control" name="email" placeholder="Email" required
                               type="email"
                               v-model="user.email">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Senha</label>
                        <input class="form-control" name="password" placeholder="Password" required
                               type="password"
                               v-model="user.password">
                    </div>
                    <div class="form-group">
                        <div class="utility">
                            <div class="animated-checkbox">
                                <label>
                                    <input type="checkbox"><span class="label-text">Ficar Conectado</span>
                                </label>
                            </div>
                            <p class="semibold-text mb-2"><a data-toggle="flip" href="#">Recuperar Senha ?</a></p>
                        </div>
                    </div>
                    <div class="form-group btn-container">
                        <button class="btn btn-primary btn-block ripple shadow-sm"><i
                                class="fa fa-sign-in fa-lg fa-fw"></i>Conectar
                        </button>
                    </div>
                </form>

                <form class="forget-form">
                    <h3 class="login-head"><i class="fa fa-lg fa-fw fa-lock"></i>Recuperar senha ?</h3>
                    <div class="form-group">
                        <label class="control-label">E-Mail</label>
                        <input class="form-control" disabled placeholder="Email" type="email">
                    </div>
                    <div class="form-group btn-container">
                        <button class="btn btn-primary btn-block ripple shadow-sm" disabled><i
                                class="fa fa-unlock fa-lg fa-fw"></i>Resetar Senha
                        </button>
                    </div>
                    <div class="form-group mt-3">
                        <p class="semibold-text mb-0"><a data-toggle="flip" href="#"><i
                                class="fa fa-angle-left fa-fw"></i> Voltar ao Login</a></p>
                    </div>
                </form>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: "LoginPage",
        data() {
            return {
                user: {
                    email: null,
                    password: null,
                    _token: null,
                }
            }
        },
        mounted() {
            this.$store.commit('login/unauthenticated');
            window.$('.login-content [data-toggle="flip"]').click(function () {
                window.$('.login-box').toggleClass('flipped');
                return false;
            });
        },
        methods: {
            login() {
                this.$store.dispatch('login/login', this.user)
                    .then(() => {
                        this.$router.push({name: 'Welcome'});
                    })
                    .catch(error => console.log(error))
                ;
            }
        }
    }
</script>

<style scoped>

</style>