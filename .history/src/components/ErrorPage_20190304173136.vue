<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
        <div v-if="failedRequests === 'true'">
            {{failedRequests}}
        </div>
    </section>
</template>

<script>
export default {
    props: {
        failedRequests: Array,
    }  
}
</script>