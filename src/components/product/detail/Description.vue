<script setup>
const props = defineProps({
  description: String,
});
</script>

<template>
  <div
    v-html="props.description"
    class="text-[14px] text-[#262626] mt-[25px] leading-[50px]"
    style="letter-spacing: 0.01px"
  ></div>
</template>
