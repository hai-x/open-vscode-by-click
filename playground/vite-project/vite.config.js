import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import addCodeLocation from "@hai/add-code-location";
import openCodeServer from "@hai/open-code-server";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [addCodeLocation(), vue(), openCodeServer()],
});
