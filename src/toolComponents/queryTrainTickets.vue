<template>
  <div>
    <div style="height: 4px"></div>
    <div class="result-item" v-for="(item, index) in fuctionData" :key="index">
      <div>
        <p class="query-time">{{ item.departuretime }}</p>
        <p class="station-name">{{ item.station }}</p>
      </div>
      <div class="train-run-number">
        <p>{{ item.costtime }}</p>
        <p>{{ item.trainno }}</p>
      </div>
      <div>
        <p class="query-time">{{ item.arrivaltime }}</p>
        <p class="station-name">{{ item.endstation }}</p>
      </div>
      <div>
        <p class="product-price">¥{{ item.priceed }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ServerQueryTrainTicketsType } from "@/types/index";
defineProps<{
  fuctionData: ServerQueryTrainTicketsType;
}>();
</script>

<style scoped lang="less">
.result-item {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 7px 0;
  border-top: 1px solid #f6f8fa;
  .query-time {
    font-weight: bold;
    font-size: 17px;
  }
  .station-name {
    font-weight: bold;
    font-size: 14px;
  }
  .train-run-number {
    p {
      font-size: 13px;
      color: #666697;
    }
  }
  .product-price {
    font-size: 17px;
    font-weight: bold;
    color: #006ff6;
  }
}
</style>
