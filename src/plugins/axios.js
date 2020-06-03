import Vue from 'vue';
import axios from 'axios';
import {appUrl} from '../../.env';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: appUrl,
            headers: {
                //'Authorization' : 'Bearer ',
                get: {
                    'Accepts': ['application/json']
                }
            }
        });

        Vue.prototype.$http.interceptors.request.use(request => {
            const token = sessionStorage.getItem('token');
            if (!token) {
                Vue.prototype.$store.commit('unauthenticated');
                return Vue.prototype.$router.push({name: 'auth.login'});
            }
            const accessToken = JSON.parse(token).access_token;
            request.headers.authorization = 'Bearer ' + accessToken
            return request;
        }, error => Promise.reject(error));

        Vue.prototype.$http.interceptors.response.use(response => {
            if (response.status === 0 || response.status === 401) {
                Vue.prototype.$store.commit('unauthenticated');
                Vue.prototype.$router.push({name: 'auth.login'});
            }
            return response;
        }, error => Promise.reject(error));
    }
})