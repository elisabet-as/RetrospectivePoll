<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
        <ul :failedRequests="failedRequests">
            <li>{{failedRequest}}</li>
        </ul>
    </section>
</template>

<script>
export default {
    props: {
        failedRequests: Array
    }
}
</script>