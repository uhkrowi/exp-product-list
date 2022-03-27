<script setup>
import SpecialIcon from "@/components/product/SpecialIcon.vue";

const props = defineProps({
  product: Object,
});
</script>

<template>
  <div class="lg:h-[550px] relative flex flex-col justify-center items-center">
    <div
      class="max-w-[413px] w-[200px] sm:w-[200px] md:w-[300px] lg:w-[350px] xl:w-full py-[10px] lg:py-0 lg:p-[20px]"
    >
      <img
        :src="props.product.images?.[0]"
        :alt="props.product.slug"
      />
    </div>
    <SpecialIcon
      v-if="props.product?.id"
      :item="props.product"
      class="absolute top-[2px] right-[2px]"
    />
  </div>
</template>
