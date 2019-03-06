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
                ],
                API_URL:'',
                failedRequests: [],
            }
        },
        methods: {
            sendResults(){
                let promises = []
                 
                this.formElement.map((element) => {
                    promises.push(this.getRequestPromise(element))    
                })

                Promise.all(promises).then(promisesResult => {
                    if(promisesResult.indexOf(false) != -1) {
                        this.$router.push('/formulario/error')
                    } else {
                        this.$router.push('/formulario/gracias')
                    }
                })
            },

            getRequestPromise(questionObject){
                return axios.post(this.API_URL, this.getFormDataByObject(questionObject)).then(response => {
                    return this.isRequestCorrect(response, questionObject)
                })
            },

            getFormDataByObject(questionObject){
                let formData = new FormData();
                formData.append('question',questionObject.question)
                formData.append('answer',questionObject.answer)
                return formData
            },

            isRequestCorrect(response, questionObject){ 
                if(response.status.toString().startsWith("3")){
                    return true         
                }else{
                    this.updateFailedRequests(questionObject);
                    return false
                }
            },

            updateFailedRequests(questionObject) {
                this.$store.dispatch('updateFailedRequests', questionObject)
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
