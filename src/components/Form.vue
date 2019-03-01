<template>
    <div class="container">
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo-form">
        <form class="form" @submit.prevent="sendResults">
            <component v-bind="{item}" :key="item.name" :is="item.componentName" v-for="item in formElement">
            </component>
            <input class="send-form" type="submit">
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import formRadioGroup from './FormRadioGroup.vue';
    import formTextarea from './FormTextarea.vue';
//Este array es creado para hacer el post de las preguntas.
    let arrAnswers = []; 

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
                        answer: '',
                        answers: ['1', '2', '3', '4', '5'],
                        name: 'mood',
                        componentName: 'formRadioGroup' ,
                    },
                    {
                        question: '¿Cómo crees que ha ido el mes?',
                        answer: '',
                        answers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                        name: 'month',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: '¿Crees que el rendimiento del equipo ha sido el adecuado?',
                        answer: '',
                        answers: ['Sí', 'No'],
                        name: 'teamPerformance',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: 'Pon una nota al equipo:',
                        answer: '',
                        answers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                        name: 'teamNote',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: '¿Crees que tu rendimiento ha sido el adecuado?',
                        answer: '',
                        answers: ['Sí', 'No'],
                        name: 'personalPerformance',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: 'Ponte una nota a ti mism@:',
                        answer: '',
                        answers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                        name: 'personalNote',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: '¿Qué cosas (positivas) destacarías este último mes? (personal o equipo)',
                        answer: '',
                        name: 'positiveThings',
                        componentName:'formTextarea',
                    },
                    {
                        question: '¿Qué cosas crees que habría que mejorar para el siguiente mes? (personal o equipo)',
                        answer: '',
                        name: 'thingsToImprove',
                        componentName: 'formTextarea',
                    },
                    {
                        question: '¿Ideas que se te ocurran para el siguiente mes?',
                        answer: '',
                        name: 'ideas',
                        componentName:'formTextarea',
                    }
                ]
            }
        },
        methods:{
            sendResults(){
                this.formElement.map((element) => {
                    const answers = {
                        question: element.question,
                        answer: element.answer,
                    }
                    arrAnswers.push(answers);
                });

                arrAnswers.map((answerObject)=>{
                    axios.post('http://www.felixoficina.com/retrospoll/poll.php', answerObject.question, answerObject.answer)
                    .then(response => {
                        if(response.status.toString().startsWith("2")) {
                            this.$router.push('/formulario/gracias')
                        } else {
                            this.$router.push('/formulario/error')
                        }
                    }); 
                }) 
            }
        },
        beforeRouteLeave (to, from, next) {
            if (this.sendResults) {
                next();
            } else {
                next(false);
            }
        },
    }   
</script>
