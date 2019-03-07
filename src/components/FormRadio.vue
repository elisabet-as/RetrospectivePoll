<template>
        <div class="only-radio">
            <label :for="idRadio">{{ answerLabel }}</label>
            <input type="radio" v-model="item.answer" :value="answerLabel" :name="item.name" :id="idRadio" required>
        </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
            },
            answerLabel: {
                type: [String, Number],
            },
            index: {
                type: Number,
            }
        },
        computed: {
            idRadio: function () {
               return this.item.name + this.answerLabel
            } 
        }
    }
</script>