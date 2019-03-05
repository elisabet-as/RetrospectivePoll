<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
        <div v-if="failedRequests">
            {{failedRequests.item}}
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