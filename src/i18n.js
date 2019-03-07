import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);


export default new VueI18n({
  locale:'en-US',
  messages:{
    'es-ES': {
      message: {
        form: {
          mood: '¿Qué tal te encuentras?',
          month: '¿Cómo crees que ha ido el mes?',
          teamPerformance: '¿Crees que el rendimiento del equipo ha sido el adecuado?',
          teamNote: 'Pon una nota al equipo:',
          personalPerformance: '¿Crees que tu rendimiento ha sido el adecuado?',
          personalNote: 'Ponte una nota a ti mism@:',
          positiveThings: '¿Qué cosas (positivas) destacarías este último mes? (personal o equipo)',
          thingsToImprove: '¿Qué cosas crees que habría que mejorar para el siguiente mes? (personal o equipo)',
          ideas: '¿Ideas que se te ocurran para el siguiente mes?'
        },
        buttons: {
          home: 'Entrar',
          form: 'Enviar'
        },
        response: 'Sí',
        finalPage: {
          success: 'Gracias',
          error: 'Error'
        }
      }
    },
    'en-US': {
      message: {
        form: {
          mood: 'How do you feel?',
          month: 'How do you think last month was?',
          teamPerformance: 'Do you think the performance of the team has been correct?',
          teamMark: 'Write a mark to the team:',
          personalPerformance: 'Do you think your performance has been adequate?',
          personalMark: 'Your mark was...',
          positiveThings: 'What things would you highlight this last month? (personal or team)',
          thingsToImprove: 'What things do you think should be improved for next month? (personal or team)',
          ideas: 'Any idea to improve for the next month?',
        },
        buttons: {
          home: 'Enter',
          form: 'Send'
        },
        response: 'Yes',
        finalPage: {
          success: 'Thanks',
          error: 'Error'
        }
      },
    }
  }
})