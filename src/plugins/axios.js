import Vue from 'vue';
import axios from 'axios';
import {appUrl} from '../../.env';

axios.defaults.baseURL = appUrl;

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})