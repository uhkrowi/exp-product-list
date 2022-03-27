<script setup>
const { numOfStock } = defineProps({
  numOfStock: Number,
});
</script>

<template>
  <div>
    <span v-if="numOfStock >= 5" class="text-[#79B625]">In Stock</span>
    <span v-else-if="numOfStock > 0" class="text-[#e7246b]">Stock &lt; 5</span>
    <span v-else class="text-[#e7246b]">Sold Out</span>
  </div>
</template>
