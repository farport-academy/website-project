import { defineConfig } from "vite";
import path from "node:path";
import process from "node:process";
import getHtmlEntryFiles from "./scripts/getHtmlEntryFiles.mjs";

export default defineConfig({
  root: "src/pages",
  publicDir: "../../public",
  build: {
    outDir: "../../dist",
    rollupOptions: {
      input: getHtmlEntryFiles("src/pages/"),
    },
  },
  server: {
    open: true,
    port: 3000,
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: { "/src": path.resolve(process.cwd(), "src") },
  },
});
