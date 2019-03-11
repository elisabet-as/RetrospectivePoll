<template>
    <div class="radio-group">
        <p class="question">{{ $t(item.question) }}</p>
        <div class="radio-row">
            <FormRadio :key="index" :item="item" :index="index" :answerLabel="answer" v-for="(answer, index) in item.answers"></FormRadio>
        </div>
    </div>
</template>

<script>
    import FormRadio from './FormRadio.vue';
    export default {
        components: {
            FormRadio,
        },
        props: {
            item: {
                type: Object,
            },
        },
    }
</script>