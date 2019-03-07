<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
        <div>
            {{ $route.params.failedRequests }}
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