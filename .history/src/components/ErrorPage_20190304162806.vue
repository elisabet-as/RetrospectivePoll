<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
        <ul :key="index" v-for="failedRequest in failedRequests">
            <li>{{failedRequest}}</li>
        </ul>
    </section>
</template>

<script>
export default {
    props: {
        failedRequests: Array,
    }
}
</script>