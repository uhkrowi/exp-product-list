<script setup>
import Point from "@/components/product/Point.vue";
import RatingAndReview from "@/components/product/RatingAndReview.vue";
import Stock from "@/components/product/Stock.vue";
import SpecialIcon from "@/components/product/SpecialIcon.vue";
import WishButton from "@/components/product/WishButton.vue";

import { computed } from "vue";

const props = defineProps({
  product: Object,
});

const product = computed(() => props.product?.attributes);
</script>

<template>
  <div
    class="flex flex-col relative justify-between bg-white border-2 border-custom_border rounded-lg w-full md:w-[250px] h-[420px] px-[20px] pt-[25px] pb-[30px] cursor-pointer"
    @click="$router.push(`/product/${props.product.id}`)"
  >
    <SpecialIcon :item="product" class="absolute top-[2px] right-[2px]" />
    <div class="px-[15px]">
      <Stock :numOfStock="product.stock" class="text-[12px] font-bold" />
    </div>
    <div class="flex justify-center px-[15px]">
      <img :src="product.images[0]" :alt="product.slug" class="max-h-[265px]" />
    </div>
    <div>
      <span class="block text-[16px]">{{ product.name }}</span>
      <div class="flex justify-between items-end">
        <div>
          <Point :numOfPoints="product.points" />
          <RatingAndReview
            :rating="product.rating"
            :numOfReviews="product.numOfReviews"
            class="text-[12px] text-[#838EAB]"
          />
        </div>
        <WishButton :productID="product.id" :isWishlist="product.isWishlist" />
      </div>
    </div>
  </div>
</template>
