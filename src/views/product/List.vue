<script setup>
import ProductCardGridList from "@/components/product/CardGridList.vue";
import ProductFilter from "@/components/product/Filter.vue";
import ProductSorter from "@/components/product/Sorter.vue";

import http from "@/helper/http";
import { filterProduct, sortProduct } from "@/helper/product";
import { ref, onMounted } from "vue";

const products = ref([]);
const filter = ref({});
const sortBy = ref("newest");

async function fetchProduct() {
  try {
    const { data } = await http.get("gifts?page[number]=1&page[size]=100");

    products.value = data.data;

    products.value = sortProduct(products.value, sortBy.value);
    products.value = filterProduct(products.value, filter.value);

    // show only 9 products
    products.value = products.value.slice(0, 9);
  } catch (e) {
    console.log(e);
    alert("Gagal memproses data, mohon reload halaman");
  }
}

// client-side sorting
function onSortProduct(sortByArg) {
  sortBy.value = sortByArg;

  fetchProduct();
}

// client-side filtering
function onFilterProduct(filterArg) {
  filter.value = filterArg;

  fetchProduct();
}

onMounted(async () => {
  await fetchProduct();
});
</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-[250px_793px] gap-[57px]">
    <div>
      <div
        class="pb-[23px] h-[39px] text-[17px] font-bold border-b-2 text-[#3C3C3F]"
      >
        Filter
      </div>
      <div class="pt-[20px]">
        <ProductFilter
          @onFilterProduct="onFilterProduct"
          class="md:max-w-[250px]"
        />
      </div>
    </div>
    <div>
      <div
        class="flex justify-between pb-[23px] border-b-2 h-[39px] relative lg:px-0"
      >
        <span class="text-[17px] text-[#3C3C3F] font-bold">Product List</span>
        <ProductSorter
          @onSortProduct="onSortProduct"
          class="absolute top-[-10px]"
        />
      </div>
      <div class="pt-[20px] w-full flex justify-center">
        <ProductCardGridList :products="products" />
      </div>
    </div>
  </div>
</template>
