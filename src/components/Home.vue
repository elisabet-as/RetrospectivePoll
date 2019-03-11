<template>
    <section class="home-container">
        <LanguageButtons @changeLocale="changeLocale"></LanguageButtons>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <form class="form-email" @submit.prevent="saveEmail">
            <div class="email-container">
                <label class="email-label" for="email">e-mail</label>
                <input class="email-input" type="email" placeholder="e-mail" v-model="email" required>
            </div>
            <input class="access" type="submit" :value="$t('message.buttons.home')">
        </form> 
    </section>
</template>

<script>
    import LanguageButtons from './LanguageButtons';
    import LanguageMixin from '../mixins/LanguageMixin';

    export default {
        components: { 
            LanguageButtons
        },

        mixins:[LanguageMixin],

        data(){
            return {
                email: ""
            }
        },
        methods:{
            saveEmail(){
                this.$store.dispatch('saveEmail',this.email).then(()=>{
                    this.$router.push('/formulario')
                })
            },
        } 
    }
</script>