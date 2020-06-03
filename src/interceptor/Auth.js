const storage = sessionStorage;

let getToken = function () {
    return JSON.parse(storage.getItem('token'));
}

let redirectLogin = function (router) {
    router.push('/login');
}

export default {
    hasToken: function (router) {
        if (!getToken())
            redirectLogin(router)
            ;
    },
    checkAuth: function (router) {
        this.$http.interceptors.push((request, next) => {
            if (getToken()) {
                request.headers.set('Authorization', 'Bearer ' + getToken().access_token);
                next(response => {
                    if (response.status === 0 || response.status === 401)
                        redirectLogin(router)
                        ;

                });
            } else {
                redirectLogin(router);
            }
        });
    }
}