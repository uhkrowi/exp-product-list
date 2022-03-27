<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  stock: Number,
});

const counter = ref(1);
const counterDisplay = computed(() => {
  if (props.stock != 0) {
    return counter.value;
  }
  return 0;
});

function increase() {
  if (counter.value < props.stock) {
    counter.value++;
  }
}

function decrease() {
  if (counter.value > 1) {
    counter.value--;
  }
}
</script>

<template>
  <div class="flex text-[#525F7F]">
    <button
      class="w-[35px] h-[35px] flex justify-center items-center bg-[#F2F2F4] text-[32px]"
      :disabled="props.stock < 1"
      @click="decrease()"
    >
      -
    </button>
    <span
      class="w-[35px] h-[35px] flex justify-center items-center text-[16px]"
      >{{ counterDisplay }}</span
    >
    <button
      class="w-[35px] h-[35px] flex justify-center items-center bg-[#F2F2F4] text-[32px]"
      :disabled="props.stock < 1"
      @click="increase()"
    >
      +
    </button>
  </div>
</template>
