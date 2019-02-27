<template>
    <div class="textarea-group">
        <p class="question">{{ item.question }}</p> 
        <textarea :name="item.name" :id="item.name" cols="50" rows="8" required></textarea>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
            },
        },
    }
</script>