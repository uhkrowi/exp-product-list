<script setup>
import Footer from "@/components/layout-default/Footer.vue";
import Header from "@/components/layout-default/Header.vue";
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-[1280px]">
      <Header />

      <div
        class="w-full flex flex-col justify-center items-center relative content"
      >
        <div class="w-full pb-[160px] px-[20px] xl:px-[57px]">
          <slot />
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
.content {
  background-image: url("/images/1784.svg");
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
