import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/bymaria-design/", // ⭐ ADICIONADO PARA GITHUB PAGES
  plugins: [react()]
});
