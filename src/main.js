import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/axios'
import 'popper.js'
import iziToast from 'izitoast';
import $ from 'jquery'

window.iziToast = iziToast;
global.$ = $;
require('bootstrap');
require('pace-js/pace.min')

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
