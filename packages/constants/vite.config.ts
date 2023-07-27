import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: "./index.ts",
      name: "ims-ui-constants",
      fileName: "ims-ui-constants",
    },
    minify: false,
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
