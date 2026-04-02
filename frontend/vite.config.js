import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        // target: "http://localhost:8000", // your backend port
        target: env.VITE_BACKEND_URL,
        changeOrigin: true,
      },
    },
  },
});
