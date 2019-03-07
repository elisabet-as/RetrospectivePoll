<template>
    <div class="final-page">
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo l-final">
        <p class="final-text">Error</p>
        <i class="far fa-frown-open emoticon animated heartBeat"></i>
        <ul class="questions">
            <li v-for="(failedRequest, index) in failedRequests" :key="index">
                <p>{{ failedRequest.question }} {{failedRequest.answer }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            failedRequests() {
                return this.$store.state.failedRequests
            }
        },
        beforeRouteLeave (to, from, next) {
            next(false);
        }
    }
</script>