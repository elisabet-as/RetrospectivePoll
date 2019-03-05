<template>
        <div class="only-radio">
            <label :for="item.index">{{ answerLabel }}</label>
            <input type="radio" v-model="item.answer" :value="answerLabel" :name="item.name" :id="item.index" required>
            <p>{{item.i}}</p>
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
        },
    }
</script>