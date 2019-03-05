<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
        <div>
            {{ failedRequests }}
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        failedRequests() {
            return this.$store.state.failedRequests
        }
    }

}
</script>