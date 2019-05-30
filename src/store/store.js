import Vue from 'vue';
import Vuex from 'vuex';
import { SAVE_EMAIL } from './mutation-types';
import { UPDATE_FAILED_REQUESTS } from './mutation-types';
import { CHANGE_LOCALE } from './mutation-types';
const browserLocale = require('browser-locale')();

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        email: null,
        failedRequests: [],
        locale: browserLocale,
        languages: [
            { flag: 'us', language: 'en-US', title: 'English' },
            { flag: 'es', language: 'es-ES', title: 'Español' },
            { flag: 'es', language: 'ca', title: 'Catalán' },
        ],
    },
    actions: {
        saveEmail(state, email) {
            return state.commit('SAVE_EMAIL', email);
        },

        updateFailedRequests(state, failedRequest) {
            return state.commit('UPDATE_FAILED_REQUESTS', failedRequest);
        },

        changeLocale(state, language) {
            return state.commit('CHANGE_LOCALE', language);
        }
    },
    mutations: {
        [SAVE_EMAIL] (state, email) {
            state.email = email;
        },

        [UPDATE_FAILED_REQUESTS] (state, failedRequest) {
            state.failedRequests.push(failedRequest);
        },

        [CHANGE_LOCALE] (state, language) {
            state.locale = language;
        }
    },
    getters: {
        email(state) {
            return state.email;
        },

        failedRequests(state) {
            return state.failedRequests;
        },

        locale(state) {
            return state.locale;
        },

        languages(state) {
            return state.languages;
        }

    }
});