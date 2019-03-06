import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        email: null,
        failedRequests: [],
    },
    actions: {
        saveEmail(state, email) {
            return state.commit('saveEmail', email);
        },

        saveFailedRequests(state, failedRequests) {
            return state.commit('saveFailedRequests', failedRequests);
        }
    },
    mutations: {
        saveEmail(state, email) {
            state.email = email;
        },

        saveFailedRequests(state, failedRequests) {
            state.failedRequests = failedRequests;
        }
    },
    getters: {
        saveEmail(state) {
            return state.email;
        },

        saveFailedRequests(state) {
            return state.failedRequests;
        }
    }
});