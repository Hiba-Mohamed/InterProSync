import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/InterProSync/", // Ensure this is set to your GitHub Pages repo name
  build: {
    outDir: "dist", // Make sure Vite is outputting to the correct directory
    rollupOptions: {
      input: "/src/main.tsx", // Ensure this points to the correct entry file
    },
  },
});