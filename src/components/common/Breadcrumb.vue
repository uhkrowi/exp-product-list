<script setup>
const props = defineProps({
  items: Array,
});

// let links = ""

// props.items.forEach(item => {
//   console.log(item)
// })

// // console.log(props.items)
</script>

<template>
  <div class="flex">
    <!-- <component
      v-for="(item, index) in props.items"
      :is="item?.url ? 'router-link' : 'span'"
    >
      {{ item.label }}
    </component> -->
    <!-- {{ props.items[0]?.url }} -->
    <div v-for="(item, index) in props.items">
      <router-link v-if="item?.url" :to="item.url">{{ item.label }}</router-link>
    </div>
    <!-- <router-link to="/product">List product</router-link> > {{ product.name }} -->
  </div>
</template>
