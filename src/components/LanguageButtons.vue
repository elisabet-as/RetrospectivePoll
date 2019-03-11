<template>
    <div class="languages-container_form">
        <button class="language" v-for="language in languages" :key="language.title" @click="changeLocale(language.language)">
            <flag :iso="language.flag" /> 
            {{language.title}}
        </button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters ([
                'languages'
            ])
        },
        methods: {
            changeLocale(language) {
                this.$emit('changeLocale', language)
            }
        }
    }
</script>