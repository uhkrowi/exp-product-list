import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import { VitePWA } from "vite-plugin-pwa";
// import { registerSW } from "virtual:pwa-register/vue";

// if ("serviceWorker" in navigator) {
//   // && !/localhost/.test(window.location)) {
//   registerSW();
// }

// if ("serviceWorker" in navigator) {
//   // && !/localhost/.test(window.location) && !/lvh.me/.test(window.location)) {
//   const updateSW = registerSW({
//     onNeedRefresh() {
//       Toastify({
//         text: `<h4 style='display: inline'>An update is available!</h4>
//                <br><br>
//                <a class='do-sw-update'>Click to update and reload</a>  `,
//         escapeMarkup: false,
//         gravity: "bottom",
//         onClick() {
//           updateSW(true);
//         },
//       }).showToast();
//     },
//   });
// }

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue(), VitePWA()],
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
