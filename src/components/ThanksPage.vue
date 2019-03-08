<template>
    <div class="final-page">
        <div class="languages-container">
            <button class="language" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" />
                {{entry.title}}
            </button>
        </div>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo l-final">
        <p class="final-text">{{ $t('message.finalPage.success') }}</p>
        <i class="far fa-smile-wink emoticon animated heartBeat"></i>
    </div>
</template>

<script>
    import i18n from '../i18n';

    export default {
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
        },
    }
</script>