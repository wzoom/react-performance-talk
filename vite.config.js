import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { dependencies } from "./package.json";

const VENDOR_PACKAGES = ["react", "react-router-dom", "react-dom"];

function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if (VENDOR_PACKAGES.includes(key)) return;
    chunks[key] = [key];
  });
  //console.log("OTHER CHUNKS:", Object.keys(chunks).join(", "));
  return chunks;
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: VENDOR_PACKAGES,
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
