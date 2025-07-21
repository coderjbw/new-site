<template>
    <div class="home">
        <!-- 顶部区域 -->
        <introParagraph></introParagraph>
        <chatMessage />
    </div>
</template>

<script setup lang="ts">
import introParagraph from '@/components/IntroParagraph/index.vue';
import chatMessage from '@/components/ChatMessage/index.vue';

</script>

<style scoped lang="less">
.home {
    font-size: 14px;
    padding: 0 15px;
}
</style>
