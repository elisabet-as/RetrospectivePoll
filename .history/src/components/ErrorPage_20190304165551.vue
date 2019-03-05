<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
        <div v-for="failedRequest in failedRequests">
            {{failedRequest.question}}
        </div>
    </section>
</template>

<script>
export default {
    props: ['failedRequests']

    }
</script>