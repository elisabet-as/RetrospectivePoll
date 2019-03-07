<template>
    <section class="home-container">
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <form class="form-email" @submit.prevent="saveEmail">
            <div class="email-container">
                <label class="email-label" for="email">e-mail</label>
                <input class="email-input" type="email" placeholder="e-mail" v-model="email" required>
            </div>
            <input class="access" type="submit" value="Entrar">
        </form> 
    </section>
</template>

<script>
    export default {
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