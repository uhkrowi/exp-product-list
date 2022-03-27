<script setup>
const socials = [
  {
    name: "Instagram",
    icon: "/images/ig.svg",
  },
  {
    name: "Facebook",
    icon: "/images/fb.svg",
  },
  {
    name: "Twitter",
    icon: "/images/twt.svg",
  },
];
</script>

<template>
  <div
    class="lg:h-[99px] bg-[#232323] px-[10px] py-[20px] lg:py-0 lg:px-[137px] grid grid-cols-1 lg:flex justify-between items-center"
  >
    <div class="flex justify-center lg:block">
      <div class="grid grid-cols-3 gap-[30px] text-white">
        <div
          v-for="(social, index) in socials"
          :key="index"
          class="flex items-center"
        >
          <object type="image/svg+xml" :data="social.icon">
            {{ social.name }}
          </object>
        </div>
      </div>
    </div>

    <div
      class="w-full text-[14px] text-[#FFFFFF] text-center lg:text-right mt-8 lg:mt-0"
    >
      <span class="block lg:inline">Terms & Condition</span>
      <span class="hidden lg:inline-block">&nbsp; | &nbsp;</span>
      <span class="block mt-3 lg:mt-0 lg:inline"
        >Copyright &copy; 2018. All rights reserved.</span
      >
      <span class="block lg:inline mt-3 lg:mt-0">PT Radya Gita Bahagi</span>
    </div>
  </div>
</template>
