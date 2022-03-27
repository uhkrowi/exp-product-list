<script setup>
const props = defineProps({
  numOfPoints: Number,
});
</script>

<template>
  <img
    src="/images/point give detail@2x.png"
    alt="point give detail@2x"
    class="w-[20px] h-[20px]"
  />
  <span class="text-[24px] text-[#74B71B] font-bold ml-[5px]"
    >{{ numOfPoints }} poins</span
  >
</template>
