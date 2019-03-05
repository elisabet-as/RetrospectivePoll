<template>
    <div class="final-page">
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo l-final">
        <p class="final-text">Error</p>
        <i class="far fa-frown-open emoticon animated heartBeat"></i>
        <ul v-for="failedRequest in failedRequests" :key="failedRequest.i">
            <li>{{failedRequest}}</li>
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