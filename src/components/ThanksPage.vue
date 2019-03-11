<template>
    <div class="final-page">
        <languageButtons @changeLocale="changeLocale"></languageButtons>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo l-final">
        <p class="final-text">{{ $t('message.finalPage.success') }}</p>
        <i class="far fa-smile-wink emoticon animated heartBeat"></i>
    </div>
</template>

<script>
    import i18n from '../i18n';
    import languageButtons from './LanguageButtons';
    import LanguageMixin from '../mixins/LanguageMixin';

    export default {
        components: { 
            languageButtons
        },

        mixins:[LanguageMixin],

        data(){
            return {
                email: ""
            }
        },
        beforeRouteLeave (to, from, next) {
            next(false);
        },
    }
</script>