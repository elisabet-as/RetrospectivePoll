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

        updateFailedRequests(state, failedRequest) {
            return state.commit('updateFailedRequests', failedRequest);
        }
    },
    mutations: {
        saveEmail(state, email) {
            state.email = email;
        },

        updateFailedRequests(state, failedRequest) {
            state.failedRequests.push(failedRequest);
        }
    },
    getters: {
        email(state) {
            return state.email;
        },

        failedRequests(state) {
            return state.failedRequests;
        }
    }
});