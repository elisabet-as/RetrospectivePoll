<template>
    <section class="home-container">
        <div class="languages-container">
            <button class="language" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" />
                {{entry.title}}
            </button>
        </div>
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
        methods:{
            saveEmail(){
                this.$store.dispatch('saveEmail',this.email).then(()=>{
                    this.$router.push('/formulario')
                })
            },
            changeLocale(language) {
                this.$store.dispatch('changeLocale', language)
            }
        } 
    }
</script>