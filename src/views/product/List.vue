<script setup>
import ProductCardGridList from "@/components/product/CardGridList.vue";
import ProductFilter from "@/components/product/Filter.vue";
import ProductSorter from "@/components/product/Sorter.vue";

import http from "@/helper/http";
import { ref, onMounted } from "vue";

const products = ref([]);
const filter = ref({});
const sortBy = ref("newest");

async function fetchProduct() {
  const { data } = await http.get("gifts?page[number]=1&page[size]=100");

  products.value = data.data;

  sortProduct();
  filterProduct();

  products.value = products.value.slice(0, 9);
}

// client-side
function onSortProduct(sortByArg) {
  sortBy.value = sortByArg;

  fetchProduct();
}

function sortProduct() {
  if (sortBy.value == "review") {
    products.value = products.value.sort((a, b) => {
      if (a.attributes.numOfReviews > b.attributes.numOfReviews) return -1;
      else if (a.attributes.numOfReviews < b.attributes.numOfReviews) return 1;
      return 0;
    });
  } else if (sortBy.value == "newest") {
    products.value = products.value.sort((a, b) => {
      if (a.attributes.id > b.attributes.id) return -1;
      else if (a.attributes.id < b.attributes.id) return 1;
      return 0;
    });
  }
}

function onFilterProduct(filterArg) {
  filter.value = filterArg;

  fetchProduct();
}

function filterProduct() {
  if (filter.value.fourRateMore) {
    products.value = products.value.filter(
      (product) => product.attributes.rating >= 4
    );
  }
  if (filter.value.availStock) {
    products.value = products.value.filter(
      (product) => product.attributes.stock > 0
    );
  }
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
        <ProductFilter @onFilterProduct="onFilterProduct" class="md:max-w-[250px]" />
      </div>
    </div>
    <div>
      <div class="flex justify-between pb-[23px] border-b-2 h-[39px] relative lg:px-0">
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
