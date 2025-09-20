import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from 'vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),commonjs()],
  base: "./AwesomeWeb",
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "build",
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
