import Vue from 'vue'
import {
    ValidationObserver,
    ValidationProvider,
    extend,
    localize,
    configure
} from "vee-validate";
import * as rules from 'vee-validate/dist/rules';
import pt_BR from 'vee-validate/dist/locale/pt_BR'


Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

localize('pt_BR', pt_BR)


configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid'
    }
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
