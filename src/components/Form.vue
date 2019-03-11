<template>
    <div class="container">
        <LanguageButtons @changeLocale="changeLocale"></LanguageButtons>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo-form">
        <form class="form" @submit.prevent="sendResults">
            <component v-bind="{item}" :key="item.name" :is="item.componentName" v-for="item in formElement">
            </component>
            <input class="send-form" type="submit" :value="$t('message.buttons.form')">
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
    import FormRadioGroup from './FormRadioGroup.vue';
    import FormTextarea from './FormTextarea.vue';
    import i18n from '../i18n';
    import LanguageButtons from './LanguageButtons';
    import LanguageMixin from '../mixins/LanguageMixin';

    export default {
        components: { 
            FormRadioGroup,
            FormTextarea,
            LanguageButtons
        },

        mixins:[LanguageMixin],

        data(){
            return {
                formElement: [
                    {
                        question: 'message.form.mood',
                        answer: '',
                        answers: this.arrAnswers(5),
                        name: 'mood',
                        componentName: 'formRadioGroup' ,
                    },
                    {
                        question: 'message.form.month',
                        answer: '',
                        answers: this.arrAnswers(10),
                        name: 'month',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: 'message.form.teamPerformance',
                        answer: '',
                        answers: ['message.response.positive', 'message.response.negative'],
                        name: 'teamPerformance',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: 'message.form.teamMark',
                        answer: '',
                        answers: this.arrAnswers(10),
                        name: 'teamMark',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: 'message.form.personalPerformance',
                        answer: '',
                        answers: ['message.response.positive', 'message.response.negative'],
                        name: 'personalPerformance',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: 'message.form.personalMark',
                        answer: '',
                        answers: this.arrAnswers(10),
                        name: 'personalMark',
                        componentName:'formRadioGroup',
                    },
                    {
                        question: 'message.form.positiveThings',
                        answer: '',
                        name: 'positiveThings',
                        componentName:'formTextarea',
                    },
                    {
                        question: 'message.form.thingsToImprove',
                        answer: '',
                        name: 'thingsToImprove',
                        componentName: 'formTextarea',
                    },
                    {
                        question: 'message.form.ideas',
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
            arrAnswers(length) {
                return Array.from({length}, (v, k) => k + 1);
            },

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
                if(response.status.toString().startsWith("2")){
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
