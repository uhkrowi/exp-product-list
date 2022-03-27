<script setup>
import http from "@/helper/http";
import { ref } from "vue";

const props = defineProps({
  productID: Number,
  isWishlist: Number,
  width: Number,
  height: Number,
});

const isWishlist = ref(false);

function toggleWishList() {
  try {
    http.post(`gifts/${props.productID}/wishlist`);
  } catch (e) {
    console.log(e);
    alert("Gagal menyimpan sebagai favorite");
  }

  isWishlist.value = true;
}
</script>

<template>
  <div class="cursor-pointer">
    <img
      v-if="props.isWishlist || isWishlist"
      src="/images/Group 3044.svg"
      alt="Group 3044"
      @click="
        (e) => {
          toggleWishList();
          e.stopPropagation();
        }
      "
      :class="[`w-[${props.width}px]`, `h-[${props.height}px]`]"
    />
    <img
      v-else
      src="/images/Group 3041.svg"
      alt="Group 3044"
      @click="
        (e) => {
          toggleWishList();
          e.stopPropagation();
        }
      "
      :class="[`w-[${props.width}px]`, `h-[${props.height}px]`]"
    />
  </div>
</template>
