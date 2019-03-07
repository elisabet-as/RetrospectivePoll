import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        email: null,
    },
    actions: {
        saveEmail(state, email) {
            return state.commit('saveEmail', email);
        },

        saveFailedRequests(state, failedRequests) {
            console.log(failedRequests)
            return state.commit(failedRequests)
        }
    },
    mutations: {
        saveEmail(state, email) {
            state.email = email;
        },
    }
});