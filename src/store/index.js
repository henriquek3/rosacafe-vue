import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {passportConfig} from '../../.env'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        login(context, {email, password}) {
            const data = {
                password,
                username: email,
                grant_type: passportConfig.grantType,
                client_id: passportConfig.clientId,
                client_secret: passportConfig.clientSecret,
                scope: passportConfig.scope,
            };
            axios.defaults.withCredentials = true;
            axios.post('http://localhost:8000/oauth/token', data)
                .then(response => {
                    sessionStorage.setItem('token', JSON.stringify(response.data));
                })
                .catch(error => console.log(error))
            ;
        },
    },
    modules: {}
})
