<template>
    <form>
        <label for="email">E-mail</label>
        <input type="email" placeholder="e-mail" v-model="email" @keyup="saveEmail">

        <input type="submit" value="Entrar">
    </form> 

</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    data(){
        return {
            email:''
        }
    },
    methods:{
        saveEmail(){
            //form params
            debugger
            this.$store.dispatch('saveEmail',this.email).then(()=>{
                this.$router.push('/formulario')
            })
        }
    } 
    //mapActions(['saveEmail']),
}
</script>