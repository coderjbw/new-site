<template>
  <van-nav-bar
    title="商品详情"
    left-arrow
    fixed
    placeholder
    @click-left="onClickLeft"
  />
  <div v-for="(item, index) in goodsDetailsData" :key="index">
    <img class="cover-image" :src="item.coverImage" alt="" />
    <div class="price-and-title">
      <p class="goods-price">¥{{ item.price }}/人</p>
      <p class="goods-title">{{ item.contentTitle }}</p>
    </div>
    <div class="goods-details">
      <p class="goods-describe">产品特色</p>
      <img
        v-for="(item_a, index_a) in item.productImages"
        :key="index_a"
        :src="item_a"
        alt=""
      />
    </div>
    <div class="submit">
      <van-button type="primary" block>立即报名</van-button>
    </div>
  </div>
  <div style="height: 100px"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const $router = useRoute();
import { goodsDetails } from "@/api/request";
import { ServerGoodsDetails } from "@/types/index";
// 存储商品详情数据
const goodsDetailsData = ref<ServerGoodsDetails>([]);
onMounted(async () => {
  const goodsId = $router.query.id as string;
  const res = await goodsDetails({ goodsId });
  console.log(res);
  goodsDetailsData.value = res.data;
});
const onClickLeft = () => history.back();
</script>

<style scoped lang="less">
.cover-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}
.price-and-title {
  background-color: #ffffff;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  .goods-price {
    font-size: 22px;
    color: red;
    padding-bottom: 10px;
  }
  .goods-title {
    font-size: 19px;
  }
}
.goods-details {
  background-color: #ffffff;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  .goods-describe {
    padding-bottom: 10px;
    font-weight: bold;
  }
  img {
    width: 100%;
  }
}
.submit {
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 20px 20px 20px;
}
</style>
