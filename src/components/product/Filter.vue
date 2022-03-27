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
      <!-- <div class="w-[15px] h-[15px] relative cb-container">
        <input
          v-model="filter.fourRateMore"
          type="checkbox"
          @change="$emit('onFilterProduct', filter)"
          class=""
          style="z-index: 99;"
        />
        <span class="checkmark absolute" style="z-index: 98;"></span>
      </div> -->
      <!-- <label class="container">
        <input type="checkbox" checked="checked" />
        <span class="checkmark"></span>
      </label> -->
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

<style lang="scss">
.checkmark {
  height: 15px;
  width: 15px;
  background-color: #eee;
}

.cb-container input:checked ~ .checkmark:after {
  display: block;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.cb-container .checkmark:after {
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* When the checkbox is checked, add a blue background */
.cb-container input:checked ~ .checkmark {
  background-color: #2196f3;
}
</style>
