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
import CidadePage from "../views/cadastro/cidade/CidadePage";
import CidadeTableComponent from "../views/cadastro/cidade/CidadeTableComponent";
import CidadeFormComponent from "../views/cadastro/cidade/CidadeFormComponent";
import CorPage from "../views/cadastro/cor/CorPage";
import CorTableComponent from "../views/cadastro/cor/CorTableComponent";
import CorFormComponent from "../views/cadastro/cor/CorFormComponent";
import CampanhaPage from "../views/cadastro/campanha/CampanhaPage";
import CampanhaTableComponent from "../views/cadastro/campanha/CampanhaTableComponent";
import CampanhaFormComponent from "../views/cadastro/campanha/CampanhaFormComponent";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: DashboardPage,
        meta: {auth: true},
    },
    {
        path: '/welcome',
        name: 'Welcome',
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
        meta: {auth: true},
        children: [
            {
                path: 'cidade',
                component: CidadePage,
                props: true,
                meta: {auth: true},
                children: [
                    {
                        path: '',
                        props: true,
                        name: 'cidade',
                        component: CidadeTableComponent,
                        meta: {auth: true},
                    },
                    {
                        path: 'novo',
                        component: CidadeFormComponent,
                        meta: {auth: true},
                    },
                    {
                        path: ':id',
                        props: true,
                        component: CidadeFormComponent,
                        meta: {auth: true},
                    },
                ]
            },
            {
                path: 'tamanho',
                component: TamanhoPage,
                props: true,
                meta: {auth: true},
                children: [
                    {
                        path: '',
                        props: true,
                        name: 'tamanho',
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
            {
                path: 'cor',
                component: CorPage,
                props: true,
                meta: {auth: true},
                children: [
                    {
                        path: '',
                        props: true,
                        name: 'cor',
                        component: CorTableComponent,
                        meta: {auth: true},
                    },
                    {
                        path: 'novo',
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                    {
                        path: ':id',
                        props: true,
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                ]
            },
            {
                path: 'grupo',
                component: CorPage,
                props: true,
                meta: {auth: true},
                children: [
                    {
                        path: '',
                        props: true,
                        name: 'cor',
                        component: CorTableComponent,
                        meta: {auth: true},
                    },
                    {
                        path: 'novo',
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                    {
                        path: ':id',
                        props: true,
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                ]
            },
            {
                path: 'campanha',
                component: CampanhaPage,
                props: true,
                meta: {auth: true},
                children: [
                    {
                        path: '',
                        props: true,
                        name: 'campanha',
                        component: CampanhaTableComponent,
                        meta: {auth: true},
                    },
                    {
                        path: 'novo',
                        component: CampanhaFormComponent,
                        meta: {auth: true},
                    },
                    {
                        path: ':id',
                        props: true,
                        component: CampanhaFormComponent,
                        meta: {auth: true},
                    },
                ]
            },
            {
                path: 'ciclo',
                component: CorPage,
                props: true,
                meta: {auth: true},
                children: [
                    {
                        path: '',
                        props: true,
                        name: 'cor',
                        component: CorTableComponent,
                        meta: {auth: true},
                    },
                    {
                        path: 'novo',
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                    {
                        path: ':id',
                        props: true,
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                ]
            },
            {
                path: 'composicao',
                component: CorPage,
                props: true,
                meta: {auth: true},
                children: [
                    {
                        path: '',
                        props: true,
                        name: 'cor',
                        component: CorTableComponent,
                        meta: {auth: true},
                    },
                    {
                        path: 'novo',
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                    {
                        path: ':id',
                        props: true,
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                ]
            },
            {
                path: 'marca',
                component: CorPage,
                props: true,
                meta: {auth: true},
                children: [
                    {
                        path: '',
                        props: true,
                        name: 'cor',
                        component: CorTableComponent,
                        meta: {auth: true},
                    },
                    {
                        path: 'novo',
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                    {
                        path: ':id',
                        props: true,
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                ]
            },
            {
                path: 'produto',
                component: CorPage,
                props: true,
                meta: {auth: true},
                children: [
                    {
                        path: '',
                        props: true,
                        name: 'cor',
                        component: CorTableComponent,
                        meta: {auth: true},
                    },
                    {
                        path: 'novo',
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                    {
                        path: ':id',
                        props: true,
                        component: CorFormComponent,
                        meta: {auth: true},
                    },
                ]
            },
        ],
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
    !store.state.login.auth.check && to.meta.auth ? router.push({name: 'auth.login'}) : next();
});

export default router
