<script setup>
import Stock from "@/components/product/Stock.vue";
import WishButton from "@/components/product/WishButton.vue";
import RatingAndReview from "@/components/product/RatingAndReview.vue";
import Counter from "@/components/product/detail/Counter.vue";
import Point from "@/components/product/Point.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import ButtonRedeem from "@/components/product/detail/ButtonRedeem.vue";
import ButtonAddToCart from "@/components/product/detail/ButtonAddToCart.vue";
import Info from "@/components/product/detail/Info.vue";
import Display from "@/components/product/detail/Display.vue";
import Detail from "@/components/product/detail/Detail.vue";

import http from "@/helper/http";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const $route = useRoute();
const product = ref({});
const breadcrumbItems = ref([]);

onMounted(async () => {
  try {
    const { data } = await http.get(`gifts/${$route.params.id}`);

    product.value = data.data.attributes;

    // set breadcrumb items
    breadcrumbItems.value = [
      ...$route.meta.breadcrumb,
      {
        label: product.value.name,
        url: null,
      },
    ];
  } catch (e) {
    console.log(e);
    alert("Gagal memproses data, mohon reload halaman");
  }
});
</script>

<template>
  <div class="md:px-[50px] xl:px-0">
    <div class="text-[14px] text-[#262626]">
      <Breadcrumb :items="breadcrumbItems" />
    </div>
    <div class="w-full flex justify-center">
      <div
        class="grid grid-cols-1 sm:grid-cols-[1fr_1fr] xl:grid-cols-[550px_405px] gap-[45px] mt-[35px]"
      >
        <Display :product="product" />
        <div>
          <h1 class="block text-[24px] font-bold">{{ product.name }}</h1>
          <RatingAndReview
            :rating="product.rating"
            :numOfReviews="product.numOfReviews"
            :iconSize="16"
            class="text-[14px] text-[#838EAB] mt-[12px]"
          />
          <div class="flex items-center mt-[13px]">
            <Point
              :numOfPoints="product.points"
              :icon="'large'"
              class="text-[24px] text-[#74B71B] font-bold"
            />
            <Stock
              :numOfStock="product.stock"
              class="text-[14px] font-semibold ml-[9px]"
            />
          </div>
          <Info
            :info="product.info"
            class="text-[14px] text-[#262626] mt-[24px] leading-[28px]"
          />
          <span class="block text-[#838EAB] mt-[24px]">Jumlah</span>
          <Counter :stock="product.stock" class="mt-[16px]" />
          <div
            class="grid grid-cols-[70px_minmax(120px,_150px)_minmax(120px,_150px)] gap-[10px] xl:gap-[19px] mt-[32px]"
          >
            <WishButton
              :productID="product.id"
              :isWishlist="product.isWishlist"
              :width="70"
              :height="45"
            />
            <ButtonRedeem />
            <ButtonAddToCart />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[73px]">
      <Detail :product="product" />
    </div>
  </div>
</template>
