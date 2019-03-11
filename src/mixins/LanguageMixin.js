export default {
    methods:{
        changeLocale(language) {
            this.$store.dispatch('changeLocale', language).then(()=>{
                this.$i18n.locale = language
            })
        },    
    }

}