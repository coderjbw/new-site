<template>
    <div class="wrapper">
        <RouterView />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.wrapper {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom left, #a0c9ff, #f2f5fa);
    background-repeat: no-repeat;
    background-size: 100%, 100%;
    background-attachment: fixed;
    overflow: hidden;
}
</style>
