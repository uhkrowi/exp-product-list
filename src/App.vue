<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

body {
  font-family: Raleway, sans-serif;
}

/* width */
::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

select {
  background: url("/images/Polygon 1.svg") no-repeat;
  background-position: calc(100% - 0.75rem) center !important;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  appearance: none !important;
  padding-right: 2rem !important;
}
</style>
