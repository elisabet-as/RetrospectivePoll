<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
        <ul>
            <li v-for="failedRequest in failedRequests" :key="failedRequest.index">{{failedRequest}}</li>
        </ul>
    </section>
</template>

<script>
export default {
    props: ['failedRequests']

    }
</script>