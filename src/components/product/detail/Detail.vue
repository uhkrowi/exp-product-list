<script setup>
import Description from "@/components/product/detail/Description.vue";

const props = defineProps({
  product: Object,
});
</script>

<template>
  <div class="h-[50px] border-b border-[#E6E8EE]">
    <div
      class="flex items-center w-[150px] h-full border-b-[3px] border-[#74B71B]"
    >
      <h2 class="text-[16px] text-[#74B71B] font-semibold">Info produk</h2>
    </div>
  </div>
  <h2 class="mt-[47.5px] text-[20px] text-[#006A4E]">Rincian</h2>
  <Description :description="props.product.description" />
</template>
