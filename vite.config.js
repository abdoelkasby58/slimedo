import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    vueJsx(),
    tailwindcss(),
    command === "serve" ? vueDevTools() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    minify: "esbuild",
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@iconify/vue")) {
              return "icons";
            }
            if (
              id.includes("vue") ||
              id.includes("vue-router") ||
              id.includes("pinia")
            ) {
              return "vue";
            }
            return "vendor";
          }
        },
      },
    },
  },
}));
