import {passportConfig} from "../../.env"
import axios from 'axios'

axios.defaults.withCredentials = true

export class AuthService {
    static auth(email, password) {
        return axios.post('http://localhost:8000/oauth/token', {
            username: email,
            password: password,
            grant_type: passportConfig.grantType,
            client_id: passportConfig.clientId,
            client_secret: passportConfig.clientSecret,
            scope: passportConfig.scope
        })
            .then(response => sessionStorage.setItem('token', JSON.stringify(response.data)))
            .then(response => {
                return response;
            })
            ;
    }
}
