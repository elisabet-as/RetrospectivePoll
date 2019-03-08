<template>
    <div class="final-page">
        <div class="languages-container">
            <button class="language" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" />
                {{entry.title}}
            </button>
        </div>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo l-final l-error">
        <p class="final-text">{{ $t('message.finalPage.error') }}</p>
        <i class="far fa-frown-open emoticon animated heartBeat"></i>
        <ul class="questions">
            <li v-for="(failedRequest, index) in failedRequests" :key="index">
                <p class="text-questions">{{ failedRequest.question }}</p>
                <p class="text-questions">{{ failedRequest.answer }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import i18n from '../i18n';
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters ([
                'failedRequests'
            ])
        },
        data(){
            return {
                email: "",
                languages: [
                    { flag: 'us', language: 'en-US', title: 'English' },
                    { flag: 'es', language: 'es-ES', title: 'Español' },
                    { flag: 'es', language: 'ca-ES', title: 'Catalán' },
                ]
            }
        },
        methods: {
            changeLocale(language) {
                this.$store.dispatch('changeLocale', language)
            }
        },
        beforeRouteLeave (to, from, next) {
            next(false);
        }
    }
</script>