<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
    </section>
</template>

<script>
export default {
    props: {
        failedRequests: {
            type: Array
        }
    }    
}
</script>