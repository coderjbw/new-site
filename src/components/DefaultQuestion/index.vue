<template>
    <div class="support-agent">
        <img src="@/assets/kefu.png" alt="" />
        <p>云游宝</p>
    </div>
    <div class="customer-service">
        <span class="tips">你可以这样问我</span>
        <div class="customer-service-list" v-for="(item, index) in displayedList" :key="index" @click="selectSend(item)">
            <img src="@/assets/wenti.png" alt="" />
            <p>{{ item }}</p>
        </div>
    </div>
    <div class="change-section" @click="switchMode">
        <img src="@/assets/huanyihuan.png" alt="" />
        <p>换一换</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.support-agent {
    display: flex;
    align-items: center;
    img {
        object-fit: cover;
        width: 35px;
        height: 35px;
        margin-right: 8px;
    }
    p {
        font-size: 14px;
    }
}
.customer-service {
    background-color: #ffffff;
    margin: 10px 0;
    padding: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    .tips {
        font-size: 16px;
    }
    .customer-service-list {
        display: flex;
        align-items: center;
        background-color: #f2f4ff;
        border-radius: 40px;
        margin-top: 10px;
        padding: 5px 7px;
        img {
        width: 25px;
        height: 25px;
        object-fit: cover;
        }
        p {
        font-size: 14px;
        padding-left: 4px;
        }
    }
}
.change-section {
    display: inline-flex;
    align-items: center;
    background-color: #a8abb0;
    border-radius: 40px;
    padding: 4px 7px;
    img {
        width: 20px;
        height: 20px;
    }
    p {
        font-size: 14px;
        padding-left: 7px;
        color: #ffffff;
    }
}
</style>
