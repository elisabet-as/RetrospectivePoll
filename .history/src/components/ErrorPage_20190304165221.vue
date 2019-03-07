<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
        <ul v-for="failedRequest in failedRequests" :key="failedRequest.index">
            <li>{{failedRequest.question}}</li>
        </ul>
    </section>
</template>

<script>
export default {
    props: ['failedRequests']

    }
</script>