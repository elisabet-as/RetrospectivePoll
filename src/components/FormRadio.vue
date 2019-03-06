<template>
        <div class="only-radio">
            <label :for="`${item.name}${answerLabel}`">{{ answerLabel }}</label>
            <input type="radio" v-model="item.answer" :value="answerLabel" :name="item.name" :id="`${item.name}${answerLabel}`" required>
        </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
            },
            answerLabel: {
                type: String,
            },
            index: {
                type: Number,
            }
        },
    }
</script>