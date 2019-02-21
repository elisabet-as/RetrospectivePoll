<template>
    <section class="home-container">
        <div class="logo">Logo</div>
        <form @submit.prevent="saveEmail">
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
                email: null
            }
        },
        methods:{
            saveEmail(){
                this.$store.dispatch('saveEmail',this.email).then(()=>{
                    this.$router.push('/formulario')
                })
            }
        } 
    }
</script>