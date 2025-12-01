import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "#components": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/components"
      ),
      "#constants": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/constants"
      ),
      "#store": resolve(dirname(fileURLToPath(import.meta.url)), "src/store"),
      "#hoc": resolve(dirname(fileURLToPath(import.meta.url)), "src/hoc"),
      "#windows": resolve(
        dirname(fileURLToPath(import.meta.url)),
        "src/windows"
      ),
    },
  },
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "credentialless",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  preview: {
    headers: {
      "Cross-Origin-Embedder-Policy": "credentialless",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  optimizeDeps: {
    exclude: ["pdfjs-dist"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "gsap-vendor": ["gsap", "@gsap/react"],
          "pdf-vendor": ["react-pdf", "pdfjs-dist"],
        },
      },
    },
  },
});
