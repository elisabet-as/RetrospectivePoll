import Vue from 'vue';
import Vuex from 'vuex';
import { SAVE_EMAIL } from './mutation-types';
import { UPDATE_FAILED_REQUESTS } from './mutation-types';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        email: null,
        failedRequests: [],
    },
    actions: {
        saveEmail(state, email) {
            return state.commit('SAVE_EMAIL', email);
        },

        updateFailedRequests(state, failedRequest) {
            return state.commit('UPDATE_FAILED_REQUESTS', failedRequest);
        }
    },
    mutations: {
        [SAVE_EMAIL] (state, email) {
            state.email = email;
        },

        [UPDATE_FAILED_REQUESTS] (state, failedRequest) {
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