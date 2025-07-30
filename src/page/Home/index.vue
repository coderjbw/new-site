<template>
    <div class="home">
        <div>
            <!-- 顶部区域 -->
            <introParagraph></introParagraph>
            <!-- 默认内容 -->
            <defaultQuestion />
            <chatMessage />
        </div>
        <div style="height: 300px"></div>
        <!-- 底部输入框 -->
        <inputArea />
    </div>
</template>

<script setup lang="ts">
import introParagraph from '@/components/IntroParagraph/index.vue';
import chatMessage from '@/components/ChatMessage/index.vue';
import inputArea from '@/components/InputArea/index.vue';
import defaultQuestion from '@/components/DefaultQuestion/index.vue';
import { watch, onMounted, ref, onUnmounted } from "vue";
import { throttle } from "lodash";
import { chatbotMessage } from "@/store/index";
const store = chatbotMessage();
// 监听滚动，对话输出自动滚动底部
watch(
  () => store.messages,
  (val) => {
    //如果用户下拉页面，就不在自动滚动
    if (store.userScrolled) return;
    automatic();
  },
  { deep: true }
);
const automatic = () => {
  const contentElement = document.querySelector(".home");
  window.scrollTo({
    top: contentElement?.scrollHeight,
    behavior: "smooth",
  });
};
onMounted(() => {
  // 监听滚动事件
  window.addEventListener("scroll", throttledHandleScroll);
});
// 监听滚动方向
const lastScrollTop = ref(0);
const handleScroll = () => {
  const currentScroll = window.scrollY;
  // console.log(currentScroll);
  if (currentScroll > lastScrollTop.value) {
    // console.log("上拉");
  } else {
    // console.log("下拉");
    store.userScrolled = true;
  }
  lastScrollTop.value = currentScroll;
};
// 节流
const throttledHandleScroll = throttle(handleScroll, 300);
// 页面卸载时触发
onUnmounted(() => {
  window.removeEventListener("scroll", throttledHandleScroll);
});
</script>

<style scoped lang="less">
.home {
    height: 100%;
    font-size: 14px;
    padding: 0 15px;
    overflow-y: scroll;
}
</style>
