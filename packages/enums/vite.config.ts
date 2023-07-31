import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./index.ts",
      name: "ims-ui-enums",
      fileName: "ims-ui-enums",
    },
    minify: false,
  },
});
