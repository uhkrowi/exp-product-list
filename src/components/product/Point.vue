<script setup>
const { numOfPoints } = defineProps({
  numOfPoints: Number,
  icon: {
    type: String,
    default: "small",
  },
});
</script>

<template>
  <div class="block text-[14px] text-[#74B71B] flex items-center">
    <object
      v-if="icon === 'small'"
      type="image/svg+xml"
      data="/images/3032.svg"
    >
      Group 3032
    </object>
    <img
      v-else
      src="/images/give-point.png"
      alt="point give detail"
      class="w-[20px] h-[20px]"
    />
    <span class="ml-2">{{ numOfPoints }} poins</span>
  </div>
</template>
