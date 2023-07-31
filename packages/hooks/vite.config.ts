import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
export default defineConfig({
  // 增加插件的使用
  plugins: [vue()],
  build: {
    lib: {
      entry: "./index.ts",
      name: "ims-ui-hooks",
      fileName: "ims-ui-hooks",
    },
    minify: false,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue",
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^ims-ui$/,
        replacement: resolve(__dirname, "..", "ims-ui", "index.ts"),
      },
      {
        find: /^@ims-ui\/(.*)$/,
        replacement: resolve(__dirname, "..", "$1", "index.ts"),
      },
    ],
  },
});
