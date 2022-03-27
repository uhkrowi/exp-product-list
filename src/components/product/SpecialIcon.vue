<script setup>
import { computed, watch } from "vue";

// should place to a variable, don't do destructing or you can't watch it
const props = defineProps({
  item: Object,
});

const labelIcon = computed(() => {
  let icon = null;
  const isNew = props.item.isNew == 1;
  const isBestSeller = props.item.rating >= 4 && props.item.numOfReviews > 25;
  const isHotItem = isNew && isBestSeller;

  if (isHotItem) {
    icon = "/images/Group 3036.svg";
  } else if (isBestSeller) {
    icon = "/images/Group 3030.svg";
  } else if (isNew) {
    icon = "/images/Group 3037.svg";
  }

  return icon;
});
</script>

<template>
  <div>
    <img
      v-if="labelIcon !== null"
      :src="labelIcon"
      class="h-[80px]"
      :alt="labelIcon"
    />
  </div>
</template>
