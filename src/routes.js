import Home from './components/Home.vue';
import Form from './components/Form.vue';
import { store } from './store/store';

export const routes = [
    {path: '/', component: Home, name: 'home'},
    {
        beforeEnter:((to, from, next) => {
            if(store.state.email !== null | "") {
                next();
            } else {
                next(false);
            }
        }),
        path: '/formulario', component: Form, name: 'form'},
]