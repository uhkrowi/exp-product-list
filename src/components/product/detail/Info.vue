<script setup>
const props = defineProps({
  info: String,
});
</script>

<template>
  <div v-html="props.info"></div>
</template>
