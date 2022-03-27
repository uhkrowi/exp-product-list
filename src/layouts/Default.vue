<script setup>
import Footer from "@/components/layout-default/Footer.vue";
import Header from "@/components/layout-default/Header.vue";
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-[1280px]">
      <Header />

      <div class="w-full flex flex-col justify-center items-center relative">
        <div class="w-full pb-[160px] px-[20px] xl:px-[57px]" style="z-index: 99">
          <slot />
        </div>
        <img
          src="/images/Group 1784.svg"
          alt=""
          class="w-full absolute bottom-0"
          style="z-index: 98"
        />
      </div>

      <Footer />
    </div>
  </div>
</template>
