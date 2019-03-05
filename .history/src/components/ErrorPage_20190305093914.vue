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
    props: {
        failedRequests: Array,
    },

    computed: {
        failedRequests() {
            return this.$store.failedRequests
        }
    }

}
</script>