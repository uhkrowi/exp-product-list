<script setup>
import { ref } from "vue";

const filter = ref({
  fourRateMore: false,
  availStock: false,
});
</script>

<template>
  <div
    class="grid grid-cols-1 gap-[25px] border-2 border-custom_border rounded px-[15px] py-[20px] text-[15px] text-[#888888]"
  >
    <div class="flex justify-between items-center">
      <span>Rating 4 ke atas</span>
      <input
        v-model="filter.fourRateMore"
        type="checkbox"
        @change="$emit('onFilterProduct', filter)"
        class=""
        style="z-index: 99"
      />
    </div>
    <div class="flex justify-between items-center">
      <span>Stock Tersedia</span>
      <input
        v-model="filter.availStock"
        type="checkbox"
        @change="$emit('onFilterProduct', filter)"
      />
    </div>
  </div>
</template>
