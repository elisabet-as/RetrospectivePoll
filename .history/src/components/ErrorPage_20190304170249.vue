<template>
    <section>
        <router-view :failedRequests="failedRequests">
        </router-view>
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo">
        <p>Error</p>
        
                    <div v-for="failedRequest in failedRequests">
                {{failedRequest}}
            </div>

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