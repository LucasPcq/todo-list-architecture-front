import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      stylus: {
        imports: [
          path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            "src/shared/themes/theme.styl"
          ),
        ],
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
  define: {
    "process.env": process.env,
  },
  server: {
    port: 3333,
  },
});
