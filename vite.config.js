import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/bymaria-design/", // <--- ESTE É O CAMINHO CORRETO PARA O GITHUB PAGES!
  plugins: [react()]
});