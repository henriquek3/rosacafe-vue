import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index';
import DashboardPage from "../views/DashboardPage";
import DefaultRouteBlankComponent from "../views/DefaultRouteBlankComponent";
import TamanhoPage from "../views/cadastro/tamanho/TamanhoPage";
import TamanhoTableComponent from "../views/cadastro/tamanho/TamanhoTableComponent";
import TamanhoFormComponent from "../views/cadastro/tamanho/TamanhoFormComponent";
import NotFoundPage from "../views/NotFoundPage";
import LoginPage from "../views/auth/LoginPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: DashboardPage,
        meta: {auth: true},
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardPage,
        meta: {auth: true},
    },
    {
        path: '/cadastro',
        props: true,
        component: DefaultRouteBlankComponent,
        children: [
            {
                path: 'tamanho',
                component: TamanhoPage,
                props: true,
                meta: {auth: true},
                children: [
                    {
                        path: '',
                        props: true,
                        component: TamanhoTableComponent,
                        meta: {auth: true},
                    },
                    {
                        path: 'novo',
                        component: TamanhoFormComponent,
                        meta: {auth: true},
                    },
                    {
                        path: ':id',
                        props: true,
                        component: TamanhoFormComponent,
                        meta: {auth: true},
                    },
                ]
            },
        ],
        meta: {auth: true},
    },
    {
        path: '/about',
        name: 'About',
        meta: {auth: true},
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        component: LoginPage,
        name: 'auth.login',
        meta: {auth: false},
    },
    {
        path: '*',
        component: NotFoundPage,
        meta: {auth: true},
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    !store.state.auth.check && to.meta.auth ? router.push({name: 'auth.login'}) : next();
});

export default router
