<template>
        <div class="only-radio">
            <label for="">{{ answerLabel }}</label>
            <input type="radio" :name="name" :id="answerValue" required>
        </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
            }, 
            answerValue: {
                type: Number,
            },
            answerLabel: {
                type: String,
            },
        },
    }
</script>