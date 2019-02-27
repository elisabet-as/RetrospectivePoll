<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo-form">
        <form class="form" @submit.prevent="sendResults">
            <component v-bind="{item}" :key="item.name" :is="item.componentName" v-for="item in formElement">
            </component>
            <input class="send-form" type="submit">
        </form>
    </section>
</template>

<script>
    import axios from 'axios';
    import formRadioGroup from './FormRadioGroup.vue';
    import formTextarea from './FormTextarea.vue';
    export default {
        components: { 
            formRadioGroup,
            formTextarea
        },
        data(){
            return {
                formElement: [
                    {
                        question: '¿Qué tal te encuentras?',
                        answers: ['1', '2', '3', '4', '5'],
                        name: 'mood',
                        componentName: 'formRadioGroup' ,
                    },
                    {
                        question: '¿Cómo crees que ha ido el mes?',
                        answers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                        name: 'month',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: '¿Crees que el rendimiento del equipo ha sido el adecuado?',
                        answers: ['Sí', 'No'],
                        name: 'teamPerformance',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: 'Pon una nota al equipo:',
                        answers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                        name: 'teamNote',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: '¿Crees que tu rendimiento ha sido el adecuado?',
                        answers: ['Sí', 'No'],
                        name: 'personalPerformance',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: 'Ponte una nota a ti mism@:',
                        answers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                        name: 'personalNote',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: '¿Qué cosas (positivas) destacarías este último mes? (personal o equipo)',
                        name: 'positiveThings',
                        componentName:'formTextarea',
                    },
                    {
                        question: '¿Qué cosas crees que habría que mejorar para el siguiente mes? (personal o equipo)',
                        name: 'thingsToImprove',
                        componentName: 'formTextarea',
                    },
                    {
                        question: '¿Ideas que se te ocurran para el siguiente mes?',
                        name: 'ideas',
                        componentName:'formTextarea',
                    }
                ]
            }
        },
        methods:{
            sendResults(){
                    
                // axios.post('', {
                    for (var i = 0; i < this.formElement.length; i++) {
                        this.formElement[i].question;
                        this.formElement[i].answers;
                        console.log(this.formElement[i].question);
                        console.log(this.formElement[i].answers);
                    }
                //     question: this.formElement[0].question,
                //      answer: '',
                // })
                // .then(response => {   
                //     if(response) {
                //         this.$router.push('/formulario/gracias')
                //     } else {
                //         this.$router.push('/formulario/error')
                //     }
                // }); 
            }
        },
        beforeRouteLeave (to, from, next) {
            if (sendResults) {
                next();
            } else {
                next(false);
            }
        },
    }   
</script>
