<template>
    <div class="radio-group">
        <p class="question">{{ item.question }}</p>
        <div class="radio-row">
            <formRadio :key="index" :item="item" :index="index" :answerLabel="answer" v-for="(answer, index) in item.answers"></formRadio>
        </div>
    </div>
</template>

<script>
    import formRadio from './FormRadio.vue';
    export default {
        components: {
            formRadio,
        },
        props: {
            item: {
                type: Object,
            },
        },
    }
</script>