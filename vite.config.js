import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/filltrip-db": {
        target: "http://localhost", // XAMPP Apache
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
