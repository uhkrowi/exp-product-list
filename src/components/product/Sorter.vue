<script setup>
import { ref } from "vue";

const sortBy = ref("newest");
</script>

<template>
  <div class="relative">
    <div class="absolute flex items-center right-0">
      <span class="mr-5 text-[12px] text-[#888888] hidden md:block">Urutkan</span>
      <select
        v-model="sortBy"
        class="w-[169px] h-[35px] m-0 border-2 border-custom_border rounded-full px-[15px] text-[12px] text-[#888888]"
        @change="$emit('onSortProduct', sortBy)"
      >
        <option value="newest" class="text-center">Terbaru</option>
        <option value="review" class="text-center">Ulasan</option>
      </select>
    </div>
  </div>
</template>
