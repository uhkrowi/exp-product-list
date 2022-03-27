<script setup>
import { computed } from "vue";

const props = defineProps({
  rating: Number,
  numOfReviews: Number,
  iconSize: Number,
});

const stars = computed(() => {
  const rating = Math.round(props.rating * 2) / 2;
  let images = "";
  let rate = rating;

  for (let i = 0; i < 5; i++) {
    if (rate > 0.5) {
      images += `<img src='/images/star.svg' alt='star' class='mr-[2px]' style='width: ${props.iconSize}px' />`;
    } else if (rate == 0.5) {
      images += `<img src='/images/star-half.svg' alt='star-half' class='mr-[2px]' />`;
    } else {
      images += `<img src='/images/star-empty.svg' alt='star-empty' />`;
    }
    rate--;
  }

  return images;
});
</script>

<template>
  <div class="flex items-center">
    <div v-html="stars" class="flex"></div>
    <span class="block ml-2">{{ props.numOfReviews }} Reviews</span>
  </div>
</template>
