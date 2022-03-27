<script setup>
import Stock from "@/components/product/Stock.vue";
import SpecialIcon from "@/components/product/SpecialIcon.vue";
import WishButton from "@/components/product/WishButton.vue";
import RatingAndReview from "@/components/product/RatingAndReview.vue";
import ProductCounter from "@/components/product/ProductCounter.vue";
import PointDetail from "@/components/product/PointDetail.vue";
import Breadcrumb from "@/components/common/Breadcrumb.vue";

import http from "@/helper/http";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const $route = useRoute();
const product = ref({});
const breadcrumbItems = ref([]);

onMounted(async () => {
  const { data } = await http.get(`gifts/${$route.params.id}`);

  product.value = data.data.attributes;

  // set breadcrumb items
  breadcrumbItems.value = [
    {
      label: "List product",
      url: "/product",
    },
    {
      label: product.value.name,
      url: null,
    },
  ];
});
</script>

<template>
  <div class="">
    <div class="text-[14px] text-[#262626]">
      <Breadcrumb :items="breadcrumbItems" />
    </div>
    <div class="w-full flex justify-center">
      <div class="grid grid-cols-1 sm:grid-cols-[1fr_1fr] lg:grid-cols-[550px_405px] gap-[45px] mt-[35px]">
        <div class="lg:h-[550px] relative flex flex-col justify-center items-center">
          <div class="max-w-[413px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-full py-[10px] lg:py-0 lg:p-[20px]">
            <img :src="product.images?.[0]" :alt="product.slug" class="h-full" />
          </div>
          <SpecialIcon
            v-if="product?.id"
            :item="product"
            class="absolute top-[2px] right-[2px]"
          />
        </div>
        <div>
          <span class="block text-[24px] font-bold">{{ product.name }}</span>
          <RatingAndReview
            :rating="product.rating"
            :numOfReviews="product.numOfReviews"
            :iconSize="16"
            class="text-[14px] text-[#838EAB] mt-[12px]"
          />
          <div class="flex items-center mt-[13px]">
            <PointDetail :numOfPoints="product.points" />
            <Stock
              :numOfStock="product.stock"
              class="text-[14px] font-semibold ml-[9px]"
            />
          </div>
          <div
            v-html="product.info"
            class="text-[14px] text-[#262626] mt-[24px] leading-[28px]"
          ></div>
          <span class="block text-[#838EAB] mt-[24px]">Jumlah</span>
          <ProductCounter :stock="product.stock" class="mt-[16px]" />
          <div class="grid grid-cols-[auto_auto_auto] gap-[19px] mt-[32px]">
            <WishButton
              :productID="product.id"
              :isWishlist="product.isWishlist"
              :width="70"
              :height="45"
            />
            <img
              src="/images/Group 3018.svg"
              alt="Group 3018"
              class="h-[45px]"
            />
            <img
              src="/images/Group 3019.svg"
              alt="Group 3019"
              class="h-[45px]"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[73px]">
      <div class="h-[50px] border-b border-[#E6E8EE]">
        <div
          class="flex items-center w-[150px] h-full border-b-[3px] border-[#74B71B]"
        >
          <span class="text-[16px] text-[#74B71B] font-semibold"
            >Info produk</span
          >
        </div>
      </div>
      <h2 class="mt-[47.5px] text-[20px] text-[#006A4E]">Rincian</h2>
      <div
        v-html="product.description"
        class="text-[14px] text-[#262626] mt-[25px] leading-[50px]"
        style="letter-spacing: 0.01px"
      ></div>
    </div>
  </div>
</template>
