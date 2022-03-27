<script setup>
import ProductCard from "@/components/product/Card.vue";

const props = defineProps({
  products: Array,
});
</script>

<template>
  <!-- <div class="w-full flex justify-center bg-red-400"> -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
      <ProductCard
        v-for="(product, index) in props.products"
        :key="index"
        :product="product"
      />
    </div>
  <!-- </div> -->
</template>
