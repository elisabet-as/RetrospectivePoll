import Home from './components/Home.vue';
import Form from './components/Form.vue';
import ThanksPage from './components/ThanksPage.vue';
import ErrorPage from './components/ErrorPage.vue';
import { store } from './store/store';

export const routes = [
    {   beforeEnter:((to, from, next) => {
            if(store.state.email == null | "") {
                next();
            } else {
                next(false);
            }
        }),
        path: '/', component: Home, name: 'homePage'
    },
    {
        beforeEnter:((to, from, next) => {
            if(store.state.email !== null | "") {
                next();
            } else {
                next(false);
            }
        }),
        path: '/formulario', component: Form, name: 'formPage'
    },
    {path: '/formulario/gracias', component: ThanksPage, name: 'thanks'},
    {path: '/formulario/error', component: ErrorPage, name: 'error', props: (route) => ({ query: failedRequests })}
]