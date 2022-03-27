<script setup>
const props = defineProps({
  items: Array,
});
</script>

<template>
  <div class="flex">
    <div v-for="(item, index) in props.items">
      <router-link v-if="item?.url" :to="item.url">{{
        item.label
      }}</router-link>
      <span v-else>{{ item.label }}</span>
      <span v-if="index != props.items.length - 1">&nbsp; &gt; &nbsp;</span>
    </div>
  </div>
</template>
