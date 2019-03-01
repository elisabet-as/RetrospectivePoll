<template>
    <div class="final-page">
        <img src="../assets/logo.svg" alt="logo-apeteat" class="logo l-final">
        <p class="final-text">Gracias</p>
        <i class="far fa-smile-wink smile animated heartBeat"></i>
    </div>
</template>

<script>
    export default {
        beforeRouteLeave (to, from, next) {
            next(false);
        }
    }
</script>