<template>
    <section>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
        <router-view :failedRequests="failedRequests">
            <div v-for="failedRequest in failedRequests">

            </div>
        </router-view>
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