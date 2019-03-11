<template>
    <div class="final-page">
        <LanguageButtons @changeLocale="changeLocale"></LanguageButtons>
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
    import LanguageButtons from './LanguageButtons';
    import LanguageMixin from '../mixins/LanguageMixin';

    export default {
        components: { 
            LanguageButtons
        },

        mixins:[LanguageMixin],

        computed: {
            ...mapGetters ([
                'failedRequests'
            ])
        },
        data(){
            return {
                email: ""
            }
        },
        beforeRouteLeave (to, from, next) {
            next(false);
        }
    }
</script>